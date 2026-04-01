import '../header.css'
import icon from '../assets/icon.png'
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li  id='logo'><img src={icon} alt="Icone"/></li>
                    <li><Button>Aprender</Button></li>
                    <li><Button>Postar Conteúdo</Button></li>
                    <li><Button>Sobre o site</Button></li>
                </ul>
            </nav>
        </header>
    )
}