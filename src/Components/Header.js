import React from 'react';
import logo from '../img/caremindwhite.svg';
import '../App.css';

const Header = () => {
    return (
        <img className='logo' src={logo} alt='logo de caremind' />
    );
};

export default Header;