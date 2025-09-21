# def verify(text, fact_check_api_key):
#     import requests
#     resp = requests.post('https://factchecktools.googleapis.com/v1alpha1/claims:search', json={'query': text, 'key': fact_check_api_key})
#     return resp.json()


import requests

# def verify(text, fact_check_api_key):
#     real_api_url = 'https://factchecktools.googleapis.com/v1/claims:search?key=' + fact_check_api_key
#     params = {'query': text}
#     resp = requests.get(real_api_url, params=params)
    
#     try:
#         data = resp.json()
#     except ValueError:
#         print("Error decoding JSON; response content:", resp.text)
#         data = {}
#     return data

# def verify(text, api_key):
#     import requests
    
#     url = "https://factchecktools.googleapis.com/v1alpha1/claims:search"
#     params = {
#         "query": text,
#         "key": api_key
#     }
    
#     response = requests.get(url, params=params)  # <-- GET instead of POST
    
#     if response.status_code != 200:
#         print(f"API call failed with status {response.status_code}")
#         return {}
    
#     try:
#         return response.json()
#     except ValueError as e:
#         print(f"JSON decode error: {e}")
#         print(f"Response content: {response.text}")
#         return {}




import requests

def verify(text, api_key):
    url = "https://factchecktools.googleapis.com/v1alpha1/claims:search"
    params = {
        'query': text,
        'key': api_key,
        'languageCode': 'en-US',
        'pageSize': 5
    }
    
    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        print(response.text)  # Debug: print raw response text
        return response.json()
    except requests.exceptions.HTTPError as e:
        print(f"HTTP error: {e}")
    except requests.exceptions.ConnectionError:
        print("Connection error occurred.")
    except requests.exceptions.Timeout:
        print("Request timed out.")
    except Exception as e:
        print(f"Unexpected error: {e}")
    return {}

# text="""COVID-19 vaccines do cause microchips."""


