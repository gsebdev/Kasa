import { Link, useMatch } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import '../assets/scss/layout/header.scss'

export default function Header(){
    return (
        <header>
            <img src={ logo } alt='logo' className="logo" />
            <nav>
                <ul>
                    <li><Link className={useMatch('/') ? 'active' : ''} to='/'>Accueil</Link></li>
                    <li><Link className={useMatch('/about') ? 'active' : ''} to='/about'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}