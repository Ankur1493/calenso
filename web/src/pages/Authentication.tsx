import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import calender from "../assets/images/landing-cal-1.jpeg";

function Authentication() {
  const [alreadySigned, setAlreadySigned] = useState(false)
  const handleSign = () => {
    setAlreadySigned(!alreadySigned)
  }
  return (
    <div className='px-32 h-screen flex justify-center items-center'>
      <div className="flex justify-start items-start bg-second text-white rounded-3xl h-[730px]">
        <div className='w-full h-full'>
          <div className="flex justify-start items-start h-full">
            <div className="w-1/2 h-full rounded-3xl shadow-sm shadow-gray-600">
              <div className='h-[600px] bg-input rounded-t-3xl'>
                <img src={calender} className='w-full h-full border-b-[0.5px] border-b-gray-400' />
              </div>
              <div className='flex flex-row my-6 px-4'>
                <div className='px-2 w-4/12'><p>We will take care of your meetings you focus on completing your task</p></div>
                <div className='px-2 w-4/12'><p>Connect your google calendar with calenso for better experience</p></div>
                <div className='px-2 w-4/12'><p>We are always there to help you to request any feature, click <a href='https://github.com/ankur1493/calenso/issues/new' target='_blank' className='text-gray-400'>here</a></p></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 py-5">
              {alreadySigned ? <Login /> : <Signup />}
              <span>- - - - - &nbsp; OR &nbsp; - - - - -</span>
              <p className="my-4 cursor-pointer text-[20px] text-mainText text-md font-heading font-semibold" onClick={() => {
                handleSign();
              }}>{alreadySigned ? "First Time Here, Sign Up" : "Already a User, Login"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Authentication
