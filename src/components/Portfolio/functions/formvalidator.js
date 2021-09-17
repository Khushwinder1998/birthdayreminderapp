export default function formValidator(human) {
  let errors = {}
  if (!human.name.trim()) {
    errors.name = 'name required'
  }
  if (!human.relation.trim()) {
    errors.relation = 'relation required'
  }
  if (!human.date.trim()) {
    errors.date = 'date required'
  }
  return errors
}
