from fastapi import FastAPI
from transformers import pipeline

app=FastAPI()

sentiment_analysis=pipeline("text-classification",model="boltuix/bert-emotion")

@app.post("/analysis/{sentiment}")
def analysis(sentiment : str):
    return sentiment_analysis(sentiment)
