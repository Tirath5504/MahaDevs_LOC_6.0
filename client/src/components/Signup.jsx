import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSignup = () => {
        // console.log(data);
        navigate('/');
    }
    return (
        <div className='flex flex-col pt-1 pb-4 sm:px-12 sm:py-4 space-y-4 text-lg sm:text-2xl'>
            <div className="input flex flex-col space-y-2">
                <label htmlFor="name">Name</label>
                <input name='name' onChange={onChange} value={data.name} className='px-2 py-1 border-2 border-black rounded-md' type="text" htmlFor="name" placeholder='Enter Your Name' />
            </div>
            <div className="input flex flex-col space-y-2">
                <label htmlFor="email">Email</label>
                <input name='email' onChange={onChange} value={data.email} className='px-2 py-1 border-2 border-black rounded-md' type="text" htmlFor="email" placeholder='Enter Your Email' />
            </div>
            <div className="input flex flex-col space-y-2">
                <label htmlFor="password">Password</label>
                <input name='password' onChange={onChange} value={data.password} className='px-2 py-1 border-2 border-black rounded-md' type="password" htmlFor="password" placeholder='Enter Your Password' />
            </div>
            <div className="input flex flex-col space-y-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input name='confirmPassword' onChange={onChange} value={data.confirmPassword} className='px-2 py-1 border-2 border-black rounded-md' type="password" htmlFor="confirmPassword" placeholder='Confirm Your Password' />
            </div>
            <button onClick={handleSignup} className='text-xl sm: bg-purple-300 px-4 py-2 rounded-xl hover:bg-purple-400 transition-all'>Sign Up</button>
        </div>
    )
}

export default Signup
