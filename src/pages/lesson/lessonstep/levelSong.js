import React, { useState } from 'react'
import styled from 'styled-components';
import CheckBox from '../../../components/ui/checkBox';
import InputRange from '../../../components/ui/inputRange';
import Maininput from '../../../components/ui/mainInput';
import Tags from '../../../components/ui/tags';
import RadioInput from '../../../components/ui/radioInput';
import PopUp from '../../../components/ui/popUp';
import FindLyrics from '../../../components/ui/findLyrics';

const LevelAndSong = (props) => {

    const [lessonList, setLessonlist] = useState([])
    const [songTag, setSongTag] = useState(["Emotions: 😍", "⚠️ Coarse Language", "📝 Politic"])
    const addWord = (e) => {
  
      if (e.key === 'Enter') {
        if (e.target.value === "") {
          e.preventDefault()
  
        } else {
          setLessonlist([...lessonList, e.target.value]);
          e.target.value = "";
        }
      }
    }
  
    return (
      <div>
        <InputRange min={0} max={9} steps={1} label="Age Grade" />
        <Maininput marginbottom="20px" label="Song">
          <PositionRelative>
            <InputIcon style={{ height: '20px' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6083 2.64573C19.1579 1.99575 18.6959 1 17.8447 1H2.1553C1.30408 1 0.842074 1.99575 1.39173 2.64573L7.76357 10.1804C7.91623 10.3609 8 10.5897 8 10.8261V16.382C8 16.7607 8.214 17.107 8.55279 17.2764L10.5528 18.2764C11.2177 18.6088 12 18.1253 12 17.382V10.8261C12 10.5897 12.0838 10.3609 12.2364 10.1804L18.6083 2.64573Z" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </InputIcon>
            <input placeholder='Song. lyric, artist' type="search" className="inputSearch" />
          </PositionRelative>
          <Tags tagsList={songTag} />
        </Maininput>
        <RadioInput marginbottom="20px" name="Difficulty" label="Difficulty" radios={['Easy', 'Regular', 'Hard', 'Expert']} />
  
        <Maininput marginbottom="20px" label="Duration">
          <PositionRelative>
            <InputIcon>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#7C7896" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </InputIcon>
  
            <select name='SelectDuration' >
              <option selected={true} value={"0"} disabled>Select Duration</option>
              <option value={"5"} >5 minutes</option>
              <option value={"10"} >10 minutes</option>
              <option value={"15"} >15 minutes</option>
            </select>
          </PositionRelative>
        </Maininput>
        <Maininput marginbottom="20px" label="Main Topic">
          <input placeholder='Add words to the lesson' className='only-bottom-border' type="text" onKeyDown={(e) => addWord(e)} />
          <Tags tagsList={lessonList} setTaglist={setLessonlist} removeBtn />
        </Maininput>
        <FindLyrics btnText=" Finding words from the song lyrics"/>
        <CheckBox label="Make Public" name="agree" id={"makePublic"}>
        </CheckBox>
        <Maininput marginbottom="20px">
          <input placeholder='Public short description here' className='only-bottom-border' type="text" />
        </Maininput>
      </div>
    )
  }

const InputIcon = styled.span`
position: absolute;
bottom: 50%;
right: 22px;
transform: translateY(50%);
`;


const PositionRelative = styled.div`
position: relative;
`;

const Checkboxcolor = styled.div`
background: #41C977;
`;

export default LevelAndSong;