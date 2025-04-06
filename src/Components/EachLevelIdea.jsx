import React from 'react'

export default function EachLevelIdea({arr,emoji,level}) {
  return (
    <div className='my-6'><h1 className='md:text-4xl text-2xl underline' >For {level} {emoji}</h1>
    <ul>
    {
        arr.map((el)=>{
            return <li className='m-4'>
                <h1 className='md:text-2xl text-xl font-semibold ' >➜ {el.idea}</h1>
                <p className='md:text-xl text-[rgb(0,0,0,0.7)]' >{el.description}</p>
            </li>
        })
    }
    </ul></div>
  )
}
