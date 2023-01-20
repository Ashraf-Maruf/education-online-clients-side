import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-area mt-5 bg-dark'>
            <Container>
                <p className='m-0'><small>© 2022 Copyright: Education Online</small></p>
            </Container>
        </div>
    );
};

export default Footer;