import github from "../assets/icons/github.png"

function Landing() {
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
          <div className=' flex items-center bg-main rounded-3xl w-36 h-11 px-1.5 border-mainText border-2'>
            <a href="/" className='cursos-pointer w-full flex justify-center'>
              <p className='text-mainText font-heading font-semibold text-2xl '>Login</p>
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between px-16 mt-20'>
        <div className='flex flex-col '>
          <div className='flex flex-col items-left justify-center p-16 pt-32'>
            <div className='w-full'>
              <p className='font-heading text-secondText text-2xl'>"Unlock your calendar's potential with Calenso.com - </p>
            </div>
            <div className='w-full'>
              <p className='font-heading text-mainText text-3xl'>where every meeting matters."</p>
            </div>
          </div>
          <div className='flex items-center justify-left px-16'>
            <div>
              <p className='font-secondHeading text-mainText text-8xl'>Scheduling</p>
            </div>
          </div>
        </div>
        <div className='w-8/12 h-5/12 bg-secondText rounded-3xl'>
        </div>
      </div>
      <div className='px-32 w-full'>
        <p className='font-secondHeading text-mainText text-8xl'>infrastructure for  everyone. </p>
      </div>
    </div>
  )
}

export default Landing;
