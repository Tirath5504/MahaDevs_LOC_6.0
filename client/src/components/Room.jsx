import React from 'react'
import { useParams } from 'react-router-dom'
import room0 from '../assets/room0.png';
import room1 from '../assets/room1.png';

const Room = () => {
    const { roomNo } = useParams();
    const data = {
        type: 1,

    }
    return (
        <div className='gradient pt-6 h-[92.5vh] w-full '>
            <h1 className='text-3xl font-bold text-center mb-2'>Room No. {roomNo}</h1>
            <img className='h-[80vh] w-[50vw] mx-auto' src={data.type?room1:room0} alt="room" />
        </div>
    )
}

export default Room
