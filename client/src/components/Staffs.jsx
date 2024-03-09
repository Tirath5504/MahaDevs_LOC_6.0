import React from 'react'
import SVGForStaffs from './SVGForStaffs'

const Staffs = () => {
    const data = [
        {
            name: 'shubham',
            email: 'shubhamjaiswar@gmail.com',
            roomsAssign: [101, 102, 103, 104, 105, 106]
        },
        {
            name: 'shubham',
            email: 'shubhamjaiswar@gmail.com',
            roomsAssign: [101, 102, 103, 104, 105, 106]
        },
        {
            name: 'shubham',
            email: 'shubhamjaiswar@gmail.com',
            roomsAssign: [101, 102, 103, 104, 105, 106]
        },
        {
            name: 'shubham',
            email: 'shubhamjaiswar@gmail.com',
            roomsAssign: [101, 102, 103, 104, 105, 106]
        },
        {
            name: 'shubham',
            email: 'shubhamjaiswar@gmail.com',
            roomsAssign: [101]
        },
    ]
    return (
        <div className="gradient pt-10 w-[100vw] h-[92.5vh] flex justify-between">

            <div className='flex flex-col space-y-4 rounded-xl w-[60vw] px-10 overflow-auto pb-10'>
                {
                    data.map((val, index) => {
                        return (
                            <div key={index} className="w-[100%] bg-purple-300 px-4 py-2 rounded-xl flex justify-between items-center">
                                <div className="">
                                    <div className="">Name : {val.name}</div>
                                    <div className="">Email : {val.email}</div>
                                    <div className="roomsAssign">
                                        Room Assign :
                                        {
                                            val.roomsAssign.map((room, ind) => {
                                                return (
                                                    <span key={ind} className="">{ind != 0 ? ", " : ""}{room}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <i  className="fa-solid fa-trash cursor-pointer"></i>
                            </div>
                        )
                    })
                }
            </div>
            <SVGForStaffs />
        </div>
    )
}

export default Staffs
