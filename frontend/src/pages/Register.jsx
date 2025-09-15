import React, { useState } from 'react';
import api from '../api';
import { setAuth } from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Register(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const nav = useNavigate();
    const [err,setErr]=useState(null);

    const handle = async (e)=>{
        e.preventDefault();
        try{
        const { data } = await api.post('/auth/register', { name, email, password });
        setAuth(data.token, data.user);
        nav('/');
        }catch(error){
        setErr(error.response?.data?.message || 'Failed');
        }
    };

    return (
        <div className="p-6 mt-20 max-w-sm mx-auto bg-gray-200 rounded-xl shadow-md space-y-4">
    <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
    {err && <p className="text-red-500 text-center">{err}</p>}
    <form onSubmit={handle} className="space-y-4">
        <div>
        <input 
            value={name} 
            onChange={e=>setName(e.target.value)} 
            placeholder="Name" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        </div>
        <div>
        <input 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            placeholder="Email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        </div>
        <div>
        <input 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            placeholder="Password" 
            type="password" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        </div>
        <button 
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
        Register
        </button>
    </form>
    <p className="text-center text-gray-600">
        Have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600 font-medium">Login</Link>
    </p>
    </div>
    );
}
