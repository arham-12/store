from pymongo import MongoClient
from .config import settings

client = None

def connect_to_mongo():
    global client
    client = MongoClient(settings.MONGO_CONNECTION_STRING)

def close_mongo_connection():
    global client
    client.close()

def get_user_db():
    return client.get_database("ecommerce_db")

# def get_products_db():
#     return client.get_database("products")