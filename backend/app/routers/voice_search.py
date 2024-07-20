# from fastapi import APIRouter, WebSocket, WebSocketDisconnect
# import speech_recognition as sr
# import time

# Vr_search = APIRouter()

# # Initialize recognizer globally
# recognizer = sr.Recognizer()

# @Vr_search.websocket("/voice_search")
# async def voice_search(websocket: WebSocket):
#     await websocket.accept()
    
#     # Adjust for ambient noise when connection is established
#     with sr.Microphone() as source:
#         recognizer.adjust_for_ambient_noise(source)
#         print("Listening...")

#         while True:
#             audio = recognizer.listen(source)
            
#             try:
#                 text = recognizer.recognize_google(audio)
#                 print(f"Recognized: {text}")
#                 await websocket.send_text(text)
#             except sr.UnknownValueError:
#                 print("Could not understand the audio")
#             except sr.RequestError as e:
#                 print(f"Could not request results; {e}")