import styled from "styled-components";

const InputRange = (props) => {

    return <Wrapper width={props.width} marginBottom={props.marginBottom} style={props.style} className={props.className} >
        <label>{props.label}</label>
        {props.children}
    </Wrapper>
};

export default InputRange;

const Wrapper = styled.div`
  margin: 0 0 ${props => props.marginBottom || "10px"} 0;
  min-width: ${props => props.width};
  
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7C7896;
  }

input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin-right: 15px;
    // width: 200px;
    height: 7px;
    background: #EDEDF0;
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
        // left: 0px;
        // top: 0px;
        border-radius:50%;
        background: #735FFF;
        box-shadow: 0px 4px 8px rgba(115, 95, 255, 0.12);
        border:7px solid #735FFF;
        background: #FFFFFF;
    	cursor: pointer;
    	box-shadow: 0 0 2px 0 #555;
  }  
`;