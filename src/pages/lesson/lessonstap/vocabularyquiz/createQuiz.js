import React,{useState} from 'react'
import styled from 'styled-components';
import quizicon from '../../../../assets/icon/quizIcon.png'
import Tags from '../../../../components/ui/tags';
import Select from 'react-select';

const options = [
  { value: 'Multiple choice', label: 'Multiple choice' },
  { value: 'True or False', label: 'True or False' },
]

const CreateQuiz = () => {

    const [lessonList, setLessonlist] = useState(['There', 'hope', 'chance', 'Around'])
    const [selectedClinet, setSelectedClinet] = useState("Multiple choice");

    const handleChangeSelect = (event) => {
      setSelectedClinet(event.value)
    }

  return <div>
    <H1>Create Quiz</H1>
    <P>Enter a word and auto generate answer to create a question for your students.</P>
   
    <Maindiv>
     <Imgspan><img src={quizicon} alt='iconquIz'/></Imgspan>
     <Paraspan>You can edit the instruction and sentence inside the question card by click it</Paraspan>
    </Maindiv>
   
    <Idiv>
        <Tspan><Tags tagsList={lessonList} setTaglist={setLessonlist} removeBtn /></Tspan> 
         <P1>+ Finding words from the song lyrics</P1>
    </Idiv>

    <Optdiv>
      <Optchkdiv>
      <Selctspan><Select options={options} onChange={handleChangeSelect} /></Selctspan>
      </Optchkdiv>
    </Optdiv>
  </div>  
}

const H1 = styled.h1`
font-weight: 600;
font-size: 20px;
line-height: 28px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const P = styled.p` 
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const Maindiv=styled.div`
align-items: center;
padding: 8px 12px;
gap: 8px;
background: #1F1A48;
border-radius: 12px;
`;

const Imgspan =styled.span`
`;

const Paraspan=styled.span`
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #FFFFFF;
margin:12px 12px 14px 10px;
`;

const Idiv=styled.div`
gap: 16px;
margin-top:20px;
`;

const Tspan =styled.div`
gap:12px;
`;

const P1 = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #735FFF;
margin-top:16px;
margin-bottom:20px;
`;

const Optdiv=styled.div`
padding: 16px;
gap: 12px;
background: #FFFFFF;
border: 1px solid #735FFF;
box-shadow: 0px 4px 0px #735FFF;
border-radius: 12px;
`;

const Optchkdiv=styled.div`
gap: 24px;
`;

const Selctspan=styled.span`

`;

export default CreateQuiz




