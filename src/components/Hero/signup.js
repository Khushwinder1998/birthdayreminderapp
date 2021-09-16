import { useContext } from 'react'
import { PersonContext } from '../../Mainpage'
export default function Signup() {
  const {
    signUpAuthenticationError,
    signUpChangeHandler,
    signUpSubmitHandler,
    signUpPerson,
    signUpErrors,
  } = useContext(PersonContext)
  return (
    <form method='get' onSubmit={signUpSubmitHandler}>
      <h2>Sign Up</h2>
      <label htmlFor='firstName'>First Name:</label>
      <input
        type='text'
        name='firstName'
        value={signUpPerson.firstName}
        onChange={signUpChangeHandler}
      />
      {signUpErrors.firstName && (
        <p className='errors'>{signUpErrors.firstName}</p>
      )}
      <label htmlFor='lastName'>Last Name:</label>
      <input
        type='text'
        name='lastName'
        value={signUpPerson.lastName}
        onChange={signUpChangeHandler}
      />
      {signUpErrors.lastName && (
        <p className='errors'>{signUpErrors.lastName}</p>
      )}
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        value={signUpPerson.email}
        onChange={signUpChangeHandler}
      />
      {signUpErrors.email && <p className='errors'>{signUpErrors.email}</p>}
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        name='password'
        value={signUpPerson.password}
        onChange={signUpChangeHandler}
      />
      {signUpErrors.password && (
        <p className='errors'>{signUpErrors.password}</p>
      )}
      <label htmlFor='password'> Confirm Password:</label>
      <input
        type='password'
        name='password2'
        value={signUpPerson.password2}
        onChange={signUpChangeHandler}
      />
      {signUpErrors.password2 && (
        <p className='errors'>{signUpErrors.password2}</p>
      )}
      {signUpAuthenticationError && (
        <p className='majorerror'>{signUpAuthenticationError}</p>
      )}
      <button type='submit'>Sign Up</button>
    </form>
  )
}
