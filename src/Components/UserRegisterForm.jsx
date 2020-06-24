import React from 'react'
import Modal from 'react-modal';
import './UserRegisterForm.css'



const customStyles = {
    //overlaybackground
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(200, 155, 55, 0.75)'
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

class UserRegisterForm extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { phone, hasError } = this.state;
        return (
            <div>
                <button onClick={this.handleOpenModal}>Je suis un patient</button>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Modal #1 Global Style Override Example"
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                >
                    <div className="modalHeader">
                        <div className="closeModal" onClick={this.handleCloseModal}>
                           <p>X</p> 
                        </div>
                        <div className="modalTitle">
                            <p>Créer mon profil</p>
                        </div>
                    </div>
                    <div className="RegistrationForm">

                    <form className="formContainer">
                        <div>
                            <label for="sexe">Sexe</label><br/>
                                <div className="radioInput"> 
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="sexe" name = "sexe" value="femme"/> Femme
                                    </div>
                                    <div className="radioValuesRight"> 
                                        <input type="radio" id="sexe" name = "sexe" value="homme"/> Homme
                                    </div>
                                </div>
                        </div>
                        <br/>
                        <div>
                            <label for="age">Date de Naissance</label><br/>
                            <input required placeholder="24" type="date" id="age" name="age"
                            min="1" max="100"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="height">Taille (en cm)</label><br/>
                            <input required="" placeholder="165" type="number" id="height" name="height"
                            min="120" max="230"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="weight">Poids (en kg)</label><br/>
                            <input required="" placeholder="58" type="number" id="weight" name="weight"
                            min="0" max="200"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="sport">Pratique de sport</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "sport" value="Oui"/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" id="sport" name = "sport" value="Non"/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="smoker">Tabagisme</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="smoker" name = "smoker" value="Oui"/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" id="smoker" name = "smoker" value="Non"/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="cardiac_disease">Troubles cardiaques</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "cardiac_disease" id="cardiac_disease" value="Oui"/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" name = "cardiac_disease" id="cardiac_disease" value="Non"/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="glasses">Lunettes ou lentilles</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "glasses" id="glasses" value="Oui"/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" name = "glasses" id="glasses" value="Non"/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <hr/>
                            <br/>
                            <div>
                                <label for="firstname">Prénom</label><br/>
                                <input required placeholder="Jean" type="text" id="firstname" name="firstname"
                             />  
                            </div> 
                            <br/>
                            <div>
                                <label for="lastname">Nom</label><br/>
                                <input required placeholder="Dupont" type="text" id="lastname" name="lastname"
                             />  
                            </div>          
                        </div>
                        <br/>
                        <div>
                            <label for="email">Email</label><br/>
                            <input required placeholder="jean.dupont@gmail.com" type="email" id="email" name="email"
                             />  
                        </div> 
                        <br/>
                        <div>
                            <label for="phone">Téléphone</label><br/>
                            <input type="text" id="phone" name="phone"
                                pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                                required placeholder="0XXXXXXXX"/> 
                        </div> 
                        <br/> <br/>

                        <button className="submitCTA" type="button">Créer mon profil</button>
                        <br/>
                    </form>
                    
             
                    </div>

                </Modal>
            </div>
        )
    }
}

export default UserRegisterForm