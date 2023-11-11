import React from 'react'
import ConctactInfoItem from './ConctactInfoItem'
import { IoIosSend } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';
import {  AiFillPhone} from 'react-icons/ai';


function ContactInfo() {
  return (
    <section className='contactInfo'>
      <ConctactInfoItem text={'igoris.x@inbox.lt'} icno={<IoIosSend/>} type='email'/>
      <ConctactInfoItem text={'Lithuania Zaraai'} icno={<ImLocation/>}/>
      <ConctactInfoItem text={'(+1) 123 456 7890'}  icno={<AiFillPhone/>}/>
    </section>
  )
}

export default ContactInfo
