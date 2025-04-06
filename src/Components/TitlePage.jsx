import React, {  useState } from 'react'
import { createContext} from 'react';
import '../App.css'
import FrontPageCourse from './FrontPageCourse'
import OtherCourses from './OtherCourses'
import RegisteredSession from './RegisteredSession';

const MyContext =createContext(null);
export default function TitlePage() {
  const [registeredSession,setRegisteredSession]=useState({})
  console.log(registeredSession);

return (

    <main className='max-w-[1400px] m-auto' >
    <FrontPageCourse/>
    <OtherCourses registeredSession={registeredSession} setRegisteredSession={setRegisteredSession} />
    <RegisteredSession setRegisteredSession={setRegisteredSession} registeredSession={registeredSession}/>
 </main>
  )
}
