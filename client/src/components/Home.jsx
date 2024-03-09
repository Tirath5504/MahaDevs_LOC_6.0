import React, { useContext } from 'react';
import myContext from '../context/myContext';

const Home = () => {
  const { floorNo } = useContext(myContext);

  // Assuming floorNo is used to determine the current floor in the array
  const data = {
    floors: [1, 2, 3, 4, 5],
    rooms: [
      // Assuming each floor has 3 rooms
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
    ],
  };

  const currentFloorData =
    floorNo < data.floors.length ? data.rooms[floorNo] : [];

  return (
    <div className='w-[80vw] h-[70vh] m-auto mt-20 bg-red-100'>
      <div className='flex h-full'>
        {/* First Column */}
        <div className='flex flex-col justify-between p-2'>
          <div className='w-10 h-10 bg-white rounded-full'></div>
          <div className='w-10 h-10 bg-white rounded-full'></div>
        </div>

        {/* First Row Adjacent to First Column */}
        <div className='flex flex-col flex-grow'>
          <div className='w-10 h-10 bg-white rounded-full'></div>
          {/* Empty space in the first row */}
          <div className='w-10 h-10'></div>
        </div>

        {/* Third Column */}
        <div className='flex flex-col justify-between p-2'>
          <div className='w-10 h-10 bg-white rounded-full'></div>
          {/* Adjacent to the third column */}
          <div className='w-10 h-10'></div>
        </div>
      </div>

      {/* Render floor-specific data */}
      <div className='flex flex-wrap'>
        {currentFloorData.map((roomNumber, index) => (
          <div
            key={index}
            className='w-10 h-10 bg-blue-500 rounded-full m-1'
          >
            {roomNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
