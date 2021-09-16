export default function CheckErrors(person) {
  let errors = {}
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
  return errors
}
