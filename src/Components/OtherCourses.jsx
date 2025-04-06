import React, { useState } from 'react'
import OtherCourse from './OtherCourse'
import img from '../assests/image.png'

export default function OtherCourses({setRegisteredSession,registeredSession}) {
const courses={c1:['About Finance in Bussiness ', 'Shruti Mam',
  "https://th.bing.com/th/id/OIP.rdhn6e5QX6Ys9WZO8TM25AHaEZ?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"],
c2:['Market and Economy','Gautam Sir',"https://cdn.pixabay.com/photo/2020/02/04/13/23/businessmen-4818156_1280.jpg"],
c3:["Communication",'Mahek mam',"https://th.bing.com/th/id/OIP.lpnZKqlMT0RnHnxgEZ0lGgHaFO?w=274&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"],
c4:['Understanding needs of market','Nancy',"https://th.bing.com/th/id/OIP.-DEwPmpgQMmaenpitjGKEwHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"],
c5:["Leadership",'Bunty Mam',"https://th.bing.com/th/id/OIP.lt2ta0b6Yndgnihax6K5vwHaEg?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"],
c6:["Digital Skills and Online Tools",'Rajendra Biswas',"https://th.bing.com/th/id/OIP._ZqevpmE8ZehjNu0zRDUVwHaFP?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"]

}
  return (
    <section id='Courses'>
      <div className="Other-Courses-title w-[100%]">
        <h1 className={`py-9 text-center z-20 relative course-head text-white bg-[rgb(80,13,59)] text-2xl md:text-4xl `} >Explore our Courses...</h1>
        <div className="cards m-auto flex gap-3 max-w-[1200px] flex-wrap mt-24 justify-around">
          {Object.entries(courses).map(([c,value])=>{
            
return <OtherCourse registeredSession={registeredSession} setRegisteredSession={setRegisteredSession} key={c} course={value} c={c} />
          })}
        </div>
        <h1 className='p-9 italic text-neutral-900 text-center text-2xl md:text-4xl'>Have A Doubt ??</h1>
        <p className='md:text-3xl underline'>Ask here...</p>
        <div className="DoubtClearingSession m-auto mt-20 max-w-[360px] w=[90%] rounded-2xl overflow-hidden shadow-xl border border-[(rgb(0,0,0,0.4))] ">
          <div className="image-container">
            <img src='https://th.bing.com/th/id/OIP.SyZL1s3dTouHr8vEA3-7XwHaGh?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" />
          </div>
          <div className=" p-5">
            <h1 className=' text-[20px] font-medium'>Doubt Session</h1>
            <p className='pt-2 flex items-center gap-2'>
              
              <span className='w-4'> <img className='w-4' src='https://ts3.mm.bing.net/th?id=OIP.rM8-NRX4hj-U4nemkOM1-AHaHa&pid=15.1' alt="calender" /></span>
              <span>Scheduled on 7th April,2025 at 5pm IST</span></p>
            <p className='italic text-gray-500 py-2'>By Suman Pandey </p>
          </div>
        </div>
        <p className='md:text-3xl my-3 underline'>Or post your doubt.</p>
        <div className="postdoubt">
        <form className='m-auto max-w-[900px] w-[90%] shadow-2xs ' >
          <label htmlFor="userName">Enter your UserName</label>
             <input type="text" id='userName' />
          <label htmlFor="password">Enter Your Password</label>
             <input type="password" id='password' />
          <label htmlFor="doubt">Write Your Doubt here</label>
            <textarea className='h-52' type="text" id='doubt' />
            <button className='p-2 bg-[rgb(13,48,80)] rounded-xl text-white text-xl m-2 '>Submit</button>
            <p className='italic m-4 text-center text-gray-700'>**Note: Please Submit only genuine Doubt</p>
          </form>
        </div>
      </div>
    </section>
  )
}
