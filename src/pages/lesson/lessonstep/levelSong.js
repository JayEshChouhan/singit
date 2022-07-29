import React, { useState } from 'react'
import styled from 'styled-components';
import CheckBox from '../../../components/ui/checkBox';
import InputRange from '../../../components/ui/inputRange';
import Maininput from '../../../components/ui/mainInput';
import Tags from '../../../components/ui/tags';
import RadioInput from '../../../components/ui/radioInput';
import PopUp from '../../../components/ui/popUp';
import FindLyrics from '../../../components/ui/findLyrics';
import SearchPopup from '../../../components/ui/searchPopup';

const LevelAndSong = (props) => {

  const [lessonList, setLessonlist] = useState([])
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
      <InputRange min={0} max={9} steps={1} label="Age Grade" marginbottom="20px" />

      <SearchPopup marginbottom="20px" />

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
      <FindLyrics btnText=" Finding words from the song lyrics" tagsList={lessonList} setTaglist={setLessonlist} />
      <CheckBox label="Make Public" name="agree" id={"makePublic"} />
      <Maininput marginbottom="20px">
        <input placeholder='Public short description here' className='only-bottom-border border-0' style={{ borderBottom: "0px !important" }} type="text" />
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