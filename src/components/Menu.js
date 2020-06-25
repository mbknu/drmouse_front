import React from "react";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/connexion.css';
import './Menu.css'

const Menu = (props) => {
    const useStyles = makeStyles((theme) => ({
        Button: {
            color: '#3771E2',
            backgroundColor: '#fff',
            '&:hover': {
              background: '#fff',
            },
            borderRadius: '20px',
          },
        root: {
            display:'flex',
            flexDirection:'column',
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
          '& label.Mui-focused': {
            color: '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
        },
    }));
    
    const classes = useStyles();

    return (
        <div className="buttons-co">
            <Link to='/login' >
                <button className="ConnexionPatient">
                  Connexion patient
                </button>
            </Link>
        </div>
    );
};

export default Menu;
