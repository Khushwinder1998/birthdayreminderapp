import { useState } from 'react'
import CheckErrorsForSignIn from '../Functions/checkErrorsForSignIn'
export default function useLoginChecker({ users }) {
  const [load, setLoad] = useState(false)
  const [signInFirstName, setsignInFirstName] = useState('')
  const [signInLoginSuccess, setsignInLoginSuccess] = useState(false)
  const [signInPerson, setsignInPerson] = useState({
    email: '',
    password: '',
  })
  const [signInErrors, setsignInErrors] = useState({})
  //functions
  const signInChangeHandler = (e) => {
    const { name, value } = e.target
    setsignInPerson({ ...signInPerson, [name]: value })
  }
  const signInLoginHandler = (e) => {
    e.preventDefault()
    setLoad(true)
    setsignInErrors(CheckErrorsForSignIn(signInPerson))
    users.forEach((value) => {
      if (
        value.email === signInPerson.email &&
        value.password === signInPerson.password
      ) {
        setsignInFirstName(value.firstName)
        setsignInLoginSuccess(true)
      }
    })
  }
  return {
    load,
    signInFirstName,
    signInLoginSuccess,
    signInPerson,
    signInErrors,
    signInChangeHandler,
    signInLoginHandler,
  }
}
