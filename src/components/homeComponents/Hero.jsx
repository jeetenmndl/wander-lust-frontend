import React from 'react'
import CustomButton from '../common/CustomButton'

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
            
            <CustomButton text="Register Now" link="/register" more="bg-red-600" />
          </div>

        </div>

   </section>
  )
}

export default Hero