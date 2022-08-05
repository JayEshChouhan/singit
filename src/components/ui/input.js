import styled from "styled-components";

const Input = (props) => {

  return <Wrapper width={props.width} marginbottom={props.marginbottom} style={props.style} className={props.className} >
    <label>{props.label}</label>
    {props.children}
  </Wrapper>
};

const Wrapper = styled.div`
margin: 0 0 ${props => props.marginbottom || "10px"} 0;
min-width: ${props => props.width};  
label {
color: var(--dark-text);
font-size: 14px;
margin: 0 0 10px;
display: block;
font-weight: 600;
}

input {
width: 100%;
font-size: 14px;
padding: 8px 5px;
display: block;
box-sizing: border-box;
border: var(--dark-border);
border-radius: 5px;
}

iframe {     
height: 36px !important;
border: 0px !important;
border: var(--border) !important;
border-color: #dacfe8 !important;
border-radius: 5px !important;
padding: 8px 5px !important;
box-sizing: border-box !important; 
flex: 1;
}

&:first-of-type { margin-inline-start: 0 }
&:first-of-type { margin-inline-end: 0 }
`;

export default Input;
