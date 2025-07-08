from fastapi import FastAPI
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

sentiment_analysis=pipeline("text-classification",model="boltuix/bert-emotion")

@app.post("/analysis/{sentiment}")
def analysis(sentiment : str):
    return sentiment_analysis(sentiment)
