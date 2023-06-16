import React, { useState } from 'react';
import New from './New';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., check credentials against backend)
    if (formData.username === 'admin' && formData.password === 'password') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Invalid username or password');
    }
    // Reset form after submission
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className=" bg-white p-8 shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {isLoggedIn ? (
          <New/>
        ) : (
          errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
