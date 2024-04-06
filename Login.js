import React, { useState } from 'react';
import axios from 'axios';
import LoginImg from "../images/mobile-login-concept-illustration_114360-83.avif"

function Login() {
  const [formDataObject, setFormDataObject] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataObject((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post('API PATH', formDataObject);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-6 md:p-10 text-gray-800">
    <section className="bg-gray-300 border shadow  rounded-3xl flex justify-center items-center container mx-auto my-12">
    <div className="hidden md:flex w-1/2 px-3 mb-6 md:mb-0 mt-3 py-5 mx-5">
     <img src={LoginImg} alt='LoginImage' className='my-auto rounded-3xl'></img>
    </div>
      <div className="w-full md:w-1/2 mx-5 px-3 mb-6 md:mb-0 mt-3 rounded-2xl py-5">
      <h1 className='text-2xl py-auto px-auto font-bold text-gray-700'>Welcome back !</h1>
      <p className='text-gray-700 text-1xl py-3 px-auto font-semibold'>Join with UniJobs, The largest undergraduate job seeking platform in sri lanka !!</p>
        <form onSubmit={handleSubmit} className='my-auto'>
        
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-white rounded hover:border-green-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="email"
            type="email"
            placeholder="EMAIL"
            value={formDataObject.email}
            onChange={handleInputChange}
            required
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-green-700  border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="password"
            type="password"
            placeholder="PASSWORD"
            value={formDataObject.password}
            onChange={handleInputChange}
            required
          />

          <button
            className="w-full bg-teal-600  hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <div className='flex  flex-col mt-3 font-semibold text-gray-700 text-center md:text-start'>
          <a class='hover:font-bold' href='forgotPassword'>Forgot Password</a>
          <div className='flex flex-warp justify-center md:justify-start'>
          <p>Don't have an account?</p><a className='px-2 text-teal-600 font-semibold hover:font-bold' href='register'>SignUp</a>
          </div>
          </div>
        </form>
        <div className="w-full md:hidden  flex">
        <img src={LoginImg} alt='LoginImage' className='my-auto rounded-3xl shadow-md'></img>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;
