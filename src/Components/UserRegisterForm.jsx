import React from 'react'
import Modal from 'react-modal';
import './UserRegisterForm.css'
import axios from "axios"



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
            sexe:"",
            age:"",
            height:"",
            weight:"",
            sport:"",
            smoker:"",
            cardiac_disease:"",
            glasses:"",
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            password:"",

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

    handleSubmit(e) {
        e.preventDefault();
        axios({
          method: 'POST',
          url: 'http://localhost:3000/api/login',
          data: this.state
        }).then((response) => {
          if (response.data.status === 'success') {
            console.log(response.data.status);
            this.resetForm();
          } else if (response.data.status === 'fail') {
            console.log(response.data.status);
          }
        });
      }

      resetForm() {
        this.setState({
            sexe:"",
            age:"",
            height:"",
            weight:"",
            sport:"",
            smoker:"",
            cardiac_disease:"",
            glasses:"",
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            password:"",
        });
      }

      onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
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

                    <form 
                    className="formContainer"
                    onSubmit={this.handleSubmit.bind(this)}
                    method="POST"
                    >
                        <div>
                            <label for="sexe">Sexe</label><br/>
                                <div className="radioInput"> 
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="Sexe" name = "sexe" value={this.state.sexe} onChange={this.onChange.bind(this)}/> Femme
                                    </div>
                                    <div className="radioValuesRight"> 
                                        <input type="radio" id="Sexe" name = "sexe" value={this.state.sexe} onChange={this.onChange.bind(this)}/> Homme
                                    </div>
                                </div>
                        </div>
                        <br/>
                        <div>
                            <label for="age">Date de Naissance</label><br/>
                            <input required placeholder="24" type="date" id="Age" name="age" value={this.state.age} onChange={this.onChange.bind(this)}
                            min="1" max="100"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="height">Taille (en cm)</label><br/>
                            <input required="" placeholder="165" type="number" id="Height" name="height" value={this.state.height} onChange={this.onChange.bind(this)}
                            min="120" max="230"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="weight">Poids (en kg)</label><br/>
                            <input required="" placeholder="58" type="number" id="Weight" name="weight" value={this.state.weight} onChange={this.onChange.bind(this)}
                            min="0" max="200"/>          
                        </div>
                        <br/>
                        <div>
                            <label for="sport">Pratique de sport</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="Sport" name = "sport" value={this.state.sport} onChange={this.onChange.bind(this)}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" id="Sport" name = "sport" value={this.state.sport} onChange={this.onChange.bind(this)}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="smoker">Tabagisme</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" id="Smoker" name = "smoker" value={this.state.smoker} onChange={this.onChange.bind(this)}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" id="Smoker" name = "smoker" value={this.state.smoker} onChange={this.onChange.bind(this)}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="cardiac_disease">Troubles cardiaques</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "cardiac_disease" id="Cardiac_disease" value={this.state.cardiac_disease} onChange={this.onChange.bind(this)}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" name = "cardiac_disease" id="Cardiac_disease" value={this.state.cardiac_disease} onChange={this.onChange.bind(this)}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <label for="glasses">Lunettes ou lentilles</label><br/>
                                <div className="radioInput">
                                    <div className="radioValuesLeft">
                                        <input type="radio" name = "glasses" id="Glasses" value={this.state.glasses} onChange={this.onChange.bind(this)}/> Oui
                                    </div>
                                    <div className="radioValuesRight">
                                        <input type="radio" name = "glasses" id="Glasses" value={this.state.glasses} onChange={this.onChange.bind(this)}/> Non
                                    </div>
                                </div>   
                        </div>
                        <br/>
                        <div>
                            <hr/>
                            <br/>
                            <div>
                                <label for="firstname">Prénom</label><br/>
                                <input required placeholder="Jean" type="text" id="Firstname" name="firstname" value={this.state.firstname} onChange={this.onChange.bind(this)}
                             />  
                            </div> 
                            <br/>
                            <div>
                                <label for="lastname">Nom</label><br/>
                                <input required placeholder="Dupont" type="text" id="Lastname" name="lastname" value={this.state.lastname} onChange={this.onChange.bind(this)}
                             />  
                            </div>          
                        </div>
                        <br/>
                        <div>
                            <label for="email">Email</label><br/>
                            <input required placeholder="jean.dupont@gmail.com" type="email" id="Email" name="email" value={this.state.email} onChange={this.onChange.bind(this)}
                             />  
                        </div> 
                        <br/>
                        <div>
                                <label for="password">Mot de passe</label><br/>
                                <input required placeholder="" type="text" id="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)}
                             />  
                            </div> 
                            <br/>
                        <div>
                            <label for="phone">Téléphone</label><br/>
                            <input type="text" id="Phone" name="phone" value={this.state.phone} onChange={this.onChange.bind(this)}
                                pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                                required placeholder="0XXXXXXXX"/> 
                        </div> 
                        <br/> <br/>

                        <button className="submitCTA" type="submit" onClick={this.handleSubmit}>Créer mon profil</button>
                        <br/>
                    </form>
                    
             
                    </div>

                </Modal>
            </div>
        )
    }
}

export default UserRegisterForm