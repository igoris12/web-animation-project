import React from 'react'
import SectionHeader from '../Base/SectionHeader'

function ContactFrom() {
  return (
    <div className='contactFrom'>
      <SectionHeader text={"Let's talk"}/>
        <form>
          <input type="text" />
          <input type="text" />
          <textarea id="" cols="30" rows="10"></textarea>
          <button>Send massage</button>
        </form>
    </div>
  )
}

export default ContactFrom
