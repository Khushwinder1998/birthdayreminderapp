import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import useHero from './CustomHooks/useHero'
import useLoginChecker from './CustomHooks/useLoginChecker'
import Portfolio from './components/Portfolio/Portfolio'
import './Mainpage.css'

export const PersonContext = React.createContext() //create context
export default function Mainpage() {
  const [loginAuthenticationError, setLoginAuthenticationError] =
    useState(false)
  const [signUpAuthenticationError, setSignUpAuthenticationError] = useState('')
  const [activeUser, setActiveUser] = useState() //activeuser
  const [welcomeFirstName, setWelcomeFirstName] = useState()
  //number of users
  const [users, setUsers] = useState(() => {
    const localUsers = localStorage.getItem('users')
    return localUsers ? JSON.parse(localUsers) : []
  })
  //isSubmitted to direct to welcome page if signin or signup is true
  const [isSubmitted, setIsSubmitted] = useState(false)
  //custom hook used for signup
  const welcomePageFirstName = () => {
    if (signInFirstName) {
      setWelcomeFirstName(signInFirstName)
    } else {
      setWelcomeFirstName(signUpPerson.firstName)
    }
  }
  const {
    signUpLoad,
    signUpChangeHandler,
    signUpSubmitHandler,
    signUpPerson,
    signUpErrors,
    signUpSubmit,
  } = useHero({ users })
  //custom hook for signin
  const {
    signInLoad,
    signInFirstName,
    signInLoginSuccess,
    signInPerson,
    signInErrors,
    signInChangeHandler,
    signInLoginHandler,
  } = useLoginChecker({ users })
  //useEffect to add new user to the users array if signup is successful
  useEffect(() => {
    if (Object.keys(signUpErrors).length === 0 && signUpSubmit) {
      welcomePageFirstName()
      setUsers((prevUsers) => [...prevUsers, signUpPerson])
      setActiveUser(signUpPerson)
      setIsSubmitted(true)
    } else if (signUpLoad && !signUpSubmit) {
      setSignUpAuthenticationError('Email already exists')
    }
  }, [signUpErrors])
  //useEffect to take user to welcomepage if signin is successful
  useEffect(() => {
    if (Object.keys(signInErrors).length === 0 && signInLoginSuccess) {
      welcomePageFirstName()
      setActiveUser(signInPerson)
      setIsSubmitted(true)
    } else if (signInLoad && Object.keys(signInErrors).length === 0) {
      setLoginAuthenticationError('Authentication Failed')
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
          signUpAuthenticationError,
          signUpChangeHandler,
          signUpSubmitHandler,
          signUpPerson,
          signUpErrors,
          signUpSubmit,
          loginAuthenticationError,
          signInPerson,
          signInErrors,
          signInChangeHandler,
          signInLoginHandler,
          users,
        }}
      >
        <Navbar users={users} />
        {!isSubmitted ? (
          <Hero />
        ) : (
          <Portfolio
            welcomeFirstName={welcomeFirstName}
            activeUser={activeUser}
          />
        )}
      </PersonContext.Provider>
    </>
  )
}
