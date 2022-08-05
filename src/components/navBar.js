import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png';
import Image from '../assets/images/Profile.png';
import icon from '../assets/images/icon2.png';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import helpIcon from '../assets/images/helpicon.png';
import arrow from '../assets/images/arrow.png';

const NavBar = () => {

  const mobileVersion = useMediaQuery({
    query: '(max-width: 991px)'
  })
  return (
    <Navstyle>
      <Container fluid={mobileVersion}>
        <MainNav>
          {mobileVersion && <div><img src={icon} /></div>}
          <div><img src={Logo} /></div>
          {mobileVersion ?
            <div><img src={Image} /></div>
            :
            <UserMain>
              <UserHelp><img src={helpIcon} /></UserHelp>
              <UserDetail>
                <div><img src={Image} /></div>
                <div>
                  <UserHeading>Jenny Ruby</UserHeading>
                  <UserAnchor href='#'>Logout <div><img src={arrow} /></div></UserAnchor>
                </div>
              </UserDetail>
            </UserMain>
          }
        </MainNav>
      </Container>
    </Navstyle>
  )
}

const Navstyle = styled.div`
background: #FFFFFF;
height: 64px;
padding: 12px 8px;
`;

const MainNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const UserMain = styled.div`
display: flex;
align-items: center;
column-gap: 20px;
`;

const UserHelp = styled.div`
padding: 3px 22px;
border-right: 1px solid #cccccc;
`;

const UserDetail = styled.div`
display: flex;
align-items: center;
column-gap: 12px;
`;

const UserHeading = styled.h6`
margin: 0;
font-weight: 400;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const UserAnchor = styled.a`
display: flex;
align-items: center;
column-gap: 6px;
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #A3A1B3;
`;

export default NavBar;


