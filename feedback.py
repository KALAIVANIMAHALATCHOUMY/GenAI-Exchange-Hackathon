def educate(prediction, reasoning):
    tips = []
    if prediction == 'misinformation':
        tips.append("Potentially manipulative. Verify sources.")
    tips.append(f"Reason: {reasoning}")
    return tips

def report(content, user_id, firebase_url):
    import requests
    requests.post(firebase_url + "/report", json={'user_id': user_id, 'content': content})
