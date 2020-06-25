import React from "react";
import { connect } from 'react-redux';
import HomeText from "./HomeText";
import Menu from './Menu';
import imghome from '../img/home.svg';
import '../styles/Home.css';

const HomePage = ({isAuthenticated}) => {
    return (
        <div className='home'>
            <Menu />
            {isAuthenticated ? <div className='vide'/>:<img className="home-img" src={imghome} alt='home concept' />}
            <HomeText />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(HomePage);