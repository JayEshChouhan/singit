import React from 'react'
import styled from 'styled-components';

const CheckBox = (props) => {
    return (
        <div>
            <input
                id={props.id && props.id}
                type="checkbox"
                checked={props.value && props.value}
                onChange={props.onChange && props.onChange}
            />
            {props.label && <label htmlFor={props.id && props.id}>{props.label}</label>}
        </div>
    )
}
export default CheckBox;
