export default function formValidator(human) {
  let errors = {}
  if (!human.name.trim()) {
    errors.name = 'name required'
  } else {
    for (let i = 0; i < human.name.length; i++) {
      if (!/^[A-Za-z]+/.test(human.name[i])) {
        errors.name = 'Enter a valid name'
      }
    }
  }
  if (!human.relation.trim()) {
    errors.relation = 'relation required'
  } else {
    for (let i = 0; i < human.relation.length; i++) {
      if (!/^[A-Za-z]+/.test(human.relation[i])) {
        errors.relation = 'Enter a valid relation'
      }
    }
  }
  if (!human.date.trim()) {
    errors.date = 'date required'
  }
  return errors
}
