import logo from '../assets/img/logo.png'

export default function Footer(){
    return (
        <footer>
            <img className='footer-logo' src={logo} alt="Kasa" />
            <p className='copyright'>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}