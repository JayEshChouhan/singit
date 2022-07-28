import React from 'react'
import styled from 'styled-components';

const CheckBox = (props) => {
    
    return (
        <Container >
            <div className='input-box checkbox'>
                <input type={"checkbox"} name={props.name && props.name} id={props.id && props.id}></input>
                {props.children}
                <label htmlFor={props.id} className="label">
                    {props.label ? props.label : props.label}
                </label>
            </div>
        </Container>
    )
}

const Container = styled.div`

.checkbox input {
height: 0;
width: 0;
}
.checkbox .label {
padding-left: 28px;
position: relative;
}
.checkbox .label::before {
content: '';
position: absolute;
left: 0;
top: 0;
width: 19.5px;
height: 19.5px;
border:  1px solid #A3A1B3;
border-radius:15%;
}
.checkbox .label::after {
left: 6.6%;
top: 18%;
width: 7px;
height: 12px;
border:0.5px solid white;
border-width: 0 3px 3.5px 0;
transform: rotate(50deg);
}
.checkbox input:checked ~ .label::before {
width: 21px;
height: 21px;
position: absolute;
border:none;
background-color: #41C977;
}
.label:after {
content: "";
position: absolute;
}
label{
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #7C7896;
flex: none;
order: 1;
flex-grow: 0;
}
`;

export default CheckBox;

