import { useEffect, useState } from "react";
import styled from "styled-components";

const InputRange = (props) => {

  const [value, setValue] = useState(0);
  const [bgSize, setBgSize] = useState(0)
  const MAX = props.max;

  useEffect(() => {
    setBgSize(value)
  }, [value])

  return <Wrapper width={props.width} marginbottom={props.marginbottom} style={props.style} className={props.className} >
    <label>{props.label}</label>
    <MainDiv>
      <input
        type="range"
        min={props.min}
        max={MAX}
        steps={props.steps}
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${(bgSize * 100) / MAX}% 100%` }}
        value={value}
      />
      <Inputdiv>
        {
          [...Array(MAX)].map(() => {
            return <span></span>
          })
        }
      </Inputdiv>
    </MainDiv>
  </Wrapper>
};


const Wrapper = styled.div`
margin: 0 0 ${props => props.marginbottom || "10px"} 0;
min-width: ${props => props.width};
label {
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #7C7896;
margin-bottom: 8px;
display: inline-block;
}

input[type="range"] {
-webkit-appearance: none;
width: 100%;
margin: 0;
height: 4px;
background: transparent;
border-radius: 5px;
background-image: linear-gradient(#41C977, #41C977);
background-size: 70% 100%;
background-repeat: no-repeat;
}
  
/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
-webkit-appearance: none;
width: 26px;
height: 26px;
border-radius:50%;
background: #735FFF;
box-shadow: 0px 4px 8px rgba(115, 95, 255, 0.12);
border:7px solid #735FFF;
background: #FFFFFF;
cursor: pointer;
box-shadow: 0 0 2px 0 #555;
}  
span{
height: 4px;
background: #EDEDF0;
border-radius: 8px;
width: 100%;
}
`;

const MainDiv = styled.div`
position: relative;
height: 24px;
z-index: 1;
`;

const Inputdiv = styled.div`
display: flex;
column-gap: 8px;
position: absolute;
width: 100%;
top: 50%;
transform: translateY(-13%);
z-index: -1
`;

export default InputRange;
