import base64
from flask import Flask, request, jsonify, render_template
from deepface import DeepFace
import numpy as np
import cv2
import os
import random

app = Flask(__name__)

STATIC_MUSIC_PATH = "static/music"

EMOTION_SUGGESTIONS = {
    "happy": "😊 Dance & party songs! 💃🕺🎶",
    "sad": "😢 Calm or uplifting music helps. 🎵🌦️",
    "angry": "😡 Relaxing music will help. 🧘‍♂️🛀🎶",
    "surprise": "😲 Fun & upbeat music! 🎉✨🎵",
    "neutral": "😐 Chill out with your favorite tunes 🎧🎶"

}

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/detect_emotion_base64", methods=["POST"])
def detect_emotion_base64():
    data = request.get_json()
    if "image" not in data:
        return jsonify({"error": "No image sent"})

    image_b64 = data["image"].split(",")[1]
    img_bytes = base64.b64decode(image_b64)
    np_arr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    if img is None:
        return jsonify({"error": "Image decode failed"})

    try:
        results = DeepFace.analyze(
            img_path=img,
            actions=["emotion"],
            enforce_detection=False,
            detector_backend="opencv"
        )

        if isinstance(results, dict):
            results = [results]

        response = []
        for idx, res in enumerate(results, start=1):
            emotion = res.get("dominant_emotion", "neutral")
            folder = os.path.join(STATIC_MUSIC_PATH, emotion)
            song = None
            if os.path.exists(folder):
                files = [f for f in os.listdir(folder) if f.endswith(".mp3")]
                if files:
                    song = f"/static/music/{emotion}/{random.choice(files)}"

            suggestion = EMOTION_SUGGESTIONS.get(emotion, "")
            person_label = f"Person {idx}" if len(results) > 1 else "EMOTION"

            response.append({
                "person": person_label,
                "emotion": emotion,
                "suggestion": suggestion,
                "song": song
            })

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
    
# venv\Scripts\activate
# python app.py

