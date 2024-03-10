import io
import base64
import pandas as pd
import requests
import json
import matplotlib.pyplot as plt
host = "https://loc-2024-backend.onrender.com"
url = "/room/allData"  # /:index"
response = requests.get(f"{host}{url}")
jsondata = response.json()
data = json.loads(json.dumps(jsondata.get('feedbacks')))

def plot_to_base64(plot):
    buffer = io.BytesIO()
    plot.savefig(buffer, format='png')
    buffer.seek(0)
    plot_base64 = base64.b64encode(buffer.read()).decode('utf-8')
    return f"data:image/png;base64,{plot_base64}"


