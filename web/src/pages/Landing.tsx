import { Link } from "react-router-dom"
import github from "../assets/icons/github.png"
import calender from "../assets/images/landing-cal-1.jpeg"
import { GridLayout } from "../components/GridLayout"
import { ScrollDiv } from "../components/ScrollDiv"
import { useSelector } from "react-redux"
import { RootState } from "@reduxjs/toolkit/query"
import LogoutProfile from "../components/LogoutProfile"

function Landing() {

  const { userInfo } = useSelector((state: RootState) => state.auth)

  return (
    <div>
      <div className='flex justify-between px-16 py-10'>
        <div>
          <h1><a href="/" className='text-mainText font-heading font-extrabold text-4xl cursos-pointer'>CALENSO</a></h1>
        </div>
        <div className='flex flex-row gap-x-10'>
          <div className='bg-mainText rounded-3xl w-36 h-11 px-1.5 flex items-center'>
            <a href="https://github.com/Ankur1493/calenso/" target="_blank" className='cursos-pointer w-full'>
              <div className='flex flex-row justify-around'>
                <div>
                  <img className='w-7 h-7' src={github} alt="" />
                </div>
                <div>
                  <p className='text-main font-heading font-semibold text-2xl '>star us</p>
                </div>
              </div>
            </a>
          </div>
          {userInfo ? (
            <LogoutProfile username={userInfo.username} />
          ) : (
            <div className=' flex items-center bg-main rounded-3xl w-36 h-11 px-1.5 border-mainText border-2 text-mainText  hover:text-main hover:bg-mainText'>
              <Link to={"/login"} className='cursos-pointer w-full flex justify-center'>
                <p className='font-heading font-semibold text-2xl '>Login</p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-row justify-center px-16 mt-20'>
        <div className='flex flex-col w-6/12'>
          <div className='flex flex-col items-left justify-center p-16 pt-32'>
            <div className='w-full'>
              <p className='font-heading text-secondText text-2xl'>"Unlock your calendar's potential with Calenso.com - </p>
            </div>
            <div className='w-full'>
              <p className='font-heading text-mainText text-3xl'>where every meeting matters."</p>
            </div>
          </div>
          <div className='flex justify-left px-16 pt-10'>
            <div>
              <p className='font-secondHeading text-mainText text-8xl'>Scheduling</p>
            </div>
          </div>
        </div>
        <div className='mr-16 w-6/12 h-5/12'><img src={calender} alt="" className="rounded-3xl w-full" />
        </div>
      </div>
      <div className='px-32 w-full'>
        <p className='font-secondHeading text-mainText text-8xl'>infrastructure for  everyone. </p>
      </div>
      <div className="flex flex-row justify-between px-16 mt-24 mx-28">
        <div className="flex flex-row w-11/12">
          <div className="w-3/12 p-8 bg-secondText border-second border-r-2 border-dashed rounded-s-3xl">
            <div className="flex items-center h-full"><a href="/"><p className="font-secondHeading text-2xl">Calenso.com/</p></a></div>
          </div>
          <div className="w-10/12 h-full rounded-e-3xl p-8 bg-input">
            <div className="flex items-center h-full"><input type="text" placeholder="Calenso123" className="border-none decoration-none w-full text-2xl bg-transparent focus:outline-none" /></div>
          </div>
        </div>
        <div className="w-4/12 flex justify-center items-center">
          <button className="flex items-center justify-center p-6 w-8/12 bg-second rounded-3xl">
            <div className="text-mainText text-3xl font-secondHeading">
              <p className="mb-2">Claim</p><p> username</p>
            </div>
          </button>
        </div>
      </div>
      <div className="p-16">
        <ScrollDiv />
      </div>
      <div className="flex justify-center">
        <div className="w-7/12 text-center">
          <p className="font-secondHeading text-mainText text-7xl font-bold">Everything you need in a scheduling app</p>
        </div>
      </div>
      <div className="mt-32">
        <GridLayout />
      </div>
      <div className="flex justify-center mt-32">
        <div className="w-7/12 text-center">
          <p className="font-secondHeading text-mainText text-6xl font-bold">Tailored scheduling for every business, every time</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-32 mb-16">
        <div className='w-8xl'><img src={calender} alt="" className="rounded-3xl w-full" /></div>
      </div>

    </div>
  )
}

export default Landing;
