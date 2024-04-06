from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import numpy as np
import tensorflow as tf
from fastcore.all import *
from fastai.vision.all import *
import fastai.torch_core as core
from fastai.learner import load_learner
from tempfile import NamedTemporaryFile
from fastai.vision.all import *
# import torch

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add the origin of your frontend
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)


gem_model_path = './model/gemstone_classification_model.h5'
shape_model_path = './model/gemstone_shape_classification_model.h5'

gem_model_path_str = str(gem_model_path)
shape_model_path_str = str(shape_model_path)


if os.path.exists(gem_model_path_str):
    gem_classifier = load_learner(gem_model_path_str, cpu=False)
else:
    print(f"Model file '{gem_model_path_str}' not found.")

if os.path.exists(shape_model_path_str):
    shape_classifier = load_learner(shape_model_path_str, cpu=False)
else:
    print(f"Model file '{shape_model_path_str}' not found.")

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(io.BytesIO(contents))
    img = img.resize((330, 330))
    gem_prediction, _, _ = gem_classifier.predict(img)
    shape_prediction, _, _ = shape_classifier.predict(img)
    return {"gem_prediction": gem_prediction, "shape_prediction": shape_prediction}

