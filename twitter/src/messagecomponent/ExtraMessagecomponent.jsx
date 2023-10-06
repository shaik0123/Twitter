import React from 'react'
import './ExtraMessageComponent.css'
import { Button } from '@mui/material'

function ExtraMessagecomponent() {
  return (
    <div className='extramain'>
        <div className='extracontent'><h1>Select a message</h1></div>
        <div className='extracontent'>Choose from your existing conversations, start a new one, or just keep swimming.</div>
        <div className='extracontent'><button id="extrabtn">New message</button></div>
    </div>
  )
}

export default ExtraMessagecomponent