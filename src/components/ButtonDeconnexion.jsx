import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../actions/generalActions";

const ButtonDeconnexion = ({ logout }) => {
    const useStyles = makeStyles((theme) => ({
        Button: {
            fontFamily: "Exo",
            backgroundColor: "#fff",
            color: "#3771E2",
            marginLeft: "1rem",
            "&:hover": {
                background: "#fff",
            },
            borderRadius: "15px",
            width: "200px",
            height: "55.63px",
        },
        root: {
            display: "flex",
            flexDirection: "column",
            "& > *": {
                margin: theme.spacing(1),
                width: "30ch",
            },
            "& label.Mui-focused": {
                color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                },
            },
        },
    }));
    const classes = useStyles();

    return (
        <Link to="/">
            <Button
                className={classes.Button}
                variant="contained"
                color="primary"
                onClick={logout}
            >
                Se déconnecter
            </Button>
        </Link>
    );
};

export default connect(null, { logout })(ButtonDeconnexion);
