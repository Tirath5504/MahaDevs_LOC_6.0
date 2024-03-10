import gradio as gr
import numpy as np
from tensorflow.keras.models import load_model
from keras.applications.imagenet_utils import preprocess_input
from tensorflow.keras.preprocessing import image
import requests
from PIL import Image
import io

model = load_model('model\api\vgg_model.h5')

def infer(image_url):
    response = requests.get(image_url)
    image = Image.open(io.BytesIO(response.content))
    image = image.resize((224, 224))  
    x = image
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    
    preds = model.predict(x)
    result = preds[0][0]

    if result < preds[0][1]:
        label = "messy"
    else:
        label = "clean"
        
    return label

iface = gr.Interface(fn=infer, inputs="text", outputs="text", title="Image Classifier")
iface.launch()
