def extract_text_features(tokens):
    from transformers import BertTokenizer, BertModel
    import torch
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
    model = BertModel.from_pretrained('bert-base-uncased')
    inputs = tokenizer(tokens, return_tensors='pt', padding=True, truncation=True)
    with torch.no_grad():
        features = model(**inputs).last_hidden_state.mean(dim=1)
    return features

def extract_image_features(image):
    return image.flatten()
