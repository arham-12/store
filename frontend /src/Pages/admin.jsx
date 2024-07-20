import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests

const AdminPanel = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleFileChange = (e) => {
        setProductImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object to send file and other data
        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('product_description', productDescription);
        formData.append('product_price', productPrice);
        formData.append('product_image', productImage);

        try {
            // Make POST request to upload product
            const response = await axios.post('http://localhost:8000/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product uploaded successfully!', response.data);
            // Optionally, reset form fields after successful upload
            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setProductImage(null);
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Upload Product</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Name */}
                <div>
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input type="text" id="productName" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)}
                        required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>

                {/* Product Description */}
                <div>
                    <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="productDescription" name="productDescription" rows="3" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>

                {/* Product Price */}
                <div>
                    <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Price ($)</label>
                    <input type="number" id="productPrice" name="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
                        required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>

                {/* Product Image */}
                <div>
                    <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image</label>
                    <input type="file" id="productImage" name="productImage" onChange={handleFileChange}
                        className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit"
                        className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Upload Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPanel;
