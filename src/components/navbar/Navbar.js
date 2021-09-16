import './navbar.css'
export default function Navbar({ users }) {
  return (
    <div className='navbar'>
      <div className='logo'>
        <i className='fab fa-algolia fa-2x'></i>
        <h1>Remind</h1>
      </div>

      <p>Users({users.length}/100)</p>
    </div>
  )
}
