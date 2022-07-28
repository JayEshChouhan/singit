import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import styled from 'styled-components';

const ReviewWork = () => {
  return (
    <div>
      <Text>Please review your work before sending it to students.</Text>
      {listofQuestion.map((ele,index)=>{
          return <FormBoxes data={ele}/>
        })}      

    </div>
  )
}

const Text = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;

`;

const Form = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 12px;
background: #FFFFFF;
border: 1px solid #735FFF;
box-shadow: 0px 4px 0px #735FFF;
border-radius: 12px;
margin-bottom: 20px;

`;

const FormBtn = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;

`;
const Btn = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 6px 12px;
gap: 8px;
background: #EDEDF0;
border-radius: 27px;
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;


const Header = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

font-feature-settings: 'liga' off;

/* Neutral/Dark Grey */

color: #777580;

`;

const LowerText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const CorrectForm = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
`;

const FooterBtn = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;
`;

const MainBtn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 12px;
gap: 8px;
background: #F9F9FF;
border: 1px solid #735FFF;
border-radius: 12px;
`;

const LowerBtn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 12px;
gap: 8px;
width: 53px;
height: 36px;
border: 1px solid #CCCBDF;
border-radius: 12px;

`;
const Icon = styled.span`

`;
const BtnText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const FormBoxes = (props) => {
  return (
    <Form>
      {console.log(props.data)}
    <FormBtn><Btn>{props.data.type}</Btn></FormBtn>
    <CorrectForm>
    <Header>{props.data.describe}</Header>
      <LowerText>{props.data.question}</LowerText>
    </CorrectForm>
    <FooterBtn>
      {props.data.options.map((option)=>{
        if(props.data.selectedOption.includes(option)){
          return  <MainBtn>
          <Icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7719 17.7324C10.383 18.1142 9.75989 18.1142 9.37092 17.7324L4.87257 13.3168C4.39331 12.8464 4.39331 12.0742 4.87257 11.6038C5.33894 11.146 6.08586 11.1455 6.55287 11.6026L10.0714 15.0468L18.4417 6.83056C18.9111 6.36985 19.6633 6.37118 20.1311 6.83355C20.6088 7.30586 20.6075 8.07786 20.128 8.54848L10.7719 17.7324Z" fill="#735FFF"/>
            </svg>
          </Icon>
          <BtnText>{option}</BtnText>
        </MainBtn>
        }
          return <LowerBtn><BtnText>{option}</BtnText></LowerBtn>
      })}
     
      
    </FooterBtn>
  </Form>

  );
}

export default ReviewWork;





const listofQuestion = [
  {
    type : "Correct Form",
    describe: "Put the word into a correct form.",
    question: "That &replace& there.",
    options: ['Man' , 'men'],
    selectedOption: ["Man"]
  },
  {
    type : "Correct Form",
    describe: "Put the word into a correct form.",
    question: "That &replace& there.",
    options: ['Man' , 'men'],
    selectedOption: ["Man"]
  }
]

