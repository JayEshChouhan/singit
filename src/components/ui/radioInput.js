import styled from "styled-components";

function RadioInput(props) {

    return (
        <>
            <div>
                {props.heading&&<H3>{props.heading}</H3>}
                {props.label&&<MainLabel>{props.label}</MainLabel>}
                <MainDiv marginbottom={props.marginbottom}>
                    {props.radios &&
                        props.radios.map((radio, index) => {

                            if (props.selected) {

                                if ((props.selected === radio)) {

                                    return (
                                        <div key={props.name + index}>
                                            <input type="radio" id={radio} name={props.name} defaultChecked={true} />
                                            <label className={"radioBtn " + props.className} htmlFor={radio}>{radio}</label>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={props.name + index}>
                                            <input type="radio" id={radio} name={props.name} disabled />
                                            <label className={"radioBtn " + props.className} htmlFor={radio}>{radio}</label>
                                        </div>
                                    );
                                }
                            } else {
                                return (
                                    <div key={props.name + index}>
                                        <input type="radio" id={radio} name={props.name} />
                                        <label className={"radioBtn " + props.className} htmlFor={radio}> {radio}</label>
                                    </div>
                                )
                            }
                        })}
                </MainDiv>
            </div>
        </>
    );
}


const MainDiv = styled.div`
display: flex;
align-items: center;
column-gap: 8px;
flex-wrap: wrap;
row-gap: 8px;
margin-bottom: ${props => props.marginbottom};

input{
position: absolute;
left: -100%;
opacity: 0;
visibility: hidden;
}
.radioBtn{
min-width: 50px;
font-weight: 400;
font-size: 14px;
line-height: 24px;
padding: 12px;
letter-spacing: 0.01em;
margin-bottom: 0;
display: inline-block;
text-align: center;
border: 1px solid #EDEDF0;
border-radius: 12px;
}
input[type="radio"]:checked + .radioBtn {
background: #41C977;
border-color: #41C977;
color: #FFFFFF;
}
input[type="radio"]:disabled + .radioBtn {
background-color: #ccc;
opacity: .2;
}
.radioBtn.round{
    border-radius: 27px;
    padding: 6px 12px;
}
input[type="radio"]:checked + .radioBtn.round {
    background: #ECFAF1;
    border-color: #41C977;
    color: #1F1A48;
}
`;
const H3 = styled.h3`
font-weight: bold;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin:0 0 12px 0;
`
const MainLabel = styled.label`
font-size: 14px;
line-height: 24px;
color: #7C7896;
margin-bottom: 8px;
display:inline-block;
`;

export default RadioInput;
