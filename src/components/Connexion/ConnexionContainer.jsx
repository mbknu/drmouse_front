import React, {useState} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/generalActions';
import { Redirect } from 'react-router';
import '../../styles/connexion.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import note from '../../img/notewhite.svg';

const ConnexionContainer = ({email1, password1, login, isAuthenticated}) => {
    const useStyles = makeStyles((theme) => ({
        Button: {
            fontFamily: 'Exo',
            color: 'white',
            backgroundColor: '#3771E2',
            '&:hover': {
              background: '#3771E2',
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
            color: '#3771E2',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#3771E2',
            },
          },
        },
      }));
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      
    const classes = useStyles();

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
  
    if(isAuthenticated && email1) {
      setEmail(email1)
      setPassword(password1)
      const client = { email, password };
      login(client);
    } 

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const client = { email, password };
        login(client);
    };

    console.log('email register', email1)

    return (
      <>
        {isAuthenticated? <Redirect to='/dashboard' email={email} password={password} /> 
        :
        <div className='login'>
        <img className='imgnote1' src={note} alt='note-icon' />
        <div className='connexion'>
            <h4>Connexion patient</h4>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="email" 
                    label="E-mail" 
                    variant="outlined"
                    onChange={handleChangeEmail}
                />
                <TextField
                    id="mot de passe" 
                    label="Mot de passe" type="password"                         autoComplete="current-password"
                    variant="outlined"
                    onChange={handleChangePassword}
                />
            </form>
            <Button 
                className={classes.Button}
                variant="contained" 
                color="primary"
                onClick={handleOnSubmit}
            >
                Se connecter
            </Button>
        </div>
        <img className='imgnote2' src={note} alt='note-icon' />
        </div>
        }
      </>
    )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
    };
};

export default connect(mapStateToProps, {login})(ConnexionContainer);