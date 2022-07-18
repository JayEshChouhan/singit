import React from 'react'
import styled from 'styled-components';
import grammerImg from '../../assets/images/GrammerTest.png';
import unseen from '../../assets/images/Unseen.png';
import fillblanks from '../../assets/images/FillBlanks.png';
import wordpause from '../../assets/images/WordPause.png';
import vocabularyquiz from '../../assets/images/VocabularyQuiz.png';
import speakingquiz from '../../assets/images/SpeakingQuiz.png';
import contexttext from '../../assets/images/ContextText.png';

const Assignments = () => {

    return (
        <>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={grammerImg} />
                    <AssignmentsText>Grammer test</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={unseen} />
                    <AssignmentsText>Unseen</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={fillblanks} />
                    <AssignmentsText>Fill Blanks</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={wordpause} />
                    <AssignmentsText>Word-Pause</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={vocabularyquiz} />
                    <AssignmentsText>Vocabulary Quiz</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={speakingquiz} />
                    <AssignmentsText>Speaking Quiz</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
            <AssignmentsDiv>
                <Div>
                    <AssignmentsImg src={contexttext} />
                    <AssignmentsText>Context Text</AssignmentsText>
                </Div>
                <AssignmentsCount>0</AssignmentsCount>
            </AssignmentsDiv>
        </>
    )
}


const Div = styled.div`
display: flex;
gap: 12px;
flex-direction: row;
align-items: center;
`;

const AssignmentsDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 12px 20px;
gap: 12px;
background: #FFFFFF;
box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.04);
border-radius: 12px;
margin-bottom: 16px;
`;

const AssignmentsImg = styled.img`
width: 32px;
`;

const AssignmentsText = styled.h6`
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin: 0;
`;

const AssignmentsCount = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #CCCBDF;
`;


export default Assignments;

