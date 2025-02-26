import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Users = () => {
    
    const [users, setUsers] = useState([]); 
    const [filteredUsers, setFilteredUsers] = useState([]); 
    const [genderFilter, setGenderFilter] = useState('all'); 

   
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`https://randomuser.me/api/?results=20`);
            setUsers(response?.data?.results); 
            setFilteredUsers(response?.data?.results); 
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    
    useEffect(() => {
        if (genderFilter === 'all') {
            setFilteredUsers(users); 
        } else {
            const filtered = users.filter((user) => user.gender === genderFilter);
            setFilteredUsers(filtered); 
        }
    }, [genderFilter, users]);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <Navbar />

            <div className='px-12 py-6 px-[100px]'>
                <h1 className='text-2xl font-semibold'>User Details</h1>
                <p className='pt-4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsum aspernatur atque consequatur assumenda fuga libero a! Iusto ullam aliquam sunt quos minima facere ex quibusdam voluptatum eligendi autem, quisquam adipisci aliquid cumque a assumenda aut dolorem, porro ipsa explicabo! Ab in ullam provident distinctio accusamus dolorum nam aspernatur quia rem iure, corporis sit consectetur sequi blanditiis nemo explicabo, quas maxime molestias sunt. Rerum repellat excepturi illo eius minus commodi, atque laudantium quis necessitatibus suscipit omnis aut delectus. Excepturi totam a adipisci sequi quis, numquam ullam voluptatibus quibusdam repudiandae quae at ratione odit quasi omnis tempore ea maiores corporis assumenda.
                </p>
            </div>

            <div className='px-12 py-4 flex space-x-4 px-[100px]'>
                <label className='flex items-center space-x-2'>
                    <input
                        type='radio'
                        name='gender'
                        value='all'
                        checked={genderFilter === 'all'}
                        onChange={() => setGenderFilter('all')}
                        className='form-radio'
                    />
                    <span>All</span>
                </label>
                <label className='flex items-center space-x-2'>
                    <input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={genderFilter === 'male'}
                        onChange={() => setGenderFilter('male')}
                        className='form-radio'
                    />
                    <span>Male</span>
                </label>
                <label className='flex items-center space-x-2'>
                    <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={genderFilter === 'female'}
                        onChange={() => setGenderFilter('female')}
                        className='form-radio'
                    />
                    <span>Female</span>
                </label>
            </div>

          
            <div className='px-12 py-6 px-[100px]'>
                <table className='min-w-full bg-white border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='py-3 px-4 border-b text-left'>Image</th>
                            <th className='py-3 px-4 border-b text-left'>Name</th>
                            <th className='py-3 px-4 border-b text-left'>Email</th>
                            <th className='py-3 px-4 border-b text-left'>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index} className='hover:bg-gray-50 transition-colors'>
                                <td className='py-3 px-4 border-b'>
                                    <img
                                        src={user.picture.thumbnail}
                                        alt={`${user.name.first} ${user.name.last}`}
                                        className='w-10 h-10 rounded-full'
                                    />
                                </td>
                                <td className='py-3 px-4 border-b'>{`${user.name.first} ${user.name.last}`}</td>
                                <td className='py-3 px-4 border-b'>{user.email}</td>
                                <td className='py-3 px-4 border-b'>{user.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;