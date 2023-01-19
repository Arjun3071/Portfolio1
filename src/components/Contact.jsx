import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4 scroll-pt-56  '>
        <div>
          <form method='POST' action="https://getform.io/f/3e8b30e7-f4ed-479f-96da-d1971e1ea62b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 pt-9'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form or shoot me an email - arjunbenn97@gmail.com</p>

            </div>
            
            <input className=' bg-[#ccd6f6] p-2 focus:outline-none table-fixed' type="text" placeholder='Name ' name='name'/>
            <input className='bg-[#ccd6f6] my-4 p-2 focus:outline-none table-fixed' type="email" placeholder='Email ' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2 table-fixed focus:outline-none ' name="message" rows="10" placeholder="Message"></textarea>
            <button className='focus:outline-none text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
           

        </form>
      
        </div>
    </div>
  )
}

export default Contact
