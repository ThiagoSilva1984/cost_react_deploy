import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import Logo from '../../img/costs_logo.png'

function Navbar (){
    return (
        <nav className={styles.navBar}>
            <Container>
                <Link to="/"> 
                    <img src={Logo} alt="Coast"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}> 
                        <Link to="/projects">Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>  
        </nav>
    )
}

export default Navbar