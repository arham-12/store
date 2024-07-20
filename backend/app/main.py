from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import  users ,admin, products, orders
from .database import connect_to_mongo, close_mongo_connection
import os 
from .config import Settings
app = FastAPI()


# CORS settings
origins = [
    "http://localhost:5173",  # Add your frontend URL here
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", connect_to_mongo)
app.add_event_handler("shutdown", close_mongo_connection)

app.include_router(users.user_router)
app.include_router(admin.admin_router )
# app.include_router(voice_search.Vr_search)
app.include_router(products.product_router)
# app.include_router(orders.router)

@app.on_event("startup")
async def startup():
    os.makedirs(Settings.UPLOAD_DIR, exist_ok=True)