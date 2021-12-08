import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
        // navbar-shrink

<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-shrink" id="mainNav">
            <div class="container px-4 px-lg-5">
                <Link className="navbar-brand" to='/'>TechSearch</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#login">Login</a></li>
                        <li class="nav-item"><Link className="nav-link" to='/registrar'>Register</Link></li>
                        <li class="nav-item"><Link className="nav-link" to='/home'>Home</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        
       
    )
}

export default Navbar
