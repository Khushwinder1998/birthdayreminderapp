import { useState, useEffect } from 'react'
import './Portfolio.css'
import formValidator from './functions/formvalidator'
export default function Portfolio({ welcomeFirstName, activeUser }) {
  const [errorsAddHuman, setErrorsAddHuman] = useState({})
  const [addClicked, setAddClicked] = useState(false)
  const [arrayName, setArrayName] = useState(() => {
    const localArrayName = localStorage.getItem(activeUser.email)
    return localArrayName ? JSON.parse(localArrayName) : []
  })
  const [human, setHuman] = useState({
    name: '',
    relation: '',
    date: '',
  })
  const ChangeHandler = (e) => {
    const { name, value } = e.target
    setHuman({ ...human, [name]: value })
  }
  const addHuman = (e) => {
    e.preventDefault()
    setAddClicked(true)
    setErrorsAddHuman(formValidator(human))
  }

  useEffect(() => {
    if (Object.keys(errorsAddHuman).length === 0 && addClicked) {
      setArrayName((prev) => [...prev, human])
    }
  }, [errorsAddHuman])
  useEffect(() => {
    localStorage.setItem(activeUser.email, JSON.stringify(arrayName))
  }, [arrayName])

  return (
    <div>
      <h1>Welcome {welcomeFirstName}</h1>
      <div className='cards'>
        <form onSubmit={addHuman}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={human.name}
            onChange={ChangeHandler}
          />
          {errorsAddHuman.name && (
            <p className='errors'>{errorsAddHuman.name}</p>
          )}
          <label htmlFor='relation'>Relation:</label>
          <input
            type='text'
            name='relation'
            value={human.relation}
            onChange={ChangeHandler}
          />
          {errorsAddHuman.relation && (
            <p className='errors'>{errorsAddHuman.relation}</p>
          )}
          <label htmlFor='date'>DOB:</label>
          <input
            type='date'
            name='date'
            value={human.date}
            onChange={ChangeHandler}
          />
          {errorsAddHuman.date && (
            <p className='errors'>{errorsAddHuman.date}</p>
          )}
          <button type='submit'>Add</button>
        </form>
        {arrayName.map((value) => {
          return (
            <div>
              <h3>{value.name}</h3>
              <h3>{value.relation}</h3>
              <h3>{value.date}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
