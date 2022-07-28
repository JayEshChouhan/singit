import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import Maininput from '../../../components/ui/mainInput';

export const MultiStepContext = createContext();
const Generalinfo = (props) => {

  const [LessonTitle, setLessonTitle] = useState("");
  const [lessonDescription, setLessonDescription] = useState('')
  const [textAreaCount, setTextAreaCount] = useState(300);
  const [MainTopic, setMainTopic] = useState("");

  const recalculate = e => {

    setLessonDescription(e.target.value)
    setTextAreaCount(300 - e.target.value.length);

  };

  return (
    <div>
      <MultiStepContext.Provider value={{ LessonTitle: LessonTitle, lessonDescription: lessonDescription,MainTopic:MainTopic }}>
        <Maininput marginbottom="20px" label="Lesson’s Title">
          <input type="text" name={"lesson-title"} onChange={(e) => setLessonTitle(e.target.value)} value={LessonTitle} />
        </Maininput>

        <Maininput marginbottom="20px" label="Description">
          <CharLeft>{textAreaCount} char left</CharLeft>
          <textarea type="text" onChange={recalculate} maxLength={300} />
        </Maininput>

        <Maininput marginbottom="20px" label="Main Topic">
          <input type="text" name={"lesson-main-topic"} onChange={(e) => setMainTopic(e.target.value)} value={MainTopic} />
        </Maininput>
      </MultiStepContext.Provider>
    </div>
  )
}
const CharLeft = styled.div`
position: absolute;
top: 0;
right: 0;
font-weight: 400;                
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #A3A1B3;
flex: none;
order: 1;
flex-grow: 0;
`;

export default Generalinfo;