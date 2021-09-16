import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import useHero from './CustomHooks/useHero'
import useLoginChecker from './CustomHooks/useLoginChecker'
import Portfolio from './components/Portfolio/Portfolio'
import './Mainpage.css'

export const PersonContext = React.createContext() //create context
export default function Mainpage() {
  const [loginError, setLoginError] = useState('')
  const [activeUser, setActiveUser] = useState() //activeuser
  //number of users
  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem('users')
    return localUsers ? JSON.parse(localUsers) : []
  })
  //isSubmitted to direct to welcome page if signin or signup is true
  const [isSubmitted, setIsSubmitted] = useState(false)
  //custom hook used for signup
  const {
    signUpChangeHandler,
    signUpSubmitHandler,
    signUpPerson,
    signUpErrors,
    signUpSubmit,
  } = useHero()
  //custom hook for signin
  const {
    load,
    signInFirstName,
    signInLoginSuccess,
    signInPerson,
    signInErrors,
    signInChangeHandler,
    signInLoginHandler,
  } = useLoginChecker({
    users,
  })
  //useEffect to add new user to the users array if signup is successful
  useEffect(() => {
    if (Object.keys(signUpErrors).length === 0 && signUpSubmit) {
      setUsers((prevUsers) => [...prevUsers, signUpPerson])
      setActiveUser(signUpPerson)
      console.log(activeUser)
      setIsSubmitted(true)
    }
  }, [signUpErrors])
  //useEffect to take user to welcomepage if signin is successful
  useEffect(() => {
    if (Object.keys(signInErrors).length === 0 && signInLoginSuccess) {
      setActiveUser(signInPerson)
      setIsSubmitted(true)
    } else if (load && Object.keys(signInErrors).length === 0) {
      setLoginError('Authentication Failed')
    }
  }, [signInErrors])
  //useEfect to setitem on storage when users renders
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  return (
    <>
      <PersonContext.Provider
        value={{
          signUpChangeHandler,
          signUpSubmitHandler,
          signUpPerson,
          signUpErrors,
          signUpSubmit,
          signInPerson,
          signInErrors,
          signInChangeHandler,
          signInLoginHandler,
          loginError,
          users,
        }}
      >
        <Navbar users={users} />
        {!isSubmitted ? (
          <Hero />
        ) : (
          <Portfolio activeUserName={signInFirstName} activeUser={activeUser} />
        )}
      </PersonContext.Provider>
    </>
  )
}
