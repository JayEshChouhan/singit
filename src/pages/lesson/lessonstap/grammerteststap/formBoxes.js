import ReviewWorksvg from '../../../../assets/svgImage/reviewWorksvg';
import styled from 'styled-components';

const FormBoxes = (props) => {
    return (
      <Form>
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
             <ReviewWorksvg/>
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
font-feature-settings: 'liga' off;
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

export default FormBoxes;

