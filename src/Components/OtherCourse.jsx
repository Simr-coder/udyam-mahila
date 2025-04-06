import React from 'react'
import { createContext, useContext } from 'react';

export default function OtherCourse({course,setRegisteredSession,c,registeredSession}) {
  const MyContext =createContext();
  const contextValue = React.useContext(MyContext);
  return (
    <div className="card w-[360px] m-2 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
    <div className="image-container">
      <img className='w-[100%] aspect-[4/3]' src={course[2]} alt="" />
    </div>
   <div className=" p-5">
    <h1 className='text-[20px] font-medium'>{course[0]}</h1>
   <p className='pt-2 font-bold hover:underline ' onClick={()=>{
    setRegisteredSession((p)=>{
      p[c]= (p[c]==undefined)?course:undefined;
        if(!p[c])
          delete p[c]
      console.log(p,c,course);
     return {...p}})
   }} >{(registeredSession[c]==undefined)?'Register Now':'DeEnroll'}</p>
    <p className='italic text-gray-500 py-2'>By {course[1]} </p>
   </div>
  </div>
  )
}
