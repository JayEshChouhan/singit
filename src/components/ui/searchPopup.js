import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CheckBox from './checkBox';
import Maininput from './mainInput'
import PopUp from './popUp'
import SongView from './songView';
import Tags from './tags'

const SearchPopup = (props) => {
  const [searchPopup, setSearchPopup] = useState(false);
  const [filterPopUp,setFilterPopUp] = useState(false);
  const [songTag, setSongTag] = useState(["Emotions: 😍", "⚠️ Coarse Language", "📝 Politic"])

  useEffect(()=>{
      if(searchPopup === filterPopUp){
        setSearchPopup(false)
      }
  },[filterPopUp])
  return (
    <>
      <InputBtn marginbottom={props.marginbottom} onClick={() => setSearchPopup(true)}>
        <InputIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5553 17.7143C14.2372 17.7143 17.222 14.6442 17.222 10.8571C17.222 7.07005 14.2372 4 10.5553 4C6.87344 4 3.88867 7.07005 3.88867 10.8571C3.88867 14.6442 6.87344 17.7143 10.5553 17.7143Z" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.4446 20L15.5557 16" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </InputIcon>
        Song. lyric, artist
        <FilterIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6083 4.64573C21.1579 3.99575 20.6959 3 19.8447 3H4.1553C3.30408 3 2.84207 3.99575 3.39173 4.64573L9.76357 12.1804C9.91623 12.3609 10 12.5897 10 12.8261V18.382C10 18.7607 10.214 19.107 10.5528 19.2764L12.5528 20.2764C13.2177 20.6088 14 20.1253 14 19.382V12.8261C14 12.5897 14.0838 12.3609 14.2364 12.1804L20.6083 4.64573Z" stroke="#A3A1B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </FilterIcon>
      </InputBtn>
      <PopUp heading={"Search"} show={searchPopup} setShow={setSearchPopup}>
        <Maininput marginbottom="22px">
          <PositionRelative>
            <InputIcon left="0px">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5553 17.7143C14.2372 17.7143 17.222 14.6442 17.222 10.8571C17.222 7.07005 14.2372 4 10.5553 4C6.87344 4 3.88867 7.07005 3.88867 10.8571C3.88867 14.6442 6.87344 17.7143 10.5553 17.7143Z" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.4446 20L15.5557 16" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </InputIcon>
            <input type="search" className="only-bottom-border search" placeholder='Song, lyric, artist' />
            <FilterIcon right="0px" onClick={()=> setFilterPopUp(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6083 4.64573C21.1579 3.99575 20.6959 3 19.8447 3H4.1553C3.30408 3 2.84207 3.99575 3.39173 4.64573L9.76357 12.1804C9.91623 12.3609 10 12.5897 10 12.8261V18.382C10 18.7607 10.214 19.107 10.5528 19.2764L12.5528 20.2764C13.2177 20.6088 14 20.1253 14 19.382V12.8261C14 12.5897 14.0838 12.3609 14.2364 12.1804L20.6083 4.64573Z" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </FilterIcon>
          </PositionRelative>
        </Maininput>
        <SongList marginbottom="22px" heading="Recommended Song for" label="2nd Grade" load={true}/>
        <SongList heading="All Song"/>
      </PopUp>
      <PopUp heading={"Filter"} show={filterPopUp} onHide={setSearchPopup} setShow={setFilterPopUp}>
        <div>
          <h1>Genres</h1>
          <div>
            <CheckBox label="All genres" name="genres" id={"all_genres"} />
          </div>
          <Row>
            <Col sm={6}><CheckBox label="Classic" name="classic" id={"classic"} /></Col>
            <Col sm={6}><CheckBox label="Jazz" name="jazz" id={"jazz"} /></Col>
            <Col sm={6}><CheckBox label="Pop" name="pop" id={"pop"} /></Col>
            <Col sm={6}><CheckBox label="Country" name="country" id={"country"} /></Col>
            <Col sm={6}><CheckBox label="Techno" name="techno" id={"techno"} /></Col>
            <Col sm={6}><CheckBox label="R&B" name="r&b" id={"r&b"} /></Col>
            <Col sm={6}><CheckBox label="Reggae" name="reggae" id={"reggae"} /></Col>
            <Col sm={6}><CheckBox label="Rap" name="rap" id={"rap"} /></Col>
            <Col sm={6}><CheckBox label="Death Metal" name="death_metal" id={"death_metal"} /></Col>
            <Col sm={6}><CheckBox label="Blues" name="Blues" id={"blues"} /></Col>
          </Row>
        </div>
      </PopUp>
    </>
  )
}

export default SearchPopup;

const PositionRelative = styled.div`
position: relative;
`;

const InputBtn = styled.div`
${(props) => props.marginbottom && "margin-bottom: " + props.marginbottom + ";"}
height: 48px;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 48px;
background: #F5F5F7;
border-radius: 12px;
`
const InputIcon = styled.span`
position: absolute;
bottom: 50%;
left: ${props => props.left || "16px"};
transform: translateY(50%);
`;
const FilterIcon = styled.div`
position: absolute;
bottom: 50%;
right: 16px;
right: ${props => props.right || "16px"};
transform: translateY(50%);
cursor: pointer;
`


const SongList = (props) => {
  return (
    <MainListDiv marginbottom={props.marginbottom}>
      <HeadingDiv>
        <H3>{props.heading}</H3>
        {props.label && <Label>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41512 11.5924C7.02615 11.9742 6.40307 11.9742 6.0141 11.5924L3.2487 8.87788C2.9292 8.56425 2.9292 8.04949 3.2487 7.73587C3.55962 7.43067 4.05756 7.43033 4.3689 7.73508L6.71461 10.0312L12.2948 4.55371C12.6077 4.24657 13.1092 4.24745 13.421 4.5557C13.7395 4.87057 13.7386 5.38524 13.419 5.69899L7.41512 11.5924Z" fill="#41C977" />
          </svg>
          {props.label}
        </Label>}
      </HeadingDiv>
      <Row>
        <Col sm={6}>
          <SongView />
        </Col>
        <Col sm={6}>
          <SongView />
        </Col>
        <Col sm={6}>
          <SongView />
        </Col>
        <Col sm={6}>
          <SongView />
        </Col>
      </Row>
      {props.load&&<LoadBtn>
        Load More
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="#735FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </LoadBtn>}
    </MainListDiv>
  )
} 

const MainListDiv = styled.div`
margin-bottom: ${props=> props.marginbottom || '0px;'}
`

const HeadingDiv = styled.div`
display: flex;
align-items: center;
column-gap: 8px;
`

const H3 = styled.h3`
font-weight: bold;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin:0;
`
const Label = styled.label`
width: fit-content;
background: #ECFAF1;
border-radius: 27px;
padding: 6px 12px;
display: flex;
justify-content: center;
align-items: center;
column-gap:4px;
font-weight: 400;
font-size: 12px;
line-height: 12px;
font-feature-settings: 'liga' off;
color: #1F1A48;

`
const LoadBtn = styled.button`
background: #EDEDF0;
border-radius: 100px;
width:100%;
outline: none;
border:none;
padding: 7.25px 0;
font-weight: bold;
font-size: 14px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #735FFF;
display:flex;
column-gap: 8px;
justify-content: center;
`