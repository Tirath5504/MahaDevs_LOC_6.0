import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="bg-[url('/src/assets/loginBg.avif')] h-[100vh] w-[100vw] bg-no-repeat bg-current bg-cover flex items-center justify-center">
            <div className="bg-white h-[80vh] w-[85vw] rounded-xl flex flex-col sm:flex-row">
                <div className="bg-[url('/src/assets/loginBg3.jpg')] bg-no-repeat bg-cover bg-purple-300 h-[10%] w-[100%] sm:h-[100%] sm:w-[40%] flex flex-col rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl justify-center">
                    <h1 className='text-2xl sm:text-4xl text-center sm:mb-12 font-bold'>Hotel Management</h1>
                    <p className='text-md hidden sm:block sm:text-xl text-center'>A Web App For Automatically Creating Report For Available Rooms With Good Conditions</p>
                </div>
                <div className="bg-purple-200 h-[90%] w-[100%] sm:h-[100%] sm:w-[60%] flex justify-center rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl items-center overflow-auto">
                    <div className='bg-purple-200 h-[90%] w-[90%] rounded-xl'>
                        <div className="buttons flex justify-around sm:mt-2 md:mt-3 xl:mt-4">
                            <button className={`text-xl sm:text-2xl bg-purple-${!isLogin ? "300" : "400"} px-4 py-2 rounded-xl w-[45%]`} onClick={() => { setIsLogin(false) }}>Sign Up Admin</button>
                            <button className={`text-xl sm:text-2xl bg-purple-${!isLogin ? "400" : "300"} px-4 py-2 rounded-xl w-[45%]`} onClick={() => { setIsLogin(true) }}>Login User</button>
                        </div>
                        <div className="mainBox">
                            {isLogin ? <Login /> : <Signup />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;