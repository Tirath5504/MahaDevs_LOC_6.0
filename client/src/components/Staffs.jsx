import React, { useContext, useEffect, useState } from 'react'
import SVGForStaffs from './SVGForStaffs'
import myContext from '../context/myContext';

const Staffs = () => {
    const [data, setData] = useState([]);
    const { getAllStaff, deleteStaff } = useContext(myContext);
    const fetchData = async () => {
        let currData = await getAllStaff();
        setData(currData);
    }
    useEffect(() => {
        fetchData();
    }, [])
    const handleDelete = (staffId) => {
        let isConfirm = confirm('Confirm Delete?');
        if (isConfirm) {
            let res = deleteStaff(staffId);
            if (res) {
                let currData = data;
                currData = currData.filter(staff => staff._id != staffId);
                setData(currData);
                alert('Staff Deleted Successfully!!');
            } else
                alert('Something Went Wrong!!');
        }
    }
    return (
        <div className="gradient pt-10 w-[100vw] h-[92.2vh] flex justify-between overflow-hidden">

            <div className='flex flex-col space-y-4 rounded-xl w-[60vw] px-10 overflow-auto pb-10'>
                {
                    data.length ? data.map((val, index) => {
                        return (
                            <div key={index} className="w-[100%] bg-purple-300 px-4 py-2 rounded-xl flex justify-between items-center">
                                <div className="">
                                    <div className="">Name : {val.name}</div>
                                    <div className="">Email : {val.email}</div>
                                    <div className="roomsAssign">
                                        Room Assign :&nbsp;
                                        {
                                            val.roomsUnder.map((room, ind) => {
                                                return (
                                                    <span key={ind} className="">{ind != 0 ? ", " : ""}{room}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <i onClick={() => { handleDelete(val._id) }} className="fa-solid fa-trash cursor-pointer"></i>
                            </div>
                        )
                    }) : <h1 className='text-3xl'>No Staff Is Present</h1>
                }
            </div>
            <SVGForStaffs />
        </div>
    )
}

export default Staffs
