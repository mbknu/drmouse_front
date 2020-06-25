import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import doctolibImg from "./Images/doctolib.png";
import pagesJaunesImg from "./Images/pagesjaune.png";
import rdvImg from './Images/rdv.jpg';

const UserExam = ({
  index,
  age,
  title,
  description,
  female,
}) => {

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
            <div className="badge badge-pill badge-info">On Hold</div> 
            :
            <div className="badge badge-pill badge-success">Completed</div>
        }
          {/* <div className="badge badge-pill badge-info">On Hold</div> */}
        </td>
        <td>{age} ans</td>
        <td>
        {
          female === 1 
          ?
          <button className="btn-shadow btn btn-secondary btn-focus" onClick={() => setShow(true)}>Create</button>
          :
          <button className="btn-shadow btn btn-secondary btn-success">Done</button>
        }
        </td>
      </tr>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
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
            <img src={rdvImg} alt="pages jaunes" className="rdvImg"/>
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserExam;