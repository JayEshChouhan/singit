import React from 'react'
import styled from 'styled-components';
import Banner from '../components/banners/banner';
import NavBar from '../components/navBar';
import Stepform from '../components/stepform/stepForm';

const Lesson = () => {
  return (
    <div>
      <NavBar />
      <Banner heading="Create a lesson" />
      <MainDiv>
        <Stepform />
      </MainDiv>
    </div>
  )
}
export default Lesson;

const MainDiv = styled.div`
margin-top:  -20px;
background-color: #ffffff;
border-radius: 12px 12px 0 0 ;
padding: 20px;
`