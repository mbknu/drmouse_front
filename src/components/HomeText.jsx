import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import "../styles/Home.css";
import Timeline from "./Timeline/Timeline";
import Chatbot from "./Chatbot/Chatbot";

const HomeText = ({isAuthenticated}) => {
    return (
        <div className="home-container">
        {isAuthenticated ? ''
            :
            <>
            <div className="home-info">
                <div className="part-one">
                    <div className="home-mission" >
                        <h2>Notre mission : la prévention</h2>
                    </div>
                    <hr />
                    <h2>Nos atouts</h2>
                    <div className="home-benefits" >
                        <h3>Prévisualisation des rendez-vous clés</h3>
                        <h3>Rappel d'examens médicaux</h3>
                        <h3>Aide à la prise de rendez-vous</h3>
                        <h3>Informations prévention</h3>
                    </div>
                </div>
            </div>
            </>}
        <div className="part-two">
                    <Timeline />
           
        </div>
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
