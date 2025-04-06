import React from 'react'
import data from '../../mentorData.json'
export default function Mentorship() {
  return (
   <main  className=' pt-20 max-w-[1400px] m-auto'>
    <h1 className='text-3xl mt-4 md:text-6xl text-[rgb(23,58,90)] '>Mentorship</h1>
    <p className='text-[rgb(0,0,0,0.8)] ml-16 italic mb-10 font-mono'>"Mentoring is a brain to pick, an ear to listen, and a push in the right direction." - John Crosby</p>
      <div className="p-6 shadow border-b rounded-2xl w-[90%] md:w-[50%] text-center m-auto my-8 ">
        <h3 className="text-3xl text-[rgb(23,58,90)] mb-2">🤝 Become a Mentor</h3>
        <p className="text-gray-500 mb-4">Share your knowledge and empower women entrepreneurs.</p>
        <a href="#" className="text-indigo-600 font-medium hover:underline">Apply Now</a>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
      <div className="p-6 border-b rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-2">🌍 Partner With Us</h3>
        <p className="text-gray-500 mb-4">Let's work together to expand our reach and impact.</p>
        <a href="#" className="text-indigo-600 font-medium hover:underline">Get in Touch</a>
      </div>
      <div className="p-6 border-b rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-2">🙌 Volunteer</h3>
        <p className="text-gray-500 mb-4">Support our mission with your time and talent.</p>
        <a href="#" className="text-indigo-600 font-medium hover:underline">Join Us</a>
      </div>
    </div>
        <h1 className='text-3xl text-[rgb(23,58,90)] '>🌍 Need Guidance</h1>
        <p className='my-2'>Here are the mentors whom you can seek guidance in your locale language</p>
   <div className='lg:grid lg:grid-cols-3 gap-4 m-auto w-[90%] my-8 flex flex-wrap justify-around '>
   {data.map(e=>
         <div key={e.contact} className='border-2  shadow-xl border-[rgb(23,58,90,0.5)] max-w-[260px] p-3 md:p-8 rounded-4xl text-xl align-middle '>
           <div className='h-[50%] mt-[25%] break-words m-auto text-center'>
           <p>{e.name}</p>
            <p>Language: <span className='text-[18px]'>{e.language}</span></p>
            <p className=' text-[16px]' >{e.contact}</p>
            <button className='bg-[rgb(23,58,90)] text-white rounded px-4 py-2 my-4'><a href={`mailto:${e.contact}`}>Message</a></button>
           </div>
        </div>
      )}
   </div>
   <hr />
    {
    /*

    <h1  className='text-3xl text-[rgb(23,58,90)]'>🤝 Become a mentor</h1>
    <h1 className='text-3xl text-[rgb(23,58,90)]'>🙌 Volunteer</h1>
    <p>Support our mission with your time and talent.</p> */}
 
   </main>
  )
}
