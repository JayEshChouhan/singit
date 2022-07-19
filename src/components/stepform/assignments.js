import React, { useState } from 'react'
import styled from 'styled-components';
import grammerImg from '../../assets/images/GrammerTest.png';
import unseen from '../../assets/images/Unseen.png';
import fillblanks from '../../assets/images/FillBlanks.png';
import wordpause from '../../assets/images/WordPause.png';
import vocabularyquiz from '../../assets/images/VocabularyQuiz.png';
import speakingquiz from '../../assets/images/SpeakingQuiz.png';
import contexttext from '../../assets/images/ContextText.png';
import vector from '../../assets/images/Vector.png';
import vectors from '../../assets/images/Vectors.png';
import PopUp from './popUp';

const Assignments = () => {

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    return (
        <>
            <BtnAssignment onClick={handleShow}>
                + Add assignment
                <BtnAssignmentsImg src={vector} />
            </BtnAssignment>
            <PopUp heading="Select assignment type" show={show} setShow={setShow} footer={false}>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={grammerImg} />
                        <AssignmentsText>Grammer test</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={unseen} />
                        <AssignmentsText>Unseen</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={fillblanks} />
                        <AssignmentsText>Fill Blanks</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={wordpause} />
                        <AssignmentsText>Word-Pause</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={vocabularyquiz} />
                        <AssignmentsText>Vocabulary Quiz</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={speakingquiz} />
                        <AssignmentsText>Speaking Quiz</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv>
                    <Div>
                        <AssignmentsImg src={contexttext} />
                        <AssignmentsText>Context Text</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
            </PopUp>
        </>
    )
}

const BtnAssignment = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 12px 20px;
gap: 12px;
background: #F5F5F7;
border-radius: 12px;
margin-bottom: 16px;
color:#735FFF;
height:40px;
`;

const BtnAssignmentsImg = styled.img`
width: 9px;
float:right;
`;

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

