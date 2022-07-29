import React, { useState } from 'react'
import styled from 'styled-components';
import Tags from '../../../../components/ui/tags';
import FindLyrics from '../../../../components/ui/findLyrics';
import Maininput from '../../../../components/ui/mainInput';

const SelectBase = () => {
  const [lessonList, setLessonlist] = useState(["hymn", "for", "the", "weekend"])
  const [sentenceBox , setSentenceBox] = useState(['That man there',"I hope he is here now|","Give him a chance to improve"])
  const deleteHandler = (id) => {

    setSentenceBox((oldInput) => {
      return oldInput.filter((arrElement, index) => {
        return index !== id;
      });
    });
   };

   const addSentence = (e) => {
  
    if (e.key === 'Enter') {
      if (e.target.value !== "") {
        setSentenceBox([...sentenceBox, e.target.value]);
        e.target.value = "";
      } 
    }
  }


  return (
    <div>
        <Text> Our grammar test is generated from the sentences in this list, go over the sentences - make any adjustments you want and press next.</Text>
        <BoldText>These sentences are based on the words:</BoldText>
        <Tags tagsList={lessonList} setTaglist={setLessonlist} marginbottom="14px" removeBtn />
        <FindLyrics btnText=" Finding words from the song lyrics" tagsList={lessonList} setTaglist={setLessonlist} />
        <BorderTop/>
        <Maininput marginbottom="20px" >
          <input type="text" placeholder='+ Add sentence' onKeyDown={(e) => addSentence(e)} />
        </Maininput>

        {sentenceBox.map((ele,index)=>{
          return <ContainerBox heading={ele} index={index} onClick={deleteHandler} />
        })}
    </div>
  )
}

const Text = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
`;

const BoldText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #1F1A48;
flex: none;
order: 0;
flex-grow: 0;
`;

const BoxContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 16px;
gap: 12px;
background: #FFFFFF;
border: 1px solid #CCCBDF;
box-shadow: 0px 4px 0px #CCCBDF;
border-radius: 12px;
margin-bottom: 25px;
`;

const Heading = styled.h1`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`;

const BoxFooter = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 16px;
flex: none;
order: 1;
flex-grow: 0;

`;

const IconDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;
`;


const FooterIcon = styled.span`

`;

const FooterText = styled.span`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-align: center;
font-feature-settings: 'liga' off;
color: #777580;
`;

const BorderTop = styled.div`
border-top: 1px solid #CCCBDF;
padding-top: 27px;
`;


const ContainerBox = (props) => {

  return (
          <BoxContainer>
            <Heading>{props.heading}</Heading>
            <BoxFooter>
              <IconDiv>
              <FooterIcon> 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_860_15837)">
                  <path d="M15.333 2.66602V6.66602H11.333" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M0.666992 13.334V9.33398H4.66699" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.34033 6.00038C2.67844 5.0449 3.25308 4.19064 4.01064 3.51732C4.76819 2.844 5.68397 2.37355 6.67252 2.14988C7.66106 1.92621 8.69016 1.9566 9.66379 2.23823C10.6374 2.51985 11.5238 3.04352 12.2403 3.76038L15.3337 6.66704M0.666992 9.33371L3.76033 12.2404C4.47682 12.9572 5.36324 13.4809 6.33686 13.7625C7.31049 14.0441 8.33959 14.0745 9.32813 13.8509C10.3167 13.6272 11.2325 13.1568 11.99 12.4834C12.7476 11.8101 13.3222 10.9559 13.6603 10.0004" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_860_15837">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

              </FooterIcon>
              <FooterText> Regenerate</FooterText>
              </IconDiv>
              <IconDiv>
              <FooterIcon> 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4H14" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.6663 4.00065V13.334C12.6663 13.6876 12.5259 14.0267 12.2758 14.2768C12.0258 14.5268 11.6866 14.6673 11.333 14.6673H4.66634C4.31272 14.6673 3.97358 14.5268 3.72353 14.2768C3.47348 14.0267 3.33301 13.6876 3.33301 13.334V4.00065M5.33301 4.00065V2.66732C5.33301 2.3137 5.47348 1.97456 5.72353 1.72451C5.97358 1.47446 6.31272 1.33398 6.66634 1.33398H9.33301C9.68663 1.33398 10.0258 1.47446 10.2758 1.72451C10.5259 1.97456 10.6663 2.3137 10.6663 2.66732V4.00065" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.66699 7.33398V11.334" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33301 7.33398V11.334" stroke="#7C7896" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </FooterIcon>
              <FooterText onClick={() => { props.onClick(props.index); }}> Delete</FooterText>
              </IconDiv>
            </BoxFooter>
            </BoxContainer> 
  );

}

export default SelectBase;