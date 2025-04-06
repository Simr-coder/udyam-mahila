import React from 'react'
import OtherCourse from './OtherCourse'

export default function RegisteredSession({registeredSession,setRegisteredSession}) {
  return (
   <div className="registeredSession">
    <h1 className='text-3xl text-[rgb(13,48,80)] my-16 text-center'>Your enrolled Session</h1>
    {Object.entries(registeredSession).length!=0? <div className=' m-auto flex gap-3 max-w-[1200px] flex-wrap mb-24 justify-around'>{Object.entries(registeredSession).map(([c,value])=>{
      return <OtherCourse c={c} course={value} setRegisteredSession={setRegisteredSession} registeredSession={registeredSession} />
    })}</div> : <div className='w-[50%] m-auto text-center' > <p>You have not enrolled for any session yet</p>
    <img className='m-auto' src="https://th.bing.com/th/id/OIP.fQ2a9AaSeHQK_m5iPCWpUgAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div> }
   </div>
  )
}
