document.addEventListener("DOMContentLoaded", () => {

    // ------------------ UI ELEMENTS ------------------
    const chooseUploadBtn = document.getElementById("chooseUploadBtn");
    const chooseWebcamBtn = document.getElementById("chooseWebcamBtn");
    const uploadSection = document.getElementById("uploadSection");
    const webcamSection = document.getElementById("webcamSection");
    const uploadedImagePreview = document.getElementById("uploadedImagePreview");
    const video = document.getElementById("video");
    const startWebcamBtn = document.getElementById("startWebcamBtn");
    const stopWebcamBtn = document.getElementById("stopWebcamBtn");
    const captureBtn = document.getElementById("captureBtn");
    const uploadImage = document.getElementById("uploadImage");
    const uploadBtn = document.getElementById("uploadBtn");
    const emotionBox = document.getElementById("detectedEmotion");
    const songList = document.getElementById("songList");

    // ------------------ SONG DATASET ------------------
    const songs = {
        happy: [
            "/static/music/happy/01. Happy.mp3",
            "/static/music/happy/3_Idiots_OST_-_Aal_Izz_Well_(mp3.pm).mp3",
            "/static/music/happy/Bom Diggy Diggy - Sonu Ke Titu Ki Sweety 320 Kbps.mp3",
            "/static/music/happy/Buttabomma - SenSongsMp3.Co.mp3",
            "/static/music/happy/Dil_Dhadakne_Do_-_Gallan_Goodiyaan_(mp3.pm).mp3",
            "/static/music/happy/Ghungroo - War 320 Kbps.mp3",
            "/static/music/happy/Kala Chashma _ Baar Baar Dekho _ Sidharth M Katrina K _ Prem, Hardeep, Badshah, Kam, Neha, Indeep.mp3",
            "/static/music/happy/London Thumakda(KoshalWorld.Com).mp3",
            "/static/music/happy/mixkit-at-the-playhouse-821.mp3",
            "/static/music/happy/mixkit-music-and-life-852.mp3",
            "/static/music/happy/mixkit-playground-fun-12.mp3",
            "/static/music/happy/Nachde Ne Saare - Full Video _ Baar Baar Dekho _ Sidharth Malhotra  Katrina Kaif _ Jasleen Royal.mp3",
            "/static/music/happy/preview.mp3",
            "/static/music/happy/Ramuloo Ramula - SenSongsMp3.Co.mp3",
            "/static/music/happy/Samajavaragamana - SenSongsMp3.Co.mp3",
            "/static/music/happy/Seeti Maar-SenSongsMp3.Co.mp3",
            "/static/music/happy/Sunidhi_Chauhan_-_Dhoom_machale_OST_Bajkery_(mp3.pm).mp3",
            "/static/music/happy/Swing Zara-SenSongsMp3.Co.mp3",
            "/static/music/happy/Yeh_Jawaani_Hai_Deewani_DjPunjab.CoM_-_Badtameez_Dil_DjPunjab.CoM_(mp3.pm).mp3"
        ],
        sad: [
            "/static/music/sad/Aaoge Jab Tum Jab We Met 128 Kbps.mp3",
            "/static/music/sad/Adiga Adiga - SenSongsMp3.Co.mp3",
            "/static/music/sad/Agar Tum Sath Ho(KoshalWorld.Com).mp3",
            "/static/music/sad/Badulu Thochani-SenSongsMp3.Co.mp3",
            "/static/music/sad/Ee Hridayam - SenSongsmp3.Co.mp3",
            "/static/music/sad/Emaipothane.mp3",
            "/static/music/sad/Jab Koi Baat Bigad Jaye Sad Jurm 128 Kbps.mp3",
            "/static/music/sad/Kadalalle - SenSongsMp3.Co.mp3",
            "/static/music/sad/Kanulanu Thaake - SenSongsMp3.Co.mp3",
            "/static/music/sad/mixkit-piano-reflections-22.mp3",
            "/static/music/sad/mixkit-sun-and-his-daughter-580.mp3",
            "/static/music/sad/Naa Praanama(KoshalWorld.Com).mp3",
            "/static/music/sad/Nuvvu Naatho Emannavo - SenSongsMp3.Co.mp3",
            "/static/music/sad/Phir Le Aya Dil Barfi 128 Kbps.mp3",
            "/static/music/sad/preview (1).mp3",
            "/static/music/sad/preview (2).mp3",
            "/static/music/sad/preview.mp3",
            "/static/music/sad/Priyathama Priyathama - SenSongsmp3.Co.mp3",
            "/static/music/sad/Samajavaragamana - Female.mp3",
            "/static/music/sad/The Life Of Ram - SenSongsMp3.Co.mp3"
        ],
        neutral: [
            "/static/music/neutral/Baby Wont You Tell Me - SenSongsMp3.Co.mp3",
            "/static/music/neutral/Ee Raathale.mp3",
            "/static/music/neutral/Gundelonaa.mp3",
            "/static/music/neutral/Hawayein Jab Harry Met Sejal (original Motion Picturetrack) 128 Kbps.mp3",
            "/static/music/neutral/I Wanna Fly - SenSongsMp3.Co.mp3",
            "/static/music/neutral/Kumkumala.mp3",
            "/static/music/neutral/Maate Vinadhuga - SenSongsMp3.Co.mp3",
            "/static/music/neutral/Madhuvaramae(KoshalWorld.Com).mp3",
            "/static/music/neutral/Magical-Moments-chosic.com_.mp3",
            "/static/music/neutral/Mudhal-Nee-Mudivum-Nee-Title-Track-MassTamilan.io.mp3",
            "/static/music/neutral/neutral-505.mp3",
            "/static/music/neutral/Nuvvunte Chaley.mp3",
            "/static/music/neutral/Raabta Agent Vinod 128 Kbps.mp3",
            "/static/music/neutral/Sahana_Sahana_Promo_The_Raja_Saab.mp3",
            "/static/music/neutral/Sarrainodu - SenSongsMp3.Co.mp3",
            "/static/music/neutral/scott-buckley-moonlight(chosic.com).mp3",
            "/static/music/neutral/Sonder(chosic.com).mp3",
            "/static/music/neutral/Warm-Memories-Emotional-Inspiring-Piano(chosic.com).mp3",
            "/static/music/neutral/Yenti Yenti - SenSongsMp3.Co.mp3",
            "/static/music/neutral/Zara Zara Rehnaa Hai Terre Dil Mein 128 Kbps.mp3"
        ],
        surprise: [
            "/static/music/surprise/Benny_Dayal_Neeti_Mohan_-_Bang_Bang_(mp3.pm).mp3",
            "/static/music/surprise/Boss Party.mp3",
            "/static/music/surprise/Dhoom Again Dhoom 2_ Back In Action 128 Kbps.mp3",
            "/static/music/surprise/Golden Sparrow(KoshalWorld.Com).mp3",
            "/static/music/surprise/Jeva Nadhi-SenSongsMp3.Co.mp3",
            "/static/music/surprise/Jhoome Jo Pathaan Title Song 128 Kbps.mp3",
            "/static/music/surprise/Koyila(KoshalWorld.Com).mp3",
            "/static/music/surprise/magicpool-sting-dreamy-fashion-elegant-travel-vlog-music-205203.mp3",
            "/static/music/surprise/Nagada Sang Dhol Goliyon Ki Raasleela Ram Leela 128 Kbps.mp3",
            "/static/music/surprise/Private Party - SenSongsMp3.Co.mp3",
            "/static/music/surprise/Rangamma Mangamma - SenSongsMp3.Co.mp3",
            "/static/music/surprise/Roa-Dream-Up(chosic.com).mp3",
            "/static/music/surprise/surprise-celebration-233620.mp3",
            "/static/music/surprise/surprise-me-236424.mp3",
            "/static/music/surprise/sweet-life-luxury-chill-438146.mp3",
            "/static/music/surprise/Top Lesi Poddi-SenSongsMp3.Com.mp3",
            "/static/music/surprise/Tribute_to_thalaiva_-_Lungi_Dance_OST_Chennai_Express_2013_(mp3.pm).mp3",
            "/static/music/surprise/Vibe Undi.mp3",
            "/static/music/surprise/Violin Song-SenSongsMp3.Com.mp3",
            "/static/music/surprise/Yedi(KoshalWorld.Com).mp3"
        ],
        angry: [
            "/static/music/angry/2017-11-01_-_Anger_-_FesliyanStudios.com_-_Sarkis_Fesliyan.mp3",
            "/static/music/angry/Dheera Dheera - SenSongsMp3.Co.mp3",
            "/static/music/angry/Dhivara-SenSongsMp3.Co (1).mp3",
            "/static/music/angry/Dhivara-SenSongsMp3.Co.mp3",
            "/static/music/angry/Ghostrifter-Official-Resurgence(chosic.com).mp3",
            "/static/music/angry/Ho Ja Mast Malang Tu Malang Unleash The Madness 128 Kbps.mp3",
            "/static/music/angry/Jayaho Janatha  - SenSongsMp3.Co.mp3",
            "/static/music/angry/Kar Har Maidaan Fateh Sanju 128 Kbps.mp3",
            "/static/music/angry/Khuda Hafiz Altamash Faridi 128 Kbps.mp3",
            "/static/music/angry/Meri Aashiqui Aashiqui 2 128 Kbps.mp3",
            "/static/music/angry/Oopiri Aaguthunnadey - SenSongsMp3.Co.mp3",
            "/static/music/angry/Pranam - SenSongsMp3.Co.mp3",
            "/static/music/angry/Ranga Ranga Rangasthalaana - SenSongsMp3.Co.mp3",
            "/static/music/angry/Saadda Haq Featuring Orianthi Panagaris On Guitars Rockstar 128 Kbps.mp3",
            "/static/music/angry/Saare Jahan Se Accha Palak Muchhal 128 Kbps.mp3",
            "/static/music/angry/Sardaar - SenSongsMp3.Co.mp3",
            "/static/music/angry/Sivangivey - SenSongsMp3.Co.mp3",
            "/static/music/angry/Sultan Sukhwinder Singh 128 Kbps.mp3",
            "/static/music/angry/Vachaadayyo Saami - SenSongsMp3.Co.mp3",
            "/static/music/angry/Zinda Bhaag Milkha Bhaag 128 Kbps.mp3"
        ]
    };

    const emojiMap = { happy: "😊", sad: "😢", angry: "😡", surprise: "😲", neutral: "😐" };

    // ------------------ INPUT METHOD ------------------
    chooseUploadBtn.onclick = () => {
        uploadSection.style.display = "block";
        webcamSection.style.display = "none";
    };
    chooseWebcamBtn.onclick = () => {
        uploadSection.style.display = "none";
        webcamSection.style.display = "block";
    };

    // ------------------ IMAGE PREVIEW ------------------
    uploadImage.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (ev) {
            uploadedImagePreview.src = ev.target.result;
        };
        reader.readAsDataURL(file);
    });

    // ------------------ UPLOAD BUTTON ------------------
    uploadBtn.addEventListener("click", async () => {
        if (!uploadImage.files[0]) return alert("Please select an image first!");
        const file = uploadImage.files[0];
        const reader = new FileReader();
        reader.onload = async function (ev) {
            const imageBase64 = ev.target.result;
            try {
                const res = await fetch("/detect_emotion_base64", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ image: imageBase64 })
                });
                const data = await res.json();
                renderResults(data);
            } catch (err) {
                console.error(err);
                alert("Error detecting emotion. See console.");
            }
        };
        reader.readAsDataURL(file);
    });

    // ------------------ WEBCAM ------------------
    let webcamStream;
    startWebcamBtn.onclick = async () => {
    try {
        webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = webcamStream;
        startWebcamBtn.style.display = "none";
        stopWebcamBtn.style.display = "inline-block";
    } catch (err) {
        alert("Webcam not accessible: " + err);
    }
};

stopWebcamBtn.onclick = () => {
    if (webcamStream) webcamStream.getTracks().forEach(t => t.stop());
    video.srcObject = null;
    startWebcamBtn.style.display = "inline-block";
    stopWebcamBtn.style.display = "none";
};


    // ------------------ CAPTURE BUTTON ------------------
captureBtn.onclick = async () => {
    let imageBase64 = "";
    if (uploadSection.style.display === "block") {
        imageBase64 = uploadedImagePreview.src;
    } else {
        // Create snapshot from webcam
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        imageBase64 = canvas.toDataURL("image/jpeg");

        // <-- ADD SNAPSHOT PREVIEW HERE -->
        const snapshotPreview = document.getElementById("snapshotPreview");
        if (snapshotPreview) snapshotPreview.src = imageBase64;
    }

    if (!imageBase64) return alert("No image found!");
    
    try {
        const res = await fetch("/detect_emotion_base64", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: imageBase64 })
        });
        const data = await res.json();
        renderResults(data);
    } catch (err) {
        console.error(err);
        alert("Error detecting emotion. See console.");
    }
};

    // ------------------ RENDER RESULTS ------------------
    function renderResults(results) {
        if (!Array.isArray(results)) return;

        // LEFT PANEL
        emotionBox.innerHTML = "";
        results.forEach((res, idx) => {
            const emoji = emojiMap[res.emotion] || "🎵";
            const personLabel = results.length > 1 ? `Person ${idx + 1}` : "EMOTION";

            const div = document.createElement("div");
            div.className = "multi-face-card";
            div.innerHTML = `
                <h3>${personLabel}</h3>
                <span class="emotion-emoji">${emoji}</span>
                ${res.emotion.toUpperCase()}
                <div class="emotion-suggestion">${res.suggestion}</div>
            `;
            emotionBox.appendChild(div);
        });

        // RIGHT PANEL - multiple person cards
        songList.innerHTML = "";
        results.forEach((res, idx) => {
            const emotionSongs = songs[res.emotion] || [];
            const personLabel = results.length > 1 ? `Person ${idx + 1}` : "EMOTION";

            const personCard = document.createElement("div");
            personCard.className = "person-song-card";

            const headingCard = document.createElement("div");
            headingCard.className = "emotion-card-heading";
            headingCard.innerHTML = `<h3>${personLabel} - ${res.emotion.charAt(0).toUpperCase() + res.emotion.slice(1)} Tunes</h3>`;
            personCard.appendChild(headingCard);

            emotionSongs.forEach(songPath => {
                const songDiv = document.createElement("div");
                songDiv.className = "song-item";
                const songName = songPath.split("/").pop();
                songDiv.textContent = songName;

                songDiv.onclick = () => {
                    const prevAudio = document.getElementById("currentAudio");
                    if (prevAudio) {
                        prevAudio.pause();
                        prevAudio.parentElement.classList.remove("playing");
                        const prevWave = prevAudio.parentElement.querySelector(".song-wave-container");
                        if (prevWave) prevWave.remove();
                        prevAudio.remove();
                    }

                    songDiv.classList.add("playing");

                    const audioEl = document.createElement("audio");
                    audioEl.id = "currentAudio";
                    audioEl.src = songPath;
                    audioEl.controls = true;
                    audioEl.autoplay = true;
                    songDiv.appendChild(audioEl);

                    const waveContainer = document.createElement("span");
                    waveContainer.className = "song-wave-container";
                    waveContainer.style.marginLeft = "8px";
                    for (let i = 0; i < 3; i++) {
                        const bar = document.createElement("span");
                        bar.className = "song-wave";
                        bar.style.display = "inline-block";
                        bar.style.width = "4px";
                        bar.style.height = "14px";
                        bar.style.background = "#1db954";
                        bar.style.marginRight = "2px";
                        bar.style.verticalAlign = "middle";
                        bar.style.animation = `wave 1s infinite`;
                        bar.style.animationDelay = `${i * 0.2}s`;
                        waveContainer.appendChild(bar);
                    }
                    songDiv.appendChild(waveContainer);
                };

                personCard.appendChild(songDiv);
            });

            songList.appendChild(personCard);
        });
    }

    // ------------------ INITIAL RIGHT PANEL ------------------
    function showInitialEmotionCards() {
        songList.innerHTML = "";
        ["happy", "sad", "neutral", "surprise", "angry"].forEach(emotion => {
            const card = document.createElement("div");
            card.className = "emotion-card";
            card.innerHTML = `<h3>${emotion.charAt(0).toUpperCase() + emotion.slice(1)} Tunes</h3>`;
            card.onclick = () => showSongsForEmotion(emotion);
            songList.appendChild(card);
        });
    }

    showInitialEmotionCards();
});
