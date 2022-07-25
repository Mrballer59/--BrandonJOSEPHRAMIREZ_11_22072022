import logo from '../../assets/LOGO.svg'
import './Header.css'

function Header(){
    return(
        <div>
            <header>
                <img src={logo} className='logo' alt="Logo of Kasa" />
                <nav>
                    <a href="#">Accueil</a>
                    <a href="#">A Propos</a>
                </nav>
            </header>
        </div>
    )
}

export default Header; 