class Settings:
    SECRET_KEY: str = "1976014e03e1c1e30ad2107b76ee548452f437049a24094a4582c59ee71b37d9"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    MONGO_CONNECTION_STRING: str = "mongodb://localhost:27017"
    ADMIN_TOKEN = "1976014"
    UPLOAD_DIR = "/home/arham/Desktop/django/frontend/public"
    
settings = Settings()
