import React, { useState } from 'react'
import './Hero.css'
import SignIn from './signin'
import SignUp from './signup'
export default function Hero() {
  const [signup, setSignup] = useState(false)
  const setSignupTrue = () => {
    setSignup(true)
  }
  return (
    <div className='hero'>
      <h1>Never forget birthdays of your loved ones ever again</h1>
      {!signup ? <SignIn setSignupTrue={setSignupTrue} /> : <SignUp />}
    </div>
  )
}
