import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import room0 from '../assets/room0.png';
import room1 from '../assets/room1.png';

const Room = () => {
    const { roomNo } = useParams();
    const navigate = useNavigate();
    const data = {
        type: 0,
    }
    return (
        <div className='gradient pt-6 h-[92.5vh] w-full '>
            <h1 className='text-3xl font-bold text-center mb-2'>Room No. {roomNo}</h1>
            <img className='h-[80vh] w-[50vw] mx-auto' src={data.type ? room1 : room0} alt="room" />
            <div onClick={() => { navigate(`/room/${roomNo}/section/bedRoom`) }} className={`bedRoom hover:border-4 hover:border-green-400 transition-all cursor-pointer border-solid relative ${data.type ? "h-[24vh] w-[17.5vw] left-[25vw] bottom-[76vh]" : "h-[38vh] w-[12vw] left-[50.3vw] bottom-[74vh]"}`}></div>
            <div onClick={() => { navigate(`/room/${roomNo}/section/livingRoom`) }} className={`livingRoom hover:border-4 hover:border-green-400 transition-all cursor-pointer border-solid relative ${data.type ? "h-[41vh] w-[17.5vw] left-[57.5vw] bottom-[104vh]" : "h-[52vh] w-[8.5vw] left-[64.5vw] bottom-[115vh]"}`}></div>
            <div onClick={() => { navigate(`/room/${roomNo}/section/washRoom`) }} className={`washRoom hover:border-4 hover:border-green-400 transition-all cursor-pointer border-solid relative ${data.type ? "h-[51.5vh] w-[16vw] left-[25vw] bottom-[116vh]" : "h-[51.5vh] w-[16vw] left-[26vw] bottom-[145vh]"}`}></div>
            <div onClick={() => { navigate(`/room/${roomNo}/section/dinningRoom`) }} className={`dinningRoom hover:border-4 hover:border-green-400 transition-all cursor-pointer border-solid relative ${data.type ? "h-[26vh] w-[20vw] left-[55vw] bottom-[142.5vh]" : "hidden"}`}></div>
        </div>
    )
}

export default Room
