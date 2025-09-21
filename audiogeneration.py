import pyttsx3

engine = pyttsx3.init()

# A claim that exists in Google Fact Check database
text = """Some people say 5G technology spreads COVID-19.
"""

# Save audio file
output_file = "test_fake_news.wav"
engine.save_to_file(text, output_file)
engine.runAndWait()

print(f"Audio file saved as {output_file}")
