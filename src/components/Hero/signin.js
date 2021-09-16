import { useContext } from 'react'
import { PersonContext } from '../../Mainpage'
export default function SignIn({ setSignupTrue }) {
  const {
    loginAuthenticationError,
    signInPerson,
    signInErrors,
    signInChangeHandler,
    signInLoginHandler,
  } = useContext(PersonContext)
  return (
    <form method='get' onSubmit={signInLoginHandler}>
      <h2>Sign In</h2>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        value={signInPerson.email}
        onChange={signInChangeHandler}
      />
      {signInErrors.email && <p className='errors'>{signInErrors.email}</p>}
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        name='password'
        value={signInPerson.password}
        onChange={signInChangeHandler}
      />
      {signInErrors.password && (
        <p className='errors'>{signInErrors.password}</p>
      )}
      {loginAuthenticationError && (
        <p className='majorerror'>{loginAuthenticationError}</p>
      )}
      <button type='submit'>Sign In</button>
      <p>OR</p>
      <button type='button' onClick={setSignupTrue}>
        Create new account
      </button>
    </form>
  )
}
