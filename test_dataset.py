import os
from core import MUSIC_ROOT, ALL_SONGS, get_song_for_emotion

emotions = ["happy", "sad", "angry", "neutral", "surprise"]

for emo in emotions:
    folder_path = os.path.join(MUSIC_ROOT, emo)
    if os.path.exists(folder_path):
        print(f"Folder exists: {folder_path}")
        
        # Get all songs from ALL_SONGS dictionary
        songs = ALL_SONGS.get(emo, [])
        
        if songs:
            print(f"  Found {len(songs)} songs:")
            for s in songs:
                print(f"    {s}")
        else:
            print("  No mp3/wav files found in this folder.")
    else:
        print(f"Folder NOT found: {folder_path}")
