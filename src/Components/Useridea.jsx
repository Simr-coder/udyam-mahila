import React from 'react'

export default function Useridea() {
  return (
    <section className='ideas pt-5 mx-2 md:pt-20'>
        <h1 className='md:text-8xl text-3xl text-center text-[rgb(13,48,80)] font-bold '>Already Have a Idea ?</h1>
        <p className='md:text-2xl text-[rgba(12,24,35,0.78)] my-4 italic font-bold ' >Share Your Own Ideas and get shoutout even if you are beginner or already ventured into entrepreneurship'</p>
        <p className='md:text-xl mb-2 shoutout-text' >Top three ideas will be get shoutout in next week webinar..</p>
        <p className='md:text-xl mb-2 shoutout-text' >And Chance to meet offline with top entrepreneurs</p>
    <form className='my-6 mx-3' action="">
        <label htmlFor="">Your Idea</label>
        <textarea className='h-[200px]' name="" id=""></textarea>
        <button type='button' className='px-4 py-2 block hover:bg-[rgb(23,58,90)] text-white text-xl rounded  bg-[rgb(13,48,80)]'>Submit</button>
    </form>
    </section>
  )
}
