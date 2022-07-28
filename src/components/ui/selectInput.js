import React from 'react';
import styled from 'styled-components';

function SelectInput(props) {

  return (
    <Wrapper >
      {props.label && <label>{props.label}</label>}
      <select name='Durection'>
        <option selected={true} value={"5-10"}>5-10 minutes</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 0 0 ${props => props.marginbottom || "10px"} 0;
min-width: ${props => props.width || "200px"};
text-align: ${props => props.align || "left"};
label {
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #7C7896;
}
`;

export default SelectInput;