import { useState } from 'react'
import CheckErrors from '../Functions/CheckErrors'
export default function useHero() {
  //states
  const [signUpPerson, setsignUpPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const [signUpErrors, setsignUpErrors] = useState({})
  const [signUpSubmit, setsignUpSubmit] = useState(false)
  //functions
  const signUpChangeHandler = (e) => {
    const { name, value } = e.target
    setsignUpPerson({ ...signUpPerson, [name]: value })
  }
  const signUpSubmitHandler = (e) => {
    e.preventDefault()
    setsignUpErrors(CheckErrors(signUpPerson))
    setsignUpSubmit(true)
  }
  return {
    signUpPerson,
    setsignUpPerson,
    signUpErrors,
    signUpSubmit,
    signUpChangeHandler,
    signUpSubmitHandler,
  }
}
