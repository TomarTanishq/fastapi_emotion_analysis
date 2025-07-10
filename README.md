# 💬 Emotion Analysis Web App
This is a full-stack AI-powered emotion analysis web application. It uses a BERT-based model (`boltuix/bert-emotion`) to detect emotions from text input. Built with **FastAPI** for the backend and **React (Vite + TypeScript)** for the frontend.

---

## 🚀 Features
- 🔍 Detects emotions like happiness, sadness, anger, fear, love, etc.
- 💬 Emoji-enhanced UI to reflect emotion visually.
- 📜 History panel to track previously analyzed emotions.
- ⚡ Super fast response using Hugging Face Transformers.
- 🎨 Clean and responsive frontend using TailwindCSS.

---

## ⚙️ Backend Setup (FastAPI + Transformers)

### 1. Navigate to the backend directory:
```bash
cd server
```

### 2. Create a Virtual Environment
```bash
python -m venv .venv
```

### 3. Activate the Virtual Environment
```bash
.venv\Scripts\Activate.ps1
```

### 4. Install Dependencies
```bash
pip install fastapi transformers
```

### 5. Run the FastAPI Server
```bash
fastapi dev main.py
```
**The API will now be live at: http://localhost:8000**

---

## 🌐 Frontend Setup (Vite + React + TypeScript)

### 1. Navigate to the frontend directory
```bash
cd client
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
**The app will be accessible at: http://localhost:5173**

---

## 🔄 Sample API Call

### Endpoint: POST/analysis

**Request Body:**
```bash
{
"sentiment": "I spent a day with my grandparents."
}
```

**Response:**
```bash
[
  {
  "label":"happiness",
  "score":"0.98"
  }
]
```

---

## 🧠 Model Used

**[boltuix/bert-emotion](https://huggingface.co/boltuix/bert-emotion)**
A fine-tuned BERT model for multi-class emotion classification including:
- happiness
- sadness
- anger
- love
- fear
- surprise
- neutral
- and more...

---

## 📸 UI Preview

### Desktop Preview

<img src="https://github.com/user-attachments/assets/c20e0790-b77e-401c-82fe-75154abe955a" alt="Alt Text" width="500" height="500">

### Mobile Preview

<img src="https://github.com/user-attachments/assets/f3c6c842-7ada-4cf3-af99-dd5edfdd01e3" alt="Alt Text" width="400" height="400">
<img src="https://github.com/user-attachments/assets/353919c6-e7a2-4124-a69f-71383431feda" alt="Alt Text" width="400" height="400">

---

## 🛠 Tech Stack
- FastAPI
- React + TypeScript
- Tailwind CSS


