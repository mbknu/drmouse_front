import React from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/connexion.css';
import ButtonDeconnexion from './ButtonDeconnexion';

const Menu = ({isAuthenticated}) => {
    const useStyles = makeStyles((theme) => ({
        Button: {
            color: '#3771E2',
            backgroundColor: '#fff',
            '&:hover': {
              background: '#fff',
            },
            borderRadius: '20px',
            marginLeft:'1rem'
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
            {isAuthenticated ? 
            <><Link to='/dashboard' >
                <Button 
                    className={classes.Button}
                    variant="contained" 
                    color="primary"
                >
                    Mon dashboard
                </Button>
            </Link>
            <ButtonDeconnexion />
            </>
            :
            <Link to='/login' >
                <Button 
                    className={classes.Button}
                    variant="contained" 
                    color="primary"
                >
                    Connexion patient
                </Button>
            </Link>}
        </div>
    );
};

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Menu);
