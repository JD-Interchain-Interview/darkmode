import React from 'react';
import { Logo_Interchain } from '../../assets/Logo_Interchain';

const Navbar = (props) => {

  const fill = props.theme === 'dark' ? '#fff' : '#000';
  
  return (
    <div align='center'>
      <br/>
      <div onMouseEnter={props.toggleTheme}>
        <Logo_Interchain width='40' height='40' fill={fill} />
      </div>
      <br/>
      <hr/>
    </div>
  );
}

export default Navbar; 