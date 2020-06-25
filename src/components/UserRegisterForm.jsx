import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import './UserRegisterForm.css'
import { connect } from 'react-redux';
import { register } from '../actions/generalActions';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const customStylesDesktop = {
    //overlaybackground
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(55, 113, 226, 0.6)',
    },
    //pop-up content
    content: {
        position: 'absolute',
        top: '20px',
        left: '30%',
        right: '30%',
        bottom: '40px',
        border: '0px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '20px'
    }
};




const UserRegisterForm = ({ register, isAuthenticated }) => {
    const [showModal, setShowModal] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sexe, setSexe] = useState(false);
    const [age, setAge] = useState('');
    const [smoker, setSmoker] = useState(false);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [cardiac_disease, setCardiac] = useState(false);
    const [glasses, setGlasses] = useState(false);
    const [sport, setSport] = useState(true);

    const [redirect, setRedirect] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = { lastname, firstname, sexe, age, height, weight, sport, smoker, glasses, cardiac_disease, phone, email, password };
        register(patient);
    };

    const handleChangeFirstname = (e) => setFirstname(e.target.value);
    const handleChangeLastname = (e) => setLastname(e.target.value);
    const handleChangeCardiac = (e) => setCardiac(true);
    const handleChangeCardiacFalse = (e) => setCardiac(false);
    const handleChangeheight = (e) => setHeight(e.target.value);
    const handleChangeweight = (e) => setWeight(e.target.value);
    const handleChangesexe = (e) => setSexe(true);
    const handleChangesexeFalse = (e) => setSexe(false);
    const handleChangePhone = (e) => setPhone(e.target.value);
    const handleChangeage = (e) => setAge(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeSport = (e) => setSport(true);
    const handleChangeSportFalse = (e) => setSport(false);
    const handleChangeGlasses = (e) => setGlasses(true);
    const handleChangeGlassesFalse = (e) => setGlasses(false);
    const handleChangesmoker = (e) => setSmoker(true);
    const handleChangesmokerFalse = (e) => setSmoker(false);


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
                width: "30ch",
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
        <div>
        <div className="formDesktop">
                {isAuthenticated === false ? <Redirect to='/login' email1={email} password1={password}/> 
        : <>

            <button className="RegistrationPatientCTA" onClick={handleOpenModal}> Je suis un patient</button>
            <Modal
                isOpen={showModal}
                contentLabel="Modal #1 Global Style Override Example"
                onRequestClose={handleCloseModal}
                style={customStylesDesktop}
            >
                <div className="modalHeader">
                    <div className="closeModal" onClick={handleCloseModal}>
                        <p>X</p>
                    </div>
                    <div className="modalTitle">
                        <h4>Créer mon profil</h4>
                    </div>
                </div>
                <div className="RegistrationForm">

                    <form
                        className="formContainer"
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div>
                            <label for="sexe">Sexe</label><br />
                            <div className="radioInput">
                                <div className="radioValuesLeft">
                                    <input type="radio" id="Sexe" name="sexe" value="true" onChange={handleChangesexe} /> Femme
                                    </div>
                            <div className="radioValuesRight">
                                <input type="radio" id="Sexe2" name="sexe" value="false" onChange={handleChangesexeFalse} /> Homme
                                    </div>
                                    </div>
                        </div>
                        <br />
                        <div>
                            <TextField
                                id="Age"
                                label="Date de naissance"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.root}
                                value={age}
                                onChange={handleChangeage}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField
                                id="Height"
                                label="Taille"
                                variant="outlined"
                                value={height}
                                className={classes.root}
                                onChange={handleChangeheight}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">Cm</InputAdornment>,
                                }}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField
                                id="Weight"
                                label="Poids"
                                variant="outlined"
                                className={classes.root}
                                value={weight}
                                onChange={handleChangeweight}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                }}
                            />
                        </div>
                        <br />
                        <div>
                            <label for="sport">Pratique de sport</label><br />
                            <div className="radioInput">
                                <div className="radioValuesLeft">
                                    <input type="radio" id="Sport" name="sport" value='true' onChange={handleChangeSport} /> Oui
                                    </div>
                                <div className="radioValuesRight">
                                    <input type="radio" id="Sport2" name="sport" value='false' onChange={handleChangeSportFalse} /> Non
                                    </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <label for="smoker">Tabagisme</label><br />
                            <div className="radioInput">
                                <div className="radioValuesLeft">
                                    <input type="radio" id="Smoker" name="smoker" value='true' onChange={handleChangesmoker} /> Oui
                                    </div>
                                <div className="radioValuesRight">
                                    <input type="radio" id="Smoker2" name="smoker" value='false' onChange={handleChangesmokerFalse} /> Non
                                    </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <label for="cardiac_disease">Troubles cardiaques</label><br />
                            <div className="radioInput">
                                <div className="radioValuesLeft">
                                    <input type="radio" name="cardiac_disease" id="Cardiac_disease" value='true' onChange={handleChangeCardiac} /> Oui
                                    </div>
                                <div className="radioValuesRight">
                                    <input type="radio" name="cardiac_disease" id="Cardiac_disease2" value='false' onChange={handleChangeCardiacFalse} /> Non
                                    </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <label for="glasses">Lunettes ou lentilles</label><br />
                            <div className="radioInput">
                                <div className="radioValuesLeft">
                                    <input type="radio" name="glasses" id="Glasses" value='true' onChange={handleChangeGlasses} /> Oui
                                    </div>
                                <div className="radioValuesRight">
                                    <input type="radio" name="glasses" id="Glasses2" value='false' onChange={handleChangeGlassesFalse} /> Non
                                    </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <hr />
                            <br />
                            <div>
                                <TextField
                                    id="Firstname"
                                    label="Prénom"
                                    variant="outlined"
                                    value={firstname}
                                    className={classes.root}
                                    onChange={handleChangeFirstname}
                                />
                            </div>
                            <br />
                            <div>
                                <TextField
                                    id="Lastname"
                                    label="Nom"
                                    variant="outlined"
                                    className={classes.root}
                                    value={lastname}
                                    onChange={handleChangeLastname}
                                />

                            </div>
                        </div>
                        <br />
                        <div>
                            <TextField
                                id="email"
                                label="E-mail"
                                variant="outlined"
                                className={classes.root}
                                value={email}
                                onChange={handleChangeEmail}
                            />
                            {/*} <label for="email">Email</label><br/>
                            <input required placeholder="jean.dupont@gmail.com" type="email" id="Email" name="email" value={email} onChange={handleChangeEmail}
        />  */}
                        </div>
                        <br />
                        <div>
                            <TextField
                                id="password"
                                label="Mot de passe" type="password"
                                className={classes.root}
                                variant="outlined"
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField
                                id="Phone"
                                label="Téléphone"
                                variant="outlined"
                                className={classes.root}
                                value={phone}
                                onChange={handleChangePhone}
                            />
                        </div>
                        <br /> <br />
                        
                        <button className="submitCTA" type="submit" onClick={handleSubmit}>Créer mon profil</button>
                        <br />
                    </form>


                </div>

            </Modal>
            </>}
        </div>
       
</div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps, { register })(UserRegisterForm);