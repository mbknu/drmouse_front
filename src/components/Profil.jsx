import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/profil.css";

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

const Profil = ({patient}) => {
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

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const birthdate = new Date(patient.age);
    let date = birthdate.getDate();
    let month = birthdate.getMonth();
    let year = birthdate.getFullYear();
    const ageDif = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageDif);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970); 

    let sport;
    let smoker;
    let cardiac_disease;
    let glasses;
    if(patient.sport === 1) { sport= "oui"} else {sport='non'}
    if(patient.cardiac_disease === 1) { cardiac_disease= "oui"} else {cardiac_disease='non'}
    if(patient.smoker === 1) { smoker= "oui"} else {smoker='non'}
    if(patient.glasses === 1) { glasses= "oui"} else {glasses='non'}

    let sex;

    if(patient.sexe === 1) { sex="femme"} else {sex='homme'}

    return(
        <>
            <div className='titledash'>
            <h2>DASHBOARD</h2>
            <Button
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    onClick={handleOpenModal}
                >
                    Mon profil
            </Button>
            </div>
            <Modal
                isOpen={showModal}
                contentLabel="Modal #1 Global Style Override Example"
                onRequestClose={handleCloseModal}
                style={customStyles}
                className='modalprofil'
            >
                <div className="profiltitle">
                    <h2>Mon profil</h2>
                </div>
                <h4>Identité</h4>
                <hr/>
                <div className='infoprofil'>
                    <div className='containerinfo'>
                        <h5>Nom</h5>
                        <p>{patient.lastname}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Prénom</h5>
                        <p>{patient.firstname}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Email</h5>
                        <p>{patient.email}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Téléphone</h5>
                        <p>{patient.phone}</p>
                    </div>
                </div>
                <h4>Caractéristiques physiques</h4>
                <hr/>
                <div className='infoprofil'>
                    <div className='containerinfo'>
                        <h5>Sexe</h5>
                        <p>{sex}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Age</h5>
                        <p>{date}/{month}/{year} ({age} ans)</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Poids</h5>
                        <p>{patient.weight}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Taille</h5>
                        <p>{patient.height}</p>
                    </div>
                </div>
                <h4>Autres</h4>
                <hr/>
                <div className='infoprofil'>
                    <div className='containerinfo'>
                        <h5>Pratique du sport</h5>
                        <p>{sport}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Fumeur</h5>
                        <p>{smoker}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Problème cardiaque</h5>
                        <p>{cardiac_disease}</p>
                    </div>
                    <div className='containerinfo'>
                        <h5>Lunettes</h5>
                        <p>{glasses}</p>
                    </div>
                </div>
            </Modal>
        </>
    )
};

export default Profil;