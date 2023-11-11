import React from 'react'
import Header from '../Base/Header'
import { HiOutlineMail } from 'react-icons/hi';


function Contact() {
  return (
    <section className='contact'>
       <Header text={'Contact me.'} icon={<HiOutlineMail/>}/>
       <div className="form">
        <h4>Let's talk</h4>
        <form>
          <input type="text" />
          <input type="text" />
          <textarea id="" cols="30" rows="10"></textarea>
          <button>Send massage</button>
        </form>
       </div>
    </section>
  )
}

export default Contact
