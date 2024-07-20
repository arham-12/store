import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout } from '../Redux/store';
import { Link, useNavigate } from 'react-router-dom';
const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [adminpage, setadminpage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminkey : ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const shiftAdminpage = ()=>{
    setadminpage(!adminpage)
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!adminpage) {
        const response = await axios.post('http://localhost:8000/login', {
          username: formData.username,
          password: formData.password
        });
        console.log('Login Response:', response.data);
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        
        // const { is_admin } = JSON.parse(atob(token.split('.')[1]));
        // window.location.href = is_admin ? '/admin' : '/';
        // dispatch(Login())
        // navigate('/admin')
      } else {
        const response = await axios.post('http://localhost:8000/admin', {
          username: formData.username,
          admin_key:formData.adminkey
        });
        console.log('Signup Response:', response.data);
        const token = response.data.access_token;
        localStorage.setItem('token', token);

        if(token){
          dispatch(Login());
          navigate('/admin')
        }
        

      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };


  return (
    <div className=" flex items-center justify-center bg-blue-50 pt-30 pb-20 pt-24">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">{isLogin ? 'Login' : 'Sign Up'}</h2>
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
           
            {adminpage?<>  <label className="block text-gray-700">Admin key</label>
            <input
              type="password"
              name="adminkey"
              value={formData.adminkey}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            /></>:<>  <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
              required
            /></>}
          </div>

         
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            login
          </button>
        </form>
        <p className='text-lg text-center'> want an account
          <Link
            to={'/signup'}

            className="w-full mt-4 py-2 px-4 text-blue-600 rounded-md hover:underline"
          >
            signup


          </Link></p>
       <hr/>
       <button
          onClick={shiftAdminpage}
          className="w-full  py-2 px-4 text-blue-600 rounded-md hover:underline"
        >
          {adminpage?'Login as user':'Login as admin'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
