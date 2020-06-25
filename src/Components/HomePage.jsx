import React from "react";
import HomeText from "./HomeText";
import Menu from './Menu';
import imghome from '../img/home.svg';
import '../styles/Home.css';

const HomePage = () => {
    return (
        <div className='home'>
            <Menu />
            <img src={imghome} alt='home concept' />
            <HomeText />
        </div>
    );
};

export default HomePage;