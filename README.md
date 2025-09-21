# Misinformation Fact-Check Portal

A full-stack AI-powered tool to detect and fact-check misinformation from text, image, and audio sources. This project uses Python for the backend (ML, OCR, speech-to-text, API integration) and React.js for the frontend. Users can input claims, upload images, or record audio to check suspicious content against verified fact-check databases in real time.

---

## 🚀 Features

- Supports text, image, and audio file inputs
- Image-to-text via Tesseract OCR
- Audio-to-text via Google SpeechRecognition
- Machine Learning model for misinformation detection (Python/scikit-learn)
- Verifies claims via Google Fact Check Tools API
- User-friendly React.js frontend
- Explanations and tips to help media literacy
- User feedback flow for system improvement

---

## 🗂️ Project Structure

/project-root/
│
├── backend/
│ ├── main.py # API (Flask/FastAPI)
│ ├── config.py
│ ├── ingestion.py
│ ├── preprocessing.py
│ ├── feature_extraction.py
│ ├── verification.py
│ ├── explainability.py
│ ├── feedback.py
│ ├── model/
│ ├── ANTROPY_MODEL_PATH.pkl
│ ├── vectorizer.pkl
│
├── frontend/
│ ├── package.json
│ ├── src/
│ └── App.js # Main React entry
│


---

## ⚙️ Backend Setup (Python)

1. **Install Python requirements**

    ```
    cd backend/
    pip install -r requirements.txt
    # Install ffmpeg and tesseract-ocr via your OS package manager as needed.
    ```

2. **Start the API server**

    - Flask example:
       ```
       flask run --host=0.0.0.0 --port=8000
       ```
    - [Or use FastAPI, Django REST, etc.]

3. **API Spec**

    Endpoint: `POST /api/factcheck`  
    - Form fields:  
        `source_type` = "text" | "image" | "audio"  
        `source_input` = string (text) or file (image/audio)

    Returns:
    ```
    {
      "extractedText": "...",
      "prediction": "...",
      "facts": {...},
      "explanation": "...",
      "tips": "..."
    }
    ```

---

## 💻 Frontend Setup (React)

1. **Install & run**

    ```
    cd frontend/
    npm install
    npm start
    ```

2. **Configuration**

    - Ensure the backend API endpoint URL in your React app matches your backend server.
    - If deploying separately, set up CORS on the backend.

---

## 📝 Usage

- Go to the React app in your browser.
- Pick input type (text/image/audio).
- Enter claim / upload file / record audio.
- Submit for instant fact-checking.
- View extracted text, prediction, fact-check claims, explanation, and media literacy tips.

---

## 🛠️ Technologies

- **Backend:** Python, Flask/FastAPI, scikit-learn, pytesseract, SpeechRecognition, Google Fact Check Tools API
- **Frontend:** React.js (JavaScript), HTML5, CSS3
- **Other:** ffmpeg (audio), Tesseract OCR (image), pydub

---

## 📷 Screenshots

<img width="1816" height="657" alt="image" src="https://github.com/user-attachments/assets/6f80bf02-2c52-4617-ae68-848228dae3bb" />


---



