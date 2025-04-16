import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h4>Redes Sociais e Contato</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/login">Entre</Link></li>
                        <li><Link to="/cadastro">Cadastre-se</Link></li>
                    </ul>

                </div>

                <div className={styles.footerSection}>
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="mailto:freemix.br@gmail.com">freemix.br@gmail.com</a></li>
                    </ul>

                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/freemix" target="_blank" rel="noopener noreferrer">
                            <img src="/imgs/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="https://x.com/freemix" target="_blank" rel="noopener noreferrer">
                            <img src="/imgs/x.svg" alt="X (Twitter)" />
                        </a>
                        <a href="https://www.linkedin.com/company/freemix" target="_blank" rel="noopener noreferrer">
                            <img src="/imgs/linkedin.svg" alt="LinkedIn" />
                        </a>

                    </div>
                </div>
            </div>

            <p className={styles.footerCopy}>© 2025 Freemix Web. Todos os direitos reservados</p>
        </footer>
    );
}
