import React from 'react'
import data from '../../ideasData.json'
import EachLevelIdea from './EachLevelIdea';

export default function Ideas() {
    const {beginner,intermediate,advanced}=data

  return (
    <div className='ideas' >
        <h1 className='md:text-9xl text-3xl text-center text-[rgb(13,48,80)] font-bold '>Need Ideas?</h1>
        <p className=' md:text-2xl mt-4 text-center text-[rgb(13,48,80)] font-bold '>No woories,Here are some</p>
        <EachLevelIdea emoji={'😀'} arr={beginner} level={'beginner'} />
        <EachLevelIdea emoji={'💪'} arr={intermediate} level={'intermediate'} />
        <EachLevelIdea emoji={'💪'} arr={advanced} level={'advanced'} />

    </div>
  )
}
