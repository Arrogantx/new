import React from 'react'
import SkyBg from '../../components/SkayBg/SkyBg'
import BottomBar from '../../components/BottomBar/BottomBar'
import "./contact.scss"

const Contact = () => {
  return (
    <section className='contact'>
        <div className="wrapper">
            <SkyBg />
          <div className="contact-container animate-turnOff">
            <div className="contact-content">
            <h2>CONTACT</h2>
            <form action="">
                <input type="email" placeholder='EMAIL' />
                <input type="text" placeholder='SUBJECT' />
                <textarea name="" id="" cols="30" rows="8" placeholder='MESSAGE'></textarea>
                <button>SEND TO HEAVEN</button>
            </form>
            </div>
          </div>
          <BottomBar />
        </div>
    </section>
  )
}

export default Contact
