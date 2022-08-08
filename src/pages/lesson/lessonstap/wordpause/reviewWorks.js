import React, { useState } from 'react'
import styled from 'styled-components';

const ReviewWorks = () => {

  const [lessonList, setLessonlist, removeBtn] = useState(['There', 'hope', 'chance', 'Around'])
  return <div>
    <P>You just created a grammar assignments, Please review your work before sending it to students.</P>
    <MainDiv>
      {lessonList.map((list, index) => {
        return <Spans>{list}</Spans>
      })}
    </MainDiv>
  </div>
}

const P = styled.p` 
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const Spans = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #1F1A48;
align-items: center;
padding: 8px 12px;
border: 1px solid #CCCBDF;
border-radius: 12px;
cursor:pointer;
`;

const MainDiv = styled.div`
display: flex;
column-gap: 12px;
margin-bottom:20px;
`;

export default ReviewWorks
