import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='container'>
     <h3 className='title'><Link to='/'>SA.</Link></h3>
     <nav className='navigation'>
        <ul className='navlist'>
          <Link className='list-item' to='/project'>Project</Link>
          <Link className='list-item' to='/skills'>Skill</Link>

        </ul>
     </nav>

    </header>
  )
}

export default Header