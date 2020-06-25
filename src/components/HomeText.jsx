import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/Home.css";
import UserRegisterForm from './UserRegisterForm'
import Timeline from "./Timeline/Timeline";

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
            <div className="home-text-one">
                <h2>Mieux prévenir pour mieux soigner</h2>
                <h4>Rappel d'examens médicaux</h4>
                <h4>Prise de rendez-vous</h4>
                <div className="home-btn" >
                    <UserRegisterForm />
                    <Button
                        className={classes.Button}
                        variant="contained"
                        color="primary"
                        onClick="#"
                    >
                        Je suis professionnel de santé
                    </Button>
                </div>
            </div>
            <hr />
            <div className="home-text-two">
                <h2>Prévisualisez vos rendez-vous clés pour une bonne santé</h2>
                <h4>Être alerté lors d'un examen à prendre</h4>
                <h4>Comprendre les enjeux de celui-ci</h4>
            </div>
            <Timeline />
        </div>
    );
};

export default HomeText;