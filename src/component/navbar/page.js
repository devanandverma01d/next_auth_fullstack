import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/register">Regiter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Navbar