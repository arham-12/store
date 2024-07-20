# backend/app/routers/users.py
from fastapi import APIRouter, Depends, HTTPException, status
from ..schemas import User, Token
from ..crud import get_user, create_user,get_email
from ..auth import create_access_token,verify_password

user_router = APIRouter()

@user_router.post("/signup", response_model=Token)
async def signup(user: User):
    mail = get_email(user.email)
    if not mail:
        new = create_user(dict(user))
    elif mail["email"] == user.email:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="email already registered",
        )
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token,"username":user.username,"token_type": "bearer"}

@user_router.post("/login", response_model=Token)
async def login(username: str, password: str):
    user = get_user(username)
    if not user or not verify_password(password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user["username"]})
    return {"access_token": access_token, "token_type": "bearer"}
