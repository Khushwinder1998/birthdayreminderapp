import { useState } from 'react'
import CheckErrors from '../Functions/CheckErrors'
export default function useHero({ users }) {
  //states
  const [signUpLoad, setSignUpLoad] = useState(false)
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
    setSignUpLoad(true)
    setsignUpErrors(CheckErrors(signUpPerson))
    setsignUpSubmit(true)
    users.forEach((value) => {
      if (value.email === signUpPerson.email) {
        setsignUpSubmit(false)
      }
    })
  }
  return {
    signUpLoad,
    signUpPerson,
    setsignUpPerson,
    signUpErrors,
    signUpSubmit,
    signUpChangeHandler,
    signUpSubmitHandler,
  }
}
