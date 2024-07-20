from pydantic import BaseModel

class User(BaseModel):
    username: str
    email: str
    password: str
    # is_admin: bool = False
class Admin(BaseModel):
    username:str
    admin_key:str

class Admin_Token(BaseModel):
    access_token: str
    # success:bool = True
    token_type: str

class Token(BaseModel):
    access_token: str
    
    token_type: str

class TokenData(BaseModel):
    username: str | None = None



class ProductBase(BaseModel):
    Title: str
    Desc: str
    Price: float
class ProductCreate(ProductBase):
    Url: str  # URL or path to the image
    Id: int = 0  # Default value

class Product(ProductBase):
    id: str
    Id: int
    Url: str
    class Config:
        orm_mode = True
