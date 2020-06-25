import React from 'react';
import '../../App.css';

const ButtonAction = (props) => {
  const { name, display } = props;
  return (
    <button className={`ButtonAction ${display}`} type="submit">
      {name}
    </button>
  );
};

export default ButtonAction;
