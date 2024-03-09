import React from 'react'
import SVGForProfile from './SVGForProfile';

const Profile = () => {
    const name = "name";
    const email = "email";
    return (
        <div className="gradient h-[92.5vh] pt-4 flex justify-between text-3xl">
            <div className="flex flex-col pt-4 mt-24 mx-4 shadow-md rounded-lg px-6 py-4 bg-purple-700 text-white  h-32 w-[40vw]">
                <h1>Name : {name}</h1>
                <h1>Email : {email}</h1>
            </div>
            <SVGForProfile/>
        </div>
    )
}

export default Profile
