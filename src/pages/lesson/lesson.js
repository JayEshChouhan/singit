import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Banner from '../../components/banners/banner';
import NavBar from '../../components/navBar';
import Stepform from '../../components/stepform/stepForm';
import Assignments from './lessonstep/assignment';
import Generalinfo from './lessonstep/generalInfo';
import LevelAndSong from './lessonstep/levelSong';

const Lesson = () => {
  const mobileVersion = useMediaQuery({
    query: '(max-width: 991px)'
  })
  return (
    <div>
      <NavBar />
      <Banner heading="Create a lesson" />
      <MainDiv mobile={mobileVersion}>
        <Stepform tabs={[<Generalinfo />, <LevelAndSong />, <Assignments />]} stepPages={['General Information', 'level and Song', 'Assignments']} />
      </MainDiv>
    </div>
  )
}

const MainDiv = styled.div`
max-width: 580px;
margin: 0 auto;
${(props) => props.mobile ? "margin-top:  -12px;" : "margin-top:  -30px;"}
background-color: #ffffff;
border-radius: 12px 12px 0 0 ;
padding: 20px;
`;

export default Lesson;


