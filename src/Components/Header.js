import React from 'react';
import {Link} from "react-router-dom";
import logo from '../img/caremindwhite.svg';
<<<<<<< HEAD
import '../App.css';
=======
import "../App.css";
>>>>>>> a24992df6ec2ef6f75cc9b47962fd38e19e5492b

const Header = () => {
    return (
        <Link to='/'>
            <img className='logo' src={logo} alt='logo de caremind' />
        </Link>
    );
};

export default Header;