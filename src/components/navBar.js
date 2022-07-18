import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png';
import Image from '../assets/images/img.png';
import icon from '../assets/images/icon2.png';

const NavBar = () => {

  return (
    <Navstyle>
      <div><img src={icon} /></div>
      <div><img src={Logo} /></div>
      <div><img src={Image} /></div>
    </Navstyle>
  )
}

const Navstyle = styled.div`
background: #FFFFFF;
height: 40px;
padding: 12px 20px 12px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export default NavBar;


