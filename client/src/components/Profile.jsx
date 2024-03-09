import React from 'react'

const Profile = () => {
    const name = "name";
    const email = "email";
    return (
        <div className="flex mt-8 mx-2 items-center justify-between shadow-md rounded-lg px-6 py-4 bg-purple-700 text-white">
            <div className="flex space-x-4">
                <img
                    src="https://via.placeholder.com/40x40.png?text=Avatar"
                    alt="Profile Picture"
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-left">
                    <p className="font-medium text-xl">{name}</p>
                    <p className="text-sm">{email}</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.6a.5.5 0 0 1 0 1h4a.5.5 0 0 1 0 1v.6a.5.5 0 0 1-1 1h-4a.5.5 0 0 1-1-1v-.6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 1-1V5z" />
            </svg>
        </div>
    )
}

export default Profile
