import React from 'react'

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
    ]
    return (
        <div className='gradient pt-10 w-[100vw] h-[92vh] flex flex-col space-y-4 rounded-xl'>
            {
                data.map((val, index) => {
                    return (
                        <div key={index} className="w-[90vw] bg-purple-100 mx-auto">
                            <div className="">
                                <div className="">Name : {val.name}</div>
                                <div className="">Email : {val.email}</div>
                                <div className="roomsAssign">
                                    Room Assign : 
                                    {
                                        val.roomsAssign.map((room, ind) => {
                                            return (
                                                <span key={ind} className="">{ind!=0?", ":""}{room}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Staffs
