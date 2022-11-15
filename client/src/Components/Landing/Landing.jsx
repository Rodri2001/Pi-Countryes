import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1> Countries </h1>
      <Link to="/Home">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Landing