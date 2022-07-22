import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import grammerImg from './../../../assets/images/GrammerTest.png';
import unseenImg from './../../../assets/images/Unseen.png';
import fillblanksImg from './../../../assets/images/FillBlanks.png';
import wordpauseImg from './../../../assets/images/WordPause.png';
import vocabularyquizImg from './../../../assets/images/VocabularyQuiz.png';
import speakingquizImg from './../../../assets/images/SpeakingQuiz.png';
import contexttextImg from './../../../assets/images/ContextText.png';
import vector from './../../../assets/images/Vector.png';
import vectors from './../../../assets/images/Vectors.png';
import PopUp from '../../../components/ui/popUp';
import Stepform from '../../../components/stepform/stepForm';
import SelectBase from './grammerteststep/selectBase';
import SelectQuestions from './grammerteststep/selectQuestions';
import ReviewWork from './grammerteststep/reviewWork';

const Assignments = () => {

    const [grammerTest, setGrammerTest] = useState(false)
    const [unseen, setUnseen] = useState(false)
    const [fillblanks, setFillblanks] = useState(false)
    const [wordpause, setWordpause] = useState(false)
    const [vocabularyquiz, setVocabularyquiz] = useState(false)
    const [speakingquiz, setSpeakingquiz] = useState(false)
    const [contexttext, setContexttext] = useState(false)
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [grammerTest, unseen, fillblanks, wordpause, vocabularyquiz, speakingquiz, contexttext])
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
                <AssignmentsDiv onClick={() => setGrammerTest(true)} >
                    <Div>
                        <AssignmentsImg src={grammerImg} />
                        <AssignmentsText>Grammer test</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv onClick={() => setUnseen(true)} >
                    <Div>
                        <AssignmentsImg src={unseenImg} />
                        <AssignmentsText>Unseen</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv onClick={() => setFillblanks(true)} >
                    <Div>
                        <AssignmentsImg src={fillblanksImg} />
                        <AssignmentsText>Fill Blanks</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv onClick={() => setWordpause(true)} >
                    <Div>
                        <AssignmentsImg src={wordpauseImg} />
                        <AssignmentsText>Word-Pause</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv onClick={() => setVocabularyquiz(true)} >
                    <Div>
                        <AssignmentsImg src={vocabularyquizImg} />
                        <AssignmentsText>Vocabulary Quiz</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv onClick={() => setSpeakingquiz(true)} >
                    <Div>
                        <AssignmentsImg src={speakingquizImg} />
                        <AssignmentsText>Speaking Quiz</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
                <AssignmentsDiv onClick={() => setContexttext(true)} >
                    <Div>
                        <AssignmentsImg src={contexttextImg} />
                        <AssignmentsText>Context Text</AssignmentsText>
                    </Div>
                    <AssignmentsCount><img src={vectors} /></AssignmentsCount>
                </AssignmentsDiv>
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={grammerImg} />
                        <AssignmentsText>Grammer test</AssignmentsText>
                    </Div>
                }
                show={grammerTest}
                setShow={setGrammerTest}
                footer={false}
            >
                <Stepform tabs={[<SelectBase /> , <SelectQuestions />, <ReviewWork /> ]} stepPages={['Select the base text for question', 'Select the questions you want to use or create your own', 'Review your work']} />
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={unseenImg} />
                        <AssignmentsText>Unseen</AssignmentsText>
                    </Div>
                }
                show={unseen}
                setShow={setUnseen}
                footer={false}
            >
                sdsdf
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={fillblanksImg} />
                        <AssignmentsText>Fill Blanks</AssignmentsText>
                    </Div>
                }
                show={fillblanks}
                setShow={setFillblanks}
                footer={false}
            >
                sdsdf
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={wordpauseImg} />
                        <AssignmentsText>Word-Pause</AssignmentsText>
                    </Div>
                }
                show={wordpause}
                setShow={setWordpause}
                footer={false}
            >
                sdsdf
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={vocabularyquizImg} />
                        <AssignmentsText>Vocabulary Quiz</AssignmentsText>
                    </Div>
                }
                show={vocabularyquiz}
                setShow={setVocabularyquiz}
                footer={false}
            >
                sdsdf
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={speakingquizImg} />
                        <AssignmentsText>Speaking Quiz</AssignmentsText>
                    </Div>
                }
                show={speakingquiz}
                setShow={setSpeakingquiz}
                footer={false}
            >
                sdsdf
            </PopUp>
            <PopUp
                heading={
                    <Div>
                        <AssignmentsImg src={contexttextImg} />
                        <AssignmentsText>Context Text</AssignmentsText>
                    </Div>
                }
                show={contexttext}
                setShow={setContexttext}
                footer={false}
            >
                sdsdf
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
&:last-child{
    margin-bottom: 0;
}
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