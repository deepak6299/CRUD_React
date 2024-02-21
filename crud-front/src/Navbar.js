import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='header'>
      <h2>CRUD OPERATION</h2>
      <button className='button '><Link to='/addlist'>Add  List</Link></button>
    </div>
  )
}
