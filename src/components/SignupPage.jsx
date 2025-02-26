import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        toast.success("Account created successfully")
        setEmail('');
        setPassword('');
        setError('');
        navigate('/');
    };

    return (
        <div className="flex h-screen">
            {/* Left Section - Signup Form */}
            <div className="w-1/2 flex flex-col justify-center px-20">
                <h1 className="text-5xl font-bold mb-2">Signup, to create new account!</h1>
                <p className="text-lg mb-8">Welcome</p>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg bg-gray-100"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-lg bg-gray-100"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-gray-600">Forgot password?</a>
                    </div>

                    <div className=" space-x-4 mb-6">
                        <button
                            type="submit"
                            className="border border-pink-500 text-pink-500 w-full py-3 rounded-lg font-bold hover:bg-pink-500 hover:text-white cursor-pointer">
                            CREATE ACCOUNT
                        </button>
                        <p className='mt-2'>
                            If already has an account then go to <Link to={`/`} className='text-blue-500 hover:underline'>Login</Link>
                        </p>
                    </div>
                </form>

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

export default SignupPage;
