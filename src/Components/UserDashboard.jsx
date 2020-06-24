import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ButtonAction from './Button/ButtonAction';
import femaleBody from '../female-body.png';
import PopoverBoob from './Popovers/PopoverBoob';
import PopoverUterus from './Popovers/PopoverUterus';

const UserDashboard = () => {
  return (
    <>
    <header>
      <div className="Header-container">
        <div className="Admin-brand col-md-3">
          <h1>Logo de Mathilde</h1>
        </div>
        <div className="Admin-board col-md-7">
          <span className="fas fa-search" />
          <span className="fas fa-bell" />
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
            <span className="fas fa-power-off" />
          </div>
        </div>
      </div>
    </header>
    <section className="ContainerBody">
      <div className="Container-Anatomy">
        <img src={femaleBody} alt="female-body" className="female-image" />
        <OverlayTrigger trigger="hover" placement="right" overlay={PopoverBoob}>
        <div className="boobs" />
        </OverlayTrigger>
        <OverlayTrigger trigger="hover" placement="bottom" overlay={PopoverUterus}>
        <div className="uterus" />
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
              <th colSpan="2">Exam</th>
              <th>Description</th>
              <th>Age</th>
              <th colSpan="2" className="ActionIconHead">
                Appointment
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {UserList.map((element) => (
              <UsersList
                key={element.id}
                index={element.id}
                firstname={element.firstname}
                lastname={element.lastname}
                email={element.email}
                birthday={element.birthday}
                companies={element.companies_id}
                job={element.job}
                photo={element.photo}
                removeUser={removeUser}
              />
            ))} */}
          </tbody>
        </Table>
      </div>
    </section>
  </>
  );
};

export default UserDashboard;