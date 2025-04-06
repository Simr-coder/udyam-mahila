import React from 'react'
import MotivationQuotes from './MotivationQuotes'

export default function CollaborationPage() {
  return (
    <section className='collaboration max-w-[1400px] m-auto text-center pt-24'>
    <div id='collaborate-quotes'>
    <h1 className='text-xl font-semibold'>It's important to collaborte!!</h1>
    <p>Collaboration is important and essential for woman enterpreneurs to provide environment which motivates you and people like you</p>
    <p>So Collaborate with others enterpreneurs to boost your growth!!</p>
    </div>
    <MotivationQuotes/>
    <p className='text-xl italic mt-14'>
    I learned to always take on things I’d never done before. Growth and comfort do not coexist.
    </p>
    <p className='mb-14 italic' >– Virginia Romerty</p>
    </section>
  )
}
