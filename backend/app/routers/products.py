# backend/app/routes/product.py
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from fastapi.responses import JSONResponse
from typing import List
from ..schemas import ProductCreate, Product
from ..crud import create_product,get_all_products
from ..config import Settings
import os
from uuid import uuid4

product_router = APIRouter()

@product_router.post("/products", response_model=Product)
async def upload_product(
    product_name: str = Form(...),
    product_description: str = Form(...),
    product_price: float = Form(...),
    product_image: UploadFile = File(...)
):
    # Save the uploaded file
    file_extension = product_image.filename.split(".")[-1]
    file_name = f"{uuid4()}.{file_extension}"
    file_path = os.path.join(Settings.UPLOAD_DIR, file_name)

    with open(file_path, "wb") as f:
        f.write(await product_image.read())

    product = ProductCreate(
        Title=product_name,
        Desc=product_description,
        Price=product_price,
        Url=file_name
    )

    product_id = create_product(product, file_name)  # No need to await as it's synchronous
    return JSONResponse(status_code=status.HTTP_201_CREATED, content={"id": product_id})


@product_router.get("/show_products", response_model=List[Product])
async def read_products():
    products = get_all_products()
    return products