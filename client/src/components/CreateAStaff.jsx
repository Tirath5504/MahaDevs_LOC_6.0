import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import circlePlus from "../assets/circlePlus.png";
import addStaff from "../assets/addStaff.gif";
import "./css/gradient.css";
import SVGForCreateAStaff from './SVGForCreateAStaff';

const CreateAStaff = () => {
    const rooms = useRef();
    // const navigate = useNavigate();
    const [data, setData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSignup = () => {

    }
    const addInputForRoom = () => {
        const newInput = document.createElement('input');
        newInput.className = 'px-2 py-1 border-2 border-black rounded-md w-20 h-12 mt-1';
        newInput.type = 'number';
        rooms.current.appendChild(newInput);
    }
    return (
        <div className="gradient flex justify-between h-[92.5vh] ">

            <div className='flex flex-col mt-4 pt-1 pb-4 sm:px-12 sm:py-4 space-y-4 text-lg sm:text-2xl to-red-500 w-[55vw]'>
                <div className="input flex flex-col space-y-2">
                    <label htmlFor="name">Name</label>
                    <input name='name' onChange={onChange} value={data.name} className='px-2 py-1 border-2 border-black rounded-md' type="text" htmlFor="name" placeholder='Enter The Name Of The Staff' />
                </div>
                <div className="input flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input name='email' onChange={onChange} value={data.email} className='px-2 py-1 border-2 border-black rounded-md' type="text" htmlFor="email" placeholder='Enter The Email Of The Staff' />
                </div>
                <div className="input flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input name='password' onChange={onChange} value={data.password} className='px-2 py-1 border-2 border-black rounded-md' type="password" htmlFor="password" placeholder='Enter The Password For Staff' />
                </div>
                <div className="input flex flex-col space-y-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input name='confirmPassword' onChange={onChange} value={data.confirmPassword} className='px-2 py-1 border-2 border-black rounded-md' type="password" htmlFor="confirmPassword" placeholder='Confirm The Password' />
                </div>
                <div className='input flex flex-col space-y-2'>
                    <label htmlFor="rooms" className='flex space-x-4'>
                        <p>Enter Rooms To Assign</p>
                        <img onClick={addInputForRoom} src={circlePlus} alt="Add" className='h-8 w-8 cursor-pointer mt-1' />
                    </label>
                    <div ref={rooms} className="rooms flex space-x-1 flex-wrap">
                        <input type="number" className='px-2 py-1 border-2 border-black rounded-md w-20 h-12 mt-1' />
                    </div>
                </div>
                <button onClick={handleSignup} className='text-xl sm: bg-purple-300 px-4 py-2 rounded-xl hover:bg-purple-400 transition-all'>Add Staff</button>
            </div>
            {/* <SVGForCreateAStaff/> */}
            {/* <img className='w-[40vw] h-[82vh]' src={addStaff} alt="" /> */}
            <SVGForCreateAStaff/>
        </div>
    )
}

export default CreateAStaff;