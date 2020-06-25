import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import './UserRegisterForm.css'
import { connect } from 'react-redux';
import { register } from '../actions/generalActions';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = {
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

const UserRegisterForm = ({register, isAuthentificated}) => {
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

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = {lastname, firstname, sexe, age, height, weight, sport, smoker, glasses, cardiac_disease, phone, email, password};
        register(patient)
      }

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
            <div>
                <Button
                            className={classes.Button}
                            variant="contained"
                            color="primary"
                            onClick={handleOpenModal}
                        >
                            Je suis patient
                </Button>
                <Modal
                    isOpen={showModal}
                    contentLabel="Modal #1 Global Style Override Example"
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                >
                    <div className="modalHeader">
                        <div className="closeModal" onClick={handleCloseModal}>
                           <p>X</p> 
                        </div>
                        <div className="modalTitle">
                            <p>Créer mon profil</p>
                        </div>
                    </div>
                    <div className="RegistrationForm">

                    <form 
                    className="formContainer"
                    onSubmit={handleSubmit}
                    method="POST"
                    >
                        <div>
                            <label for="sexe">Sexe</label><br/>
                                <div className="radioInput"> 
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="Sexe" name = "sexe" value="true" onChange={handleChangesexe}/> Femme
                                    </div>
                                    <div className="radioValuesRight"> 
                                        <input type="radio" id="Sexe" name = "sexe" value="false" onChange={handleChangesexeFalse} /> Homme
                                    </div>
                                </div>
                        </div>
                        <br/>
                        <div>
                            <label for="age">Date de Naissance</label><br/>
                            <input required placeholder="24" type="date" id="Age" name="age" value={age} onChange={handleChangeage}
                           />          
                        </div>
                        <br/>
                        <div>
                            <label for="height">Taille (en cm)</label><br/>
                            <input required="" placeholder="165" type="number" id="Height" name="height" value={height} onChange={handleChangeheight}
                            min="120" max="230"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="weight">Poids (en kg)</label><br/>
                            <input required="" placeholder="58" type="number" id="Weight" name="weight" value={weight} onChange={handleChangeweight}
                            min="0" max="200"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="sport">Pratique de sport</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="Sport" name = "sport" value='true' onChange={handleChangeSport}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" id="Sport" name = "sport" value='false' onChange={handleChangeSportFalse}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="smoker">Tabagisme</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="Smoker" name = "smoker" value='true' onChange={handleChangesmoker}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" id="Smoker" name = "smoker"  value='false' onChange={handleChangesmokerFalse}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="cardiac_disease">Troubles cardiaques</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "cardiac_disease" id="Cardiac_disease" value='true' onChange={handleChangeCardiac}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" name = "cardiac_disease" id="Cardiac_disease" value='false' onChange={handleChangeCardiacFalse}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="glasses">Lunettes ou lentilles</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "glasses" id="Glasses" value='true' onChange={handleChangeGlasses}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" name = "glasses" id="Glasses" value='false' onChange={handleChangeGlassesFalse}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <hr/>
                            <br/>
                            <div>
                                <label for="firstname">Prénom</label><br/>
                                <input required placeholder="Jean" type="text" id="Firstname" name="firstname" value={firstname} onChange={handleChangeFirstname}
                             />  
                            </div> 
                            <br/>
                            <div>
                                <label for="lastname">Nom</label><br/>
                                <input required placeholder="Dupont" type="text" id="Lastname" name="lastname" value={lastname} onChange={handleChangeLastname}
                             />  
                            </div>          
                        </div>
                        <br/>
                        <div>
                            <label for="email">Email</label><br/>
                            <input required placeholder="jean.dupont@gmail.com" type="email" id="Email" name="email" value={email} onChange={handleChangeEmail}
                             />  
                        </div> 
                        <br/>
                        <div>
                                <label for="password">Mot de passe</label><br/>
                                <input required placeholder="" type="text" id="Password" name="password" value={password} onChange={handleChangePassword}
                             />  
                            </div> 
                            <br/>
                        <div>
                            <label for="phone">Téléphone</label><br/>
                            <input type="text" id="Phone" name="phone" value={phone} onChange={handleChangePhone}
                                pattern="[0-9]{5}"
                                required placeholder="0XXXXXXXX"/> 
                        </div> 
                        <br/> <br/>

                        <button className="submitCTA" type="submit" onClick={handleSubmit}>Créer mon profil</button>
                        <br/>
                    </form>
                    
             
                    </div>

                </Modal>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
     isAuthenticated: state.auth.isAuthenticated,
   };}
   
export default connect(mapStateToProps, {register})(UserRegisterForm);