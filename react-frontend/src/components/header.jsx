import '../css/header.css'
import icon from '../assets/icon.png'
import Button from '@mui/material/Button';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
    const { isAuthenticated, loading } = useAuth();

    return (
        <header>
            <nav>
                <ul>
                    <li  id='logo'><img src={icon} alt="Icone"/></li>
                    <li><Button>Aprender</Button></li>
                    <li><Button>Postar Conteúdo</Button></li>
                    <li><Button>Sobre o site</Button></li>
                    {isAuthenticated ? (
      <Button variant="contained" className="loginlogout">Logout</Button>
    ) : (
      <Button variant="contained" className="loginlogout">Login</Button>
    )}
                </ul>
            
            </nav>
        
        </header>
    )
}