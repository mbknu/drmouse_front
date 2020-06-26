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
                    
                {isAuthenticated ? <div className='vide'/>:
                <div className="home-banner">
                    <img className="home-img" src={imghome} alt='home concept' />
                    <div className="home-text-one">
                        <h1>
                            Mieux prévenir pour mieux guérir
                        </h1>
                        <h3>Caremind vous aide à planifier vos prochains rendez-vous médicaux en fonction de votre âge, votre sexe et vos antécédents médicaux...</h3>
                        <UserRegisterForm />
                    </div>
                </div>
                }
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
