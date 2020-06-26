import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonDeconnexion from './ButtonDeconnexion';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import femaleBody from './Images/female-body.png';
import PopoverBoob from './Popovers/PopoverBoob';
import PopoverUterus from './Popovers/PopoverUterus';
import PopoverTeeth from './Popovers/PopoverTeeth';
import PopoverEyes from './Popovers/PopoverEyes';
import PopoverColon from './Popovers/PopoverColon';
import PopoverHeart from './Popovers/PopoverHeart';
import UserExam from './UserExam';
import '../App.css';

import { connect } from 'react-redux';
import { loadUser } from '../actions/generalActions';
import Profil from './Profil';

const UserDashboard = ({loadUser, email, password, patient, isAuthenticated}) => {

      const [userExam, SetUserExam] = useState([]);

    useEffect(() => {
      getUserExam();
      loadUser(email, password);
    }, [loadUser]);

    let clientInfo
    if(patient) {
      clientInfo = patient.authdata.result[0];
    }

    console.log('patient ', patient)
  const getUserExam = () => {
    const url = 'http://localhost:3000/api/users/1/exams';

    axios.get(url)
      .then((res) => res.data)
      .then((data) => SetUserExam(data.data))
      .catch((error) => console.log(error));
  }
  
  return (
    <>
      {patient ? 
      <>
        <header>
          <div className="Header-container">
            <div className="Admin-board col-md-10">
                <div className="Admin-name">
                  {clientInfo.firstname.toUpperCase()} {clientInfo.lastname.toUpperCase()}
                </div>
              <ButtonDeconnexion />
            </div>
          </div>
        </header>
        <section className="ContainerBody">
          <div className="Container-Anatomy">
            <img src={femaleBody} alt="female-body" className="female-image" />
              <OverlayTrigger trigger="hover" placement="left" overlay={PopoverBoob}>
              <div className="boobs" />
              </OverlayTrigger>
              <OverlayTrigger trigger="hover" placement="bottom" overlay={PopoverUterus}>
                <div className="uterus" />
              </OverlayTrigger>
              <OverlayTrigger trigger="hover" placement="bottom" overlay={PopoverTeeth}>
                <div className="teeth" />
              </OverlayTrigger>
              <OverlayTrigger trigger="hover" placement="left" overlay={PopoverEyes}>
                <div className="eyes" />
              </OverlayTrigger>
              <OverlayTrigger trigger="hover" placement="right" overlay={PopoverColon}>
                <div className="colon" />
              </OverlayTrigger>
              <OverlayTrigger trigger="hover" placement="right" overlay={PopoverHeart}>
                <div className="heart" />
              </OverlayTrigger>
          </div>
          <div className="Container-Table">
            <div className="Panel">
              <div className="ActionPanel ContainerButton col-md-11">
                  <Profil patient={clientInfo}/>
              </div>
            </div>
            <Table responsive="sm" hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Exam</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Age</th>
                  <th className="ActionIconHead">
                    Appointment
                  </th>
                </tr>
              </thead>
              <tbody>
                {userExam.map((element) => (
                  <UserExam
                    key={element.id}
                    index={element.id}
                    age={element.age}
                    title={element.title}
                    description={element.description}
                    female={element.female}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </> : 
      <p>loading</p>}
  </>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
      patient: state.auth.user,
      isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {loadUser})(UserDashboard);