export default function CheckErrors(person) {
  let errors = {}
  if (!person.firstName.trim()) {
    errors.firstName = 'First name required'
  } else {
    for (let i = 0; i < person.firstName.length; i++) {
      if (!/^[A-Za-z]+/.test(person.firstName[i])) {
        errors.firstName = 'Enter a valid name'
      }
    }
  }

  if (!person.lastName.trim()) {
    errors.lastName = 'Last name required'
  } else {
    for (let i = 0; i < person.lastName.length; i++) {
      if (!/^[A-Za-z]+/.test(person.lastName[i])) {
        errors.lastName = 'Enter a valid name'
      }
    }
  }

  if (!person.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(person.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!person.password) {
    errors.password = 'Password is required'
  } else if (person.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more'
  }

  if (!person.password2) {
    errors.password2 = 'Password is required'
  } else if (person.password2 !== person.password) {
    errors.password2 = 'Passwords do not match'
  }
  return errors
}
