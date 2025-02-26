import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        
        

        if (email === storedEmail && password === storedPassword) {
            toast.success('Login successful! 🎉');
            navigate('/home')
        } else {
            toast.error('Invalid email or password. Please try again. ❌')
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Section - Login Form */}
            <div className="w-1/2 flex flex-col justify-center px-20">
                <h1 className="text-5xl font-bold mb-2">Welcome back to Pretty Login</h1>
                <p className="text-lg mb-8">It's great to have you back</p>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">Email:</label>
                    <input
                        type="email"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">Password:</label>
                    <input
                        type="password"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-gray-600">Forgot password?</a>
                </div>

                <div className="flex space-x-4 mb-6">
                    <button
                        className="bg-pink-500 text-white w-full py-3 rounded-lg font-bold"
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                    <Link
                        className="border border-pink-500 text-pink-500 w-full py-3 rounded-lg font-bold"
                        to={`/signup`}>
                        <button className='h-full w-full'>CREATE ACCOUNT</button>
                    </Link>
                </div>

                <p className="text-center text-sm">Or login with</p>
                <div className="text-center text-pink-500 mt-2">
                    <a href="#" className="mr-2">Facebook</a>
                    <a href="#">Google</a>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 hidden lg:block">
                <img src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg" alt="Forest" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default LoginPage;