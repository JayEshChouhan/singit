import React from 'react'
import styled from 'styled-components';

const CheckBox = (props) => {

    return (
        <Container color={props.color}>
            <div className='input-box checkbox'>
                <input type={"checkbox"} name={props.name && props.name} onChange={(e) => props.handleClick(e)} id={props.id && props.id} checked={props.isChecked}></input>
                {/* {props.children} */}
                <label htmlFor={props.id} className="label">
                    <div className='box'></div>
                    {props.label ? props.label : props.label}
                </label>
            </div>
        </Container>
    )
}

const Container = styled.div`
padding: 6px 0;
.checkbox input {
height: 0;
width: 0;
}
.checkbox .label {
padding-left: 28px;
position: relative;
}
.checkbox .label .box { 
position: absolute;
left: 0;
top: 0;
width: 19.5px;
height: 19.5px;
border:  1px solid #A3A1B3;
border-radius:15%;
}
.checkbox .label .box::after {
    left: 53%;
    top: 45%;
    width: 7.25px;
    height: 11.5px;
    border: 0.5px solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);
}
.checkbox input:checked ~ .label .box {
width: 21px;
height: 21px;
position: absolute;
border:none;
background-color: #41C977;
}
.label .box:after {
content: "";
position: absolute;
}
label{
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: ${props => props.color || '#7C7896'};
flex: none;
order: 1;
flex-grow: 0;
}
`;

export default CheckBox;

