import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} style={{ border: props.mode === "dark" ? "1px solid white" : "1px solid black" }}>
        <div className="container-fluid  ">
          <Link className="navbar-brand " to="/">{props.title}</Link>

          <ul className="nav-item" style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </ul>

          <ul className="nav-item" style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <Link className="nav-link" to="/about">About</Link>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
