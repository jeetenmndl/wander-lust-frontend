import { Star } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
  return (
    <section className='px-50 py-24 bg-orange-500 text-white'>

        <div>
            <h2 className='text-5xl font-bold text-center mb-12'>About Us</h2>
        </div>

        <div className='w-3/4 mx-auto mb-16'>
            <p className='text-xl italic text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, impedit! Doloremque animi eum ex enim! Iure unde incidunt in porro earum optio accusantium, error soluta consequatur molestias cum! Sapiente odit esse asperiores adipisci in architecto tempora illo enim, culpa distinctio nesciunt unde itaque ut ipsam ex molestiae cum eveniet, odio voluptas quo omnis cupiditate. </p>
        </div>

        <div className='grid grid-cols-3 gap-2 w-1/2 mx-auto'>
            <div className="border-r">
                <p className='text-3xl font-semibold text-center mb-2'>200+</p>
                <p className='text-lg italic text-center'>Clients served</p>
            </div>
            <div className='border-r'>
                <p className='text-3xl font-semibold text-center mb-2'>10+</p>
                <p className='text-lg italic text-center'>countries visited</p>
            </div>
            <div>
                <p className='text-3xl font-semibold text-center mb-2 flex items-center justify-center'>4.5 <Star /></p>
                <p className='text-lg italic text-center'>ratings achieved</p>
            </div>
        </div>

    </section>
  )
}

export default AboutUs