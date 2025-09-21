def detect(features, model_path):
    import joblib
    model = joblib.load(model_path)
    prediction = model.predict(features)
    return prediction

