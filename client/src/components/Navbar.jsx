import React, { useContext, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import myContext from '../context/myContext';
const Navbar = () => {
    const { floorNo, setFloorNo } = useContext(myContext);
    const navList = useRef();
    const handleBurgerClick = () => {
        navList.current.classList.toggle('-translate-x-[640px]')
    }
    const data = {
        floors: [5, 4, 3, 2, 1]
    }
    const location = useLocation().pathname;
    return (
        <nav className='h-14 bg-purple-400 sticky inset-0'>
            <div onClick={handleBurgerClick} className="cursor-pointer burger absolute top-4 left-4 sm:hidden flex flex-col space-y-1">
                <span className="inline-block line bg-purple-900 h-1 w-6"></span>
                <span className="inline-block line bg-purple-900 h-1 w-6"></span>
                <span className="inline-block line bg-purple-900 h-1 w-6"></span>
            </div>
            <ul ref={navList} className='bg-purple-400 transition sm:h-auto -translate-x-[640px] sm:-translate-x-0 flex pt-12  pb-4 flex-col sm:flex-row sm:space-x-6 lg:space-x-8 sm:justify-between sm:py-4 text-2xl px-8 font-semibold'>
                <div className="homeProfile sm:space-x-6">
                    <Link to='/' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-purple-400 rounded-2xl'>
                        <i className="fa-solid fa-house"></i>
                    </Link>
                    <Link to='/profile' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-purple-400 rounded-2xl'>
                        <i className="fa-solid fa-user"></i>
                    </Link>
                    {
                        <select name="floor" id="floor" value={floorNo} onChange={(e) => { setFloorNo(e.target.value) }} className={`w-80 rounded-lg px-2 py-0.5 ${location!="/"?"invisible":""}`}>
                            {data.floors.map((ele, ind) => {
                                return (
                                    <option key={ind} value={ele}>Floor {ele}</option>
                                )
                            })}
                        </select>
                    }

                </div>
                <div className="others sm:space-x-6">
                    <Link to='/createastaff' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-purple-400 rounded-2xl'>Create A Staff</Link>
                    <Link to='/staffsdetails' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-purple-400 rounded-2xl'>Staffs</Link>
                    <Link to='/report' className='transition delay-75 px-4 py-2 hover:bg-white hover:text-purple-400 rounded-2xl'>Report</Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar