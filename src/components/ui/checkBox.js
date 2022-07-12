import React from 'react'
import styled from 'styled-components';

const CheckBox = ({ id, label, value, onChange }) => {
    return (
        <div>
      <input 
        id={id} 
        type="checkbox" 
        checked={value} 
        onChange={onChange} 
      />
      <label htmlFor={id}>{label}</label>
    </div>
    )
}
export default CheckBox;



// const Lable = styled.label`

// `

// const Input = styled.input`
// position: absolute;
// opacity: 0;
// cursor: pointer;
// height: 0;
// width: 0;`

// const Checkbox = styled.div`
// position: absolute;
// top: 0;
// left: 0;
// height: 25px;
// width: 25px;
// background-color: #eee;
// `