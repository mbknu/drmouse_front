import React from 'react';
import {Link} from "react-router-dom";
import logo from '../img/caremindwhite.svg';
import "../App.css";
import Menu from './Menu';

const Header = () => {
    return (
        <Link to='/'>
            <img className='logo' src={logo} alt='logo de caremind' />
        </Link>
    );
};

export default Header;