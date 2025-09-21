import joblib
from config import *
from ingestion import ingest
from preprocessing import preprocess_image
from feature_extraction import extract_image_features
from verification import verify
from explainability import explain
from feedback import educate, report

import pytesseract
from PIL import Image
import speech_recognition as sr
import io
from pydub import AudioSegment
import os

# Load model and vectorizer once globally
model = joblib.load(ANTROPY_MODEL_PATH)
vectorizer = joblib.load("vectorizer.pkl")

# OCR function for images
def image_to_text(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text.strip()

# Speech to text for audio files
def audio_to_text(audio_path):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_path) as source:
        audio_data = recognizer.record(source)
    try:
        text = recognizer.recognize_google(audio_data)
    except sr.UnknownValueError:
        text = ""
    os.remove(audio_path)
    return text.strip()

def run_pipeline(source_type, source_input, user_id=None):
    # Handle different input sources
    if source_type == 'text':
        raw = ingest(source_type, source_input)
    elif source_type == 'image':
        # Convert image to text first
        raw = image_to_text(source_input)
    elif source_type == 'audio':
        raw = audio_to_text(source_input)
    else:
        raise ValueError("source_type must be 'text', 'image', or 'audio'")
    
    print(f"Extracted Text:\n{raw}\n")
    
    # Text feature extraction
    features = vectorizer.transform([raw])
    
    # Reshape to 2D just in case
    if len(features.shape) == 1:
        features = features.reshape(1, -1)
    
    facts = verify(raw, FACT_CHECK_API_KEY)
    prediction = model.predict(features)
    explanation = explain(model, features)
    tips = educate(prediction, str(explanation))
    
    if user_id:
        report(raw, user_id, FIREBASE_URL)
    
    return {
        "prediction": prediction,
        "facts": facts,
        "explanation": str(explanation),
        "tips": tips
    }

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python media_factcheck_pipeline.py <source_type> <file_or_text_input> [user_id]")
        sys.exit(1)
    
    source_type = sys.argv[1].lower()
    source_input = sys.argv[2]
    user_id = sys.argv[3] if len(sys.argv) > 3 else None
    
    result = run_pipeline(source_type, source_input, user_id)
    print("Prediction:", result['prediction'])
    if 'facts' in result and 'claims' in result['facts']:
        print("\n🔍 Fact-Check Results:")
        for claim in result['facts']['claims']:
            print(f"Claim: {claim['text']}")
            for review in claim.get('claimReview', []):
                print(f"  Source: {review['publisher']['name']} ({review['publisher'].get('site', 'N/A')})")
                print(f"  Title: {review.get('title', 'N/A')}")
                print(f"  URL: {review.get('url', 'N/A')}")
                print(f"  Date: {review.get('reviewDate', 'N/A')}")
                print(f"  Rating: {review.get('textualRating', 'N/A')}")
                print()


# Sample input= Some people say 5G technology spreads COVID-19.