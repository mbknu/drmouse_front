import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Review from './Review';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Exo',
    headerBgColor: '#143d8f',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#3771E2',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

class SimpleForm extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Bonjour, comment t\'appelles-tu ?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Enchanté {previousValue}! Quel est ton sexe ?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'Homme', label: 'Homme', trigger: '5' },
                { value: 'Femme', label: 'Femme', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Quel âge as-tu ?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'Chiffre incorrect';
                } else if (value <= 0) {
                  return 'Il y a une erreur';
                } else if (value >= 120) {
                  return `${value}? Sérieusement !?`;
                }
  
                return true;
              },
            },
            {
              id: '7',
              message: 'Super, voici tes informations :',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Veux-tu changer des informations ?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Oui', trigger: 'update-yes' },
                { value: 'no', label: 'Non', trigger: '8' },
              ],
            },
            {
              id: 'update-yes',
              message: 'Que veux-tu modifier ?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nom', trigger: 'update-name' },
                { value: 'gender', label: 'Sexe', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '8',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '8',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '8',
            },
            {
              id: '8',
              message: 'Savez-vous qu\'à partir de 50 ans chez les femmes, il est conseillé de faire une mammographie tous les deux ans ?',
              trigger: '9' 
            },
            { id: '9',
              options: [
                { value: 'yes', label: 'Oui', trigger: 'end-message' },
                { value: 'no', label: 'Non', trigger: '10' },
              ],  
            },
            {
              id: '10',
              component: (
                <div>Je vous propose de prendre dès à présent de prendre un rendez-vous avec un gynécologue sur <a href="https://www.doctolib.fr/" target="_blank" style={{color: "#ffffff", textDecoration: "underline"}}>Doctolib.fr</a></div>
            ),
            asMessage: true,

            },
            {
              id: 'end-message',
              message: 'Merci d\'avoir discuté avec moi, bonne journée',
              end: true,
            },
          ]} headerTitle="Chat"
        />
        </ThemeProvider>
      );
    }
  }
  
  export default SimpleForm;