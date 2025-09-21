
def ingest(source_type, source_input):
    import requests
    import base64
    
    if source_type == 'text':
        if source_input.startswith('http'):
            resp = requests.get(source_input)
            return resp.text
        else:
            return source_input
    elif source_type == 'image':
        if source_input.startswith('http'):
            resp = requests.get(source_input)
            return resp.content  # bytes
        elif source_input.startswith('data:image/'):  # base64 image string
            header, base64_data = source_input.split(',', 1)
            return base64.b64decode(base64_data)
        else:
            # assume source_input is file path
            with open(source_input, 'rb') as f:
                return f.read()
    else:
        raise ValueError("Unsupported source type")
