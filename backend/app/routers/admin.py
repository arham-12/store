# backend/app/routers/admin.py
from fastapi import APIRouter, HTTPException, status
from ..schemas import User, Admin , Admin_Token
from ..config import Settings
from ..auth import  create_access_token
from ..crud import get_admin
admin_router = APIRouter()


@admin_router.post("/admin", response_model=Admin_Token)
async def admin_login(admin: Admin):
    success = True
    if admin.admin_key != Settings.ADMIN_TOKEN:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    else:
        access_token = create_access_token(data={"sub": admin.username, "is_admin": True})
        return {"access_token": access_token, "token_type": "bearer"}
