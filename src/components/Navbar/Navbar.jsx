import styles from './styles.module.css';
import ChevronDown from '../../assets/ChevronDown';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ currentPath }) {
    const [menu, setMenu] = useState(false);
    const location = useLocation();
    const path = currentPath || location.pathname;

    const navLinks = [
        { label: 'Rent', to: '/' },
        { label: 'Buy', to: '/buy' },
        { label: 'Sell', to: '/sell' },
        { label: 'Favourite', to: '/favourite' },
        { label: 'Manage Property', to: '/manage-property', icon: <ChevronDown /> },
        { label: 'Resources', to: '/resources', icon: <ChevronDown /> },
    ];

    return (
        <header className={styles.navbar}>
            <div className={styles.logoCont}>
                <div className={styles.logo}>
                    <img src="/estatery.png" alt="Estatery" />
                </div>
                <button className={menu? `${styles.menu} ${styles.active}` : styles.menu} onClick={()=>setMenu(!menu)}></button>
            </div>
            <div className={menu? `${styles.navbarcont} ${styles.active}` : styles.navbarcont}>
                <nav className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className={path === link.to ? styles.active : ''}
                        >
                            {link.label} {link.icon}
                        </Link>
                    ))}
                </nav>
                <div className={styles.authButtons}>
                    <button className={styles.login}>Login</button>
                    <button className={styles.signup}>Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;