import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import doctolibImg from "./Images/doctolib.png";
import pagesJaunesImg from "./Images/pagesjaune.png";
import rdvImg from './Images/rdv.jpg';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: '20px',
    color: '#fff',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue,
  },
});

const UserExam = ({
  index,
  age,
  title,
  description,
  female,
}) => {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  return(
    <>
      <tr className="Container-List">
        <td>{index}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
        { female === 1 
            ? 
            <div className="badge badge-pill badge-info">En Attente</div> 
            :
            <div className="badge badge-pill badge-success">Complété</div>
        }
          {/* <div className="badge badge-pill badge-info">On Hold</div> */}
        </td>
        <td>{age} ans</td>
        <td>
        {
          female === 1 
          ?
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="secondary" onClick={() => setShow(true)} className={classes.margin}>
              Créer
            </Button>
          </ThemeProvider>
          :
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" className={classes.margin}>
              Done!
            </Button>
          </ThemeProvider>
        }
        </td>
      </tr>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <Modal.Title>Prendre un rendez-vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href="https://www.doctolib.fr/" target="_blank"  rel="noopener noreferrer">
            <img src={doctolibImg} alt="doctobib" className="doctolibImg"/>
          </a>
          <a href="https://www.pagesjaunes.fr/" target="_blank"  rel="noopener noreferrer">
            <img src={pagesJaunesImg} alt="pages jaunes" className="pagesJauneImg"/>
          </a>
          <a href="https://www.rdvmedicaux.com/" target="_blank"  rel="noopener noreferrer">
            <img src={rdvImg} alt="rdv" className="rdvImg"/>
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="fas" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserExam;