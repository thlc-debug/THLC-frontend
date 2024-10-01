"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate login
    if (email === 'admin@example.com' && password === 'password') {
      router.push('/newadmin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-xl w-full max-w-lg">
        {/* Logo or Branding */}
        <div className="text-center mb-8 ">
          <h1 className="text-xl  text-gray-800 mb-6">The Luxury Hotel <span className="text-yellow-500">Concierge</span></h1>
          <p className="text-4xl font-bold text-black-600">Welcome back!</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg  "
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg "
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-yellow-500 hover:underline">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
