def preprocess_text(text):
    import re
    cleaned = re.sub(r'\W+', ' ', text).lower().strip()
    return cleaned.split()

def preprocess_image(img_bytes):
    from PIL import Image
    import io, numpy as np
    img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    img = img.resize((224, 224))
    arr = np.array(img) / 255.0
    return arr
