import React from "react";
import { connect } from 'react-redux';
import "../styles/Home.css";
import UserRegisterForm from './UserRegisterForm'
import Timeline from "./Timeline/Timeline";
import Chatbot from "./Chatbot/Chatbot"

const HomeText = ({isAuthenticated}) => {
    return (
        <div className="home-container">
            {isAuthenticated ? ''
            :
            <>
            <div className="home-text-one">
                <h2>Mieux <span style={{fontWeight: "600"}}>prévenir</span> pour mieux <span style={{fontWeight: "600"}}>soigner</span></h2>
                <h4>Rappel d'examens médicaux</h4>
                <h4>Aide à la prise de rendez-vous</h4>
                <div className="home-btn" >
                    <UserRegisterForm />
                </div>
            </div>
            <hr />
            <div className="home-text-two">
                <h2>Prévisualisez vos <span style={{color: "#3771E2"}}>rendez-vous clés</span> pour une bonne santé</h2>
                <h4>Être alerté lors d'un examen à prendre. Comprendre les enjeux de celui-ci</h4>
            </div>
            </>}
            <Timeline />
            <Chatbot />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
  };
  

export default connect(mapStateToProps)(HomeText);