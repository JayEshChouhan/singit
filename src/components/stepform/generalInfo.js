import React, { useState } from 'react';
import styled from 'styled-components';
import Maininput from '../ui/mainInput';

const Generalinfo = () => {
    const [textAreaCount,setTextAreaCount] = useState(300);
    const recalculate = e => {
        setTextAreaCount(300 - e.target.value.length);
      };
    return (
        <div>
            <Maininput marginbottom="20px" label="Lesson’s Title">
                <input type="text" name='title'/>
            </Maininput>

            <Maininput marginbottom="20px" label="Description">
                <CharLeft>{textAreaCount} char left</CharLeft>
                <textarea type="text" onChange={recalculate} maxLength={300}/>
            </Maininput>

            <Maininput marginbottom="20px" label="Main Topic">
                <input type="text" />
            </Maininput>
        </div>
    )
}
export default Generalinfo;


const CharLeft = styled.div`
position: absolute;
top: 0;
right: 0;
font-weight: 400;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #A3A1B3;
flex: none;
order: 1;
flex-grow: 0;
`