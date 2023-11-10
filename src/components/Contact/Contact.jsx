import React from 'react'
import Header from '../Base/Header'
import { HiOutlineMail } from 'react-icons/hi';


function Contact() {
  return (
    <section className='contact'>
       <Header text={'Contact me.'} icon={<HiOutlineMail/>}/>
    </section>
  )
}

export default Contact
