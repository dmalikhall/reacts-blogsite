import React from 'react'

const Footer = () => {
  return (
    <section className='newsletter-box'>
        <h2>Get Our Monthly Newsletter, Directly Into Your Inbox!</h2>
        <form>
            <label htmlFor='name'></label>
            <input type="text" id="name" name="name" placeholder="Your name"/>
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Email address"/>
            <input type="submit" value="Subscribe" className="submit-btn"></input>
        </form>
    </section>
  )
}

export default Footer