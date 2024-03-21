import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Authentication() {
    const[alreadySigned,setAlreadySigned] = useState(false)
    const handleSign = ()=>{
        setAlreadySigned(!alreadySigned)
    }
  return (
    <div className='px-32 py-12 h-screen'>
        <div className="flex justify-start items-start bg-second text-white rounded-3xl h-[630px]">
            <div className='w-full h-full'>
                <div className="flex justify-start items-start h-full">
                    <div className="w-1/2 h-[630px] rounded-3xl shadow-lg shadow-gray-700">
                        <div className='h-[500px] bg-input rounded-t-3xl'>

                        </div>
                        <div className='flex flex-row py-4'>
                            <div className='px-2'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, possimus?</p></div>
                            <div className='px-2'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, possimus?</p></div>
                            <div className='px-2'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, possimus?</p></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2 py-5">
                        {alreadySigned ? <Login /> : <Signup />}
                        <span>- - - - - &nbsp; OR &nbsp; - - - - -</span>
                        <button className="p-4 w-64 border border-black rounded-md bg-mainText text-main text-md font-heading font-semibold hover:opacity-80 my-4" onClick={()=>{
                            handleSign();
                        }}>{alreadySigned ? "First Time Here, Sign Up" : "Already a User, Login"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Authentication