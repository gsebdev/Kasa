import React from "react"
import { Link, Outlet, useMatch } from "react-router-dom"
import logo from '../assets/img/logo.png'

function Layout() {
    return (
        <React.Fragment>
            <header>
                <img src={ logo } alt='logo' className="logo" />
                <nav>
                    <ul>
                        <li><Link className={useMatch('/') ? 'active' : ''} to='/'>Accueil</Link></li>
                        <li><Link className={useMatch('/about') ? 'active' : ''} to='/about'>A Propos</Link></li>
                    </ul>
                </nav>
            </header>
            <main><Outlet /></main>
        </React.Fragment>
        
    ) 
}
export default Layout