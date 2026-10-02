import React from 'react'

const Hero = () => {
  return (
   <section className='relative'>

        {/* for image  */}
        <div className='h-[89dvh] overflow-hidden flex items-center'>
            <img src="/heroImage.jpg" className="w-full" alt="WanderLust Hero Image" />
        </div>

        {/* overlay  */}
        <div className='h-[89dvh] w-full bg-black absolute top-0 opacity-60'>

        </div>

        {/* content  */}
        <div className='absolute top-0 h-[89dvh] flex items-center justify-center'>
          <div className='w-1/2 text-center text-white'>
            <h1 className="text-5xl font-bold mb-6">Plan your trip with Wanderlust.</h1>

            <p className='text-2xl mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio aliquid quisquam nemo, minima eum exercitationem aspernatur consequatur doloribus unde porro, iusto nisi inventore molestias natus illo at, excepturi quo!
            </p>
            
            <button className='bg-orange-700 px-10 py-2 text-white text-lg rounded hover:cursor-pointer hover:bg-orange-800'>Register Now</button>
          </div>

        </div>

   </section>
  )
}

export default Hero