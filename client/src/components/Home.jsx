import React, { useContext } from 'react';
import myContext from '../context/myContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { floorNo } = useContext(myContext);
    const data = {
        rooms: Array.from({ length: 6 }, () => Math.random() < 0.5)
    }
    return (
        <>
        {/* <div className='gradient w-full grid grid-cols-6 grid-rows-6 py-20 bg-red-100 text-3xl'>
            {
                [...Array(Math.pow(2,floorNo))].map((item, ind)=>ind+1).map((val,ind)=>{
                    return (
                        <div onClick={()=>{navigate(`/room/${floorNo}01`)}} className={`rooms ${data.rooms[1-1]?"bg-green-400":"bg-red-400"} cursor-pointer border-2 border-solid border-black flex items-center justify-center relative`} style={{rowSpan: ind%2!==0?6-ind:ind+1,columnSpan:ind%2===0?6-ind:ind+1}}>{floorNo}01</div>
                    )
                })
            }
            </div> */}
        <div className='gradient w-[100vw] h-[92.5vh] m-auto py-20 bg-red-100 text-3xl'>
            <div onClick={()=>{navigate(`/room/${floorNo}01`)}} className={`rooms ${data.rooms[1-1]?"bg-green-400":"bg-red-400"} cursor-pointer h-[12vh] w-[23vw] border-2 border-solid border-black flex items-center justify-center relative left-[52vw]`}>{floorNo}01</div>
            <div onClick={()=>{navigate(`/room/${floorNo}02`)}} className={`rooms ${data.rooms[2-1]?"bg-green-400":"bg-red-400"} cursor-pointer h-[12vh] w-[23vw] border-2 border-solid border-black flex items-center justify-center relative left-[29.1vw] bottom-[12vh]`}>{floorNo}02</div>
            <div onClick={()=>{navigate(`/room/${floorNo}03`)}} className={`rooms ${data.rooms[3-1]?"bg-green-400":"bg-red-400"} cursor-pointer h-[12vh] w-[23vw] border-2 border-solid border-black flex items-center justify-center relative left-[52vw]`}>{floorNo}03</div>
            <div onClick={()=>{navigate(`/room/${floorNo}04`)}} className={`rooms ${data.rooms[4-1]?"bg-green-400":"bg-red-400"} cursor-pointer h-[32vh] w-[6vw] border-2 border-solid border-black flex items-center justify-center relative left-[23.2vw] bottom-[36vh]`}>{floorNo}04</div>
            <div onClick={()=>{navigate(`/room/${floorNo}05`)}} className={`rooms ${data.rooms[5-1]?"bg-green-400":"bg-red-400"} cursor-pointer h-[32vh] w-[6vw] border-2 border-solid border-black flex items-center justify-center relative left-[23.2vw] bottom-[38.9vh]`}>{floorNo}05</div>
            <div onClick={()=>{navigate(`/room/${floorNo}06`)}} className={`rooms ${data.rooms[6-1]?"bg-green-400":"bg-red-400"} cursor-pointer h-[32vh] w-[6vw] border-2 border-solid border-black flex items-center justify-center relative left-[46.1vw] bottom-[76vh]`}>{floorNo}06</div>
        </div>
        </>
        
    );
};

export default Home;
