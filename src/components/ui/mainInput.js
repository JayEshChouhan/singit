import styled from "styled-components";
import duration from "../../assets/images/duration.png"

const Maininput = (props) => {
  
  return <Wrapper width={props.width} marginbottom={props.marginbottom} style={props.style} className={props.className} align={props.align}>
    {props.label && <label>{props.label}</label>}
    {props.children}
  </Wrapper>
};


const Wrapper = styled.div`
margin: 0 0 ${props => props.marginbottom || "10px"} 0;
min-width: ${props => props.width};
text-align: ${props => props.align || "left"};
position:relative;
  
label {
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #7C7896;
margin-bottom:8px;
display:inline-block;
}

input,textarea,select {
gap: 8px;
width: 100%;
height: 48px;
background: #F5F5F7;
border: none;
outline: none !important;
border-radius: 12px;
padding: 0 16px;
}
select{
width: 100%;
padding-left: 48px;
background-image: url('${duration}');
background-repeat: no-repeat;
background-position-y: center;
background-position-x: 18px;
appearance: none;
}
.inputSearch{
width: 100%;
padding-left: 48px;
background-image: url('${duration}');
background-repeat: no-repeat;
background-position-y: center;
background-position-x: 18px;
}
textarea{
padding-top: 12px;
height: 68px;
}
input::focus,textarea::focus,textarea::focus-visible {
border:none;
outline:none !important;
}

iframe {     
<<<<<<< HEAD
/* width: 48% !important; */
=======
>>>>>>> e1365e0ec5ce970f2940ca9ed7db2f9eaef0e25f
height: 36px !important;
border: 0px !important;
border: var(--border) !important;
border-color: #dacfe8 !important;
border-radius: 5px !important;
padding: 8px 5px !important;
box-sizing: border-box !important; 
flex: 1;
}

.only-bottom-border{
align-items: center;
padding: 12px 0px;
border-bottom: 1px solid #CCCBDF;
background: #FFFFFF;
border-radius: 0px;
&.search{
<<<<<<< HEAD
  padding: 12px 32px;
=======
padding: 12px 32px;
>>>>>>> e1365e0ec5ce970f2940ca9ed7db2f9eaef0e25f
}
}
&:first-of-type { margin-inline-start: 0 }
&:first-of-type { margin-inline-end: 0 }
`;

export default Maininput;
