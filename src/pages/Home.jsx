import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div style={{textAlign:'center'}}>
      <h2>Home</h2>
      <p>Welcome  this is the home page.</p>
      <p>
        Try the <Link to="/about">About</Link> or <Link to="/contact">Contact</Link> pages.
      </p>
    </div>
  )
}
