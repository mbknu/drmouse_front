import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/Home.css";
import Timeline from "./Timeline/Timeline";
import Chatbot from "./Chatbot/Chatbot";

const HomeText = (props) => {
    const useStyles = makeStyles((theme) => ({
        Button: {
            color: "white",
            backgroundColor: "#3771E2",
            "&:hover": {
                background: "#3771E2",
            },
            borderRadius: "20px",
        },
        root: {
            display: "flex",
            flexDirection: "column",
            "& > *": {
                margin: theme.spacing(1),
                width: "25ch",
            },
            "& label.Mui-focused": {
                color: "#3771E2",
            },
            "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                    borderColor: "#3771E2",
                },
            },
        },
    }));
    const classes = useStyles();
    return (
        <div className="home-container">
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
                <div className="part-two">
                    <Timeline />
                </div>
            </div>

            <Chatbot />
        </div>
    );
};

export default HomeText;
