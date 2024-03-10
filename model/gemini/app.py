import google.generativeai as genai
import gradio as gr
from transformers import pipeline
from langdetect import detect


api_key = "AIzaSyCmmus8HFPLXskU170_FR4j2CQeWZBKGMY"

model = genai.GenerativeModel('gemini-pro-vision')
genai.configure(api_key = api_key)

def pipeline(img):
    try:
        return score = model.generate_content(content=[f"Describe any damage (broken furniture, stains, etc.) in the given image. Also give the cost (in INR) for every damage sustained. Image: ", img])
    except Exception:
        return "No damage sustained"
        
iface = gr.Interface(
    fn = pipeline,
    inputs = gr.Image(label="Room Image", sources=['upload'], type="pil"),
    outputs = ["text"]
)

iface.launch()