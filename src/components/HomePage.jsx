import React from "react";
import { connect } from 'react-redux';
import HomeText from "./HomeText";
import Menu from "./Menu";
import imghome from "../img/home.svg";
import UserRegisterForm from "./UserRegisterForm";
import "../styles/Home.css";

const HomePage = ({isAuthenticated}) => {
    return (
        <div className="home">
            <Menu />
                    {isAuthenticated ? <div className='vide'/>:<img className="home-img" src={imghome} alt='home concept' />}
            <HomeText />
          <div className="home-banner">
                <img className="home-img" src={imghome} alt="home concept" />
                <div className="home-text-one">
                    <h1>
                        Caremind vous aide à planifier vos prochains rendez-vous
                        médicaux en fonction de votre âge, votre sexe et vos
                        antécédents médicaux...
                    </h1>
                        <UserRegisterForm />
                </div>
            </div>
        </div>
    );
};
       
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(HomePage);
