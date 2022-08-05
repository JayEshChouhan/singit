import FooterIconsvg from '../../../../assets/svgImage/footerIconsvg';
import FooterIcontwosvg from '../../../../assets/svgImage/footerIcontwosvg';
import styled from 'styled-components';

const ContainerBox = (props) => {

  return (
    <BoxContainer>
      <Heading>{props.heading}</Heading>
      <BoxFooter>
        <IconDiv>
          <FooterIcon>
            <FooterIconsvg />

          </FooterIcon>
          <FooterText> Regenerate</FooterText>
        </IconDiv>
        <IconDiv>
          <FooterIcon>
            <FooterIcontwosvg />
          </FooterIcon>
          <FooterText onClick={() => { props.onClick(props.index); }}> Delete</FooterText>
        </IconDiv>
      </BoxFooter>
    </BoxContainer>
  );

}

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
cursor: pointer;
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

export default ContainerBox;