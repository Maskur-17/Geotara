import React from 'react'

import loginImg from '../assets/login.jpg'
import sitara from '../assets/sitara.png'
import logo from '../assets/lg.png'

const Login = ()=> {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
            <div className='bg-emerald-50 flex flex-col justify-center'>
                <div className='flex justify-center'>
                    <img className='bottom-2.5 h-30 pb-8' src={logo} alt="" />
                </div>
                <form className='rounded-lg max-w-[520px] w-full mx-auto bg-emerald-200 p-4 shadow-lg bg-emerald-100/80'>
                    <div className='relative h-10 w-32'>
                        <img className='absolute h-25 w-20 -left-10 -top-10' src={sitara} alt=""></img>
                    </div>
                    <h2 className='text-emerald-800 text-opac   ity-100 text-4xl font-bold text-center py-3'>LOGIN</h2>
                    <div className='mx-7 flex flex-col py-2 text-green-800 font-semibold'>
                        <label>Username / Email / No Hp</label>
                        <input className='border p-4 rounded-lg text-xs my-2' type="text" placeholder='john.doe@gmail.com'/>
                    </div>
                    <div className='mx-7 flex flex-col py-2 text-green-800 font-semibold '>
                        <label>Password</label>
                        <input className='border p-4 rounded-lg text-xs my-2' type="password" placeholder='password'/>
                    </div>
                    <div className='forgot'>
                        <a href='' className='mx-8 text-green-800 hover:text-green-700/95 font-semibold text-sm'>Forgot Password?</a>
                    </div>
                        <button className=' mx-7 my-4 rounded-lg px-10 py-3 text-sm text-white bg-emerald-700 shadow-lg shadow-green-500/30 hover:bg-green-700'>Login</button>
                    <div className='flex justify-between'>
                        <a className='mx-7 my-2 text-sm text-green-800 inline-block '>Doesn’t have acccount?</a>
                        <a href='' className='mx-11 my-2 text-sm text-green-900 inline-block shadow-green-200/30' >Create an account Here!</a>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;