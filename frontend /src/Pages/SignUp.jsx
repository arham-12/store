import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout } from '../Redux/store';
import { Link } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch()
  const [adminpage, setadminpage] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminkey: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const shiftAdminpage = () => {
    setadminpage(!adminpage)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      const response = await axios.post('http://localhost:8000/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      console.log('Signup Response:', response.data);
      const token = response.data.access_token;
      localStorage.setItem('token', token);

    }
    catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };


  return (
    <div className=" flex items-center justify-center bg-blue-50 pt-30 pb-20 ">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">signup</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">

            {adminpage ? <>  <label className="block text-gray-700">Admin key</label>
              <input
                type="password"
                name="adminkey"
                value={formData.adminkey}
                onChange={handleChange}
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                required
              /></> : <>  <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                required
              /></>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            login
          </button>
        </form>
        <button
          
          className="w-full mt-4 py-2 px-4 text-blue-600 rounded-md hover:underline"
        >

          
        </button>
        <p className='text-lg text-center'> already have account?
          <Link
            to={'/login'}

            className="w-full mt-4 py-2 px-4 text-blue-600 rounded-md hover:underline"
          >
            login


          </Link></p>

      </div>
    </div>
  );
};

export default Signup;
