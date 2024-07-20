# backend/app/crud.py
from pymongo import MongoClient
from passlib.context import CryptContext
from .config import settings
from fastapi import HTTPException,status
from .database import get_user_db
from typing import List
from .schemas import ProductCreate ,Product
from bson import ObjectId

client = MongoClient(settings.MONGO_CONNECTION_STRING)
db = client.get_database("ecommerce_db")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_user(username: str):
    return db.users.find_one({"username": username})

def get_admin(username:str):
    return db.users.find_one({"username": username})


def get_email(email:str):
    return  db.users.find_one({"email": email})

def create_user(user:dict):
    hashed_password = pwd_context.hash(user["password"])
    user["password"] = hashed_password
            # Insert user into the database
    result = db.users.insert_one(user)
    


def create_product(product: ProductCreate, file_path: str) -> str:
    # Get the highest product ID from the collection
    highest_product = db.products.find().sort("Id", -1).limit(1)
    highest_product = next(highest_product, None)
    
    # Determine the next product ID
    if highest_product:
        next_product_id = highest_product["Id"] + 1
    else:
        next_product_id = 1
    
    # Convert the product data to a dictionary and add the next product ID
    product_data = product.dict()
    product_data["Id"] = next_product_id
    product_data["Url"] = file_path  # Add the file path to the product data
    
    # Insert the product data into the database and return the inserted ID
    result = db.products.insert_one(product_data)
    return str(result.inserted_id)

async def get_product(product_id: str):
    product = db.products.find_one({"_id": ObjectId(product_id)})
    if product:
        return product
    return None

def get_all_products() -> List[Product]:
    products = list(db.products.find())
    return [Product(**{
        "Title": product["Title"],
        "Desc": product["Desc"],
        "Price": product["Price"],
        "Url": product["Url"],  # Include the URL of the image
        "Id": product["Id"],
        "id": str(product["_id"])  # Convert MongoDB ObjectId to string
    }) for product in products]