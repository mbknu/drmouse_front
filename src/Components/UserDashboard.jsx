import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ButtonAction from './Button/ButtonAction';
import femaleBody from './Images/female-body.png';
import PopoverBoob from './Popovers/PopoverBoob';
import PopoverUterus from './Popovers/PopoverUterus';
import PopoverTeeth from './Popovers/PopoverTeeth';
import PopoverEyes from './Popovers/PopoverEyes';
import PopoverColon from './Popovers/PopoverColon';
import PopoverHeart from './Popovers/PopoverHeart';
import UserExam from './UserExam';


const UserDashboard = () => {

  const [userExam, SetUserExam] = useState([]);

  const getUserExam = () => {
    const url = 'http://localhost:3000/api/exams';

    axios.get(url)
      .then((res) => res.data)
      .then((data) => SetUserExam(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getUserExam();
  }, []);

  return (
    <>
    <header>
      <div className="Header-container">
        <div className="Admin-board col-md-7">
          <div className="Admin-name">
            David Faure
          </div>
          {/* <div className="navbar-brand">
            <img src="" className="Img-admin" alt="Thomas" />
          </div> */}
          <div
            className="Disconnect"
            role="button"
            tabIndex={0}
          >
          </div>
        </div>
      </div>
    </header>
    <section className="ContainerBody">
      <div className="Container-Anatomy">
        <img src={femaleBody} alt="female-body" className="female-image" />
          <OverlayTrigger trigger="hover" placement="bottom" overlay={PopoverBoob}>
          {/* <div className="boobs" /> */}
          <div className="boobs2" />
          </OverlayTrigger>
          <OverlayTrigger trigger="hover" placement="bottom" overlay={PopoverUterus}>
            {/* <div className="uterus" /> */}
            <div className="uterus2" />
          </OverlayTrigger>
          <OverlayTrigger trigger="hover" placement="bottom" overlay={PopoverTeeth}>
            {/* <div className="teeth" /> */}
            <div className="teeth2" />
          </OverlayTrigger>
          <OverlayTrigger trigger="hover" placement="left" overlay={PopoverEyes}>
            {/* <div className="eyes" /> */}
            <div className="eyes2" />
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
          <div className="ActionPanel ContainerButton col-md-9">
            <Link to="/admin/users-add">
              <ButtonAction name="Mon Profil" display="AddUser" />
            </Link>
          </div>
          <div className="ActionPanel ContainerButton col-md-3">
            <Link to="/admin/users-add">
              <ButtonAction name="Modifier" display="AddUser" />
            </Link>
          </div>
        </div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Exam</th>
              <th>Description</th>
              <th>Age</th>
              <th>Status</th>
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
              />
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  </>
  );
};

export default UserDashboard;