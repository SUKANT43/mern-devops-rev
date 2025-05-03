import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useApi from '../customHook/useApi';
import Loader from '../components/Loader';
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { responseData, error, loading, trigger } = useApi();
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await trigger('http://localhost:2005/api/user/login', 'POST', data);

    if (responseData?.token) {
      localStorage.setItem('token', responseData.token);
      navigate('/'); 
      alert(error?.message || 'Invalid credentials');
    }
  };

  if (loading) return <Loader />; 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ref={emailRef}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ref={passwordRef}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


// The expression responseData?.token is a JavaScript optional chaining technique. It checks if responseData is not null or undefined before attempting to access the token property. If responseData is null or undefined, it prevents errors and simply returns undefined, otherwise, it accesses responseData.token. This is useful to safely access nested properties in objects that might not always exist.

