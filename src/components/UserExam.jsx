import React from 'react';

const UserExam = ({
  index,
  age,
  title,
  description
}) => {
  return(
    <>
      <tr className="Container-List">
        <td>{index}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{age} ans</td>
        <td>
          <div className="badge badge-pill badge-info">On Hold</div>
        </td>
        <td>
          <button className="btn-shadow btn btn-secondary btn-focus">Create</button>
        </td>
      </tr>
    </>
  );
};

export default UserExam;