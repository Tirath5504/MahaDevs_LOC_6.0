import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleLogin = ()=>{
        // console.log(data);
        navigate('/');
    }
    return (
        <div className='flex flex-col pt-4 sm:px-12 sm:py-20 space-y-4 text-lg sm:text-2xl'>
            <div className="input flex flex-col space-y-2">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} value={data.name} name='email' className='px-2 py-1 border-2 border-black rounded-md' htmlFor="email" type="text" placeholder='Enter Your UID' />
            </div>
            <div className="input flex flex-col space-y-2">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} value={data.password} name='password' className='px-2 py-1 border-2 border-black rounded-md' htmlFor="password" type="password" placeholder='Enter Your Password' />
            </div>
            <button onClick={handleLogin} className='text-xl sm:bg-purple-300 px-4 py-2 rounded-xl hover:bg-purple-400 transition-all'>Login</button>
        </div>
    )
}

export default Login
