import React from 'react'
import { Link } from 'react-router'

const App = () => {
  return (
    <div className='p-5 container mx-auto'>
       <nav>
        <ul className='flex items-center justify-center space-x-4'>
          <li><Link to={"/register"} className='px-6 py-2 text-white rounded hover:bg-green-700 bg-green-500'>Register</Link></li>
          <li><Link to={"/login"} className='px-6 py-2 text-white rounded hover:bg-green-700 bg-green-500'>Login</Link></li>

        </ul>
       </nav>
    </div>
  )
}

export default App
