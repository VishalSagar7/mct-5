import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-900 to-black text-white flex flex-col items-center">
            <Navbar />
            <div className="text-center mt-20">
                <h1 className="text-5xl font-bold">Welcome to React</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quos vero sunt at iusto sit id aut odio assumenda amet, quas ipsa magnam. Suscipit dignissimos, et impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta eaque rem debitis accusamus sequi repellat molestias quo quaerat corporis, nulla tenetur, consequatur eveniet at adipisci nobis quam quia cupiditate.
                </p>
            </div>

            <button className="mt-10 px-6 py-2 border border-purple-400 rounded-lg text-purple-400 hover:bg-purple-400 hover:text-white transition">
                Explore More !!!
            </button>
        </div>
    );
};

export default Home;
