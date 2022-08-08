import React, { useState } from 'react'
import styled from 'styled-components'

const Review = () => {

  const [lessonList, setLessonlist] = useState(['Adele’s', 'Squarepusher', 'EIarth Wind', 'Song'])

  return (
    <>
      <P>Please review your work before sending it to students.</P>
      <Maindiv>
        <Span><P1>Multiple Choice</P1></Span>
        <P2>Put the word into a correct form.</P2>
        <Div>Upon release, the ••• garnered critical acclaim, with reviewers comparing it favourably to ••• previous works and praised its lyrics, production and Adele's vocal performance.</Div>
        <p>
          {lessonList.map((ele) => {
            return <Espan><Mspan>{ele}</Mspan></Espan>
          })}
        </p>
      </Maindiv>
      <SecondDiv>

      </SecondDiv>

    </>
  )
}

const Div = styled.div`
margin-bottom:20px;
`

const Espan =styled.span`
padding: 8px 12px;
gap: 8px;
border-radius: 12px;
margin:2px;
border: 1px solid #735FFF;
`;

const Mspan =styled.span`
line-height: 20px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const P = styled.p`
width: 532px;
height: 20px;
font-style: normal;
font-weight: 400;
color: #777580;
`;

const Maindiv = styled.div`
padding: 16px;
gap: 12px;
background: #FFFFFF;
border: 1px solid #735FFF;
box-shadow: 0px 4px 0px #735FFF;
border-radius: 12px;
width: 532px;
height: 232px;
margin-bottom:20px;
`;

const SecondDiv = styled.div`
padding: 16px;
gap: 12px;
background: #FFFFFF;
border: 1px solid #735FFF;
box-shadow: 0px 4px 0px #735FFF;
border-radius: 12px;
width: 532px;
height: 184px;
`;
const Span = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 6px 12px;
gap: 4px;
width: 109px;
height: 28px;
background: #EDEDF0;
border-radius: 27px;
margin-bottom:10px;
`;
const P1 = styled.p`
width: 85px;
height: 16px;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #1F1A48;
`;

const P2 = styled.p`
width: 500px;
height: 20px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #777580;
`

export default Review