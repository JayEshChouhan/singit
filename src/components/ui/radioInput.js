import React from "react";
import styled from "styled-components";

function RadioInput(props) {
  // const { register } = props.methods;
  console.log(props)
  return (
    <>
      <div>
        <MainLabel>
          {props.label} {props.required && <sup>*</sup>}
        </MainLabel>
        <MainDiv marginbottom={props.marginbottom}>
          {props.radios &&
            props.radios.map((radio, index) => {
              return (
                <div key={props.name + index}>
                  {props.methods ?
                    <input
                      type="radio"
                      id={radio}
                      name={props.name}
                      value={radio}
                      checked={props.checked?props.checked.includes(radio):false}
                      {...props.methods.register(props.name, {
                        onChange: (e) => {
                          if(props.setRadio){
                            props.setRadio(e.target.value);
                          }
                          if(props.setValue){
                            props.setValue([e.target.value]);
                          }
                        },
                        required: {
                          value: true,
                          message: "checked value is reqired",
                        },
                      })}
                    /> :
                    <input
                      type="radio"
                      id={radio}
                      name={props.name}
                      value={radio}
                      checked={props.checked.includes(radio)}
                      onChange={(e) => {
                        if(props.setRadio){
                          props.setRadio(e.target.value);
                        }
                        if(props.setValue){
                          props.setValue([e.target.value]);
                        }
                      }}
                    />
                  }
                  <label className={"radioBtn " + props.className} htmlFor={radio}>
                    {" "}
                    {radio}
                  </label>
                </div>
              );
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
  margin-bottom: ${(props) => props.marginbottom};

  input {
    position: absolute;
    left: -100%;
    visibility: hidden;
  }
  .radioBtn {
    min-width: 50px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 12px;
    letter-spacing: 0.01em;
    margin-bottom: 0;
    display: inline-block;
    text-align: center;
    border: 1px solid #ededf0;
    border-radius: 12px;
  }
  input[type="radio"]:checked + .radioBtn {
    background: #41c977;
    border-color: #41c977;
    color: #ffffff;
    box-shadow: 0px 16px 24px -8px rgba(115, 95, 255, 0.16);
  }
  input[type="radio"]:disabled + .radioBtn {
    background-color: #ccc;
    opacity: 0.2;
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

const MainLabel = styled.label`
  font-size: 14px;
  line-height: 24px;
  color: #7c7896;
  margin-bottom: 8px;
  display: inline-block;
`;


export default RadioInput;



























































// import { useEffect, useState } from "react";
// import styled from "styled-components";

// function RadioInput(props) {

//     const [radioSelect, setRadioSeleact] = useState([]);
//     useEffect(() => {
//         if (props.setValue) {
//             props.setValue([radioSelect])
//         }
//     }, [radioSelect])
//     return (
//         <>
//             <div>
//                 {props.heading && <H3>{props.heading}</H3>}
//                 {props.label && <MainLabel>{props.label}</MainLabel>}
//                 <MainDiv marginbottom={props.marginbottom}>
//                     {props.radios &&
//                         props.radios.map((radio, index) => {
//                             return (
//                                 <div key={props.name + index}>
//                                     <input type="radio" id={radio} name={props.name} onChange={(e) => setRadioSeleact(e.target.id)} />
//                                     <label className={"radioBtn " + props.className} htmlFor={radio}> {radio}</label>
//                                 </div>
//                             )
//                         })}
//                 </MainDiv>
//             </div>
//         </>
//     );
// }

// const MainDiv = styled.div`
// display: flex;
// align-items: center;
// column-gap: 8px;
// flex-wrap: wrap;
// row-gap: 8px;
// margin-bottom: ${props => props.marginbottom};

// input{
// position: absolute;
// left: -100%;
// opacity: 0;
// visibility: hidden;
// }
// .radioBtn{
// min-width: 50px;
// font-weight: 400;
// font-size: 14px;
// line-height: 24px;
// padding: 12px;
// letter-spacing: 0.01em;
// margin-bottom: 0;
// display: inline-block;
// text-align: center;
// border: 1px solid #EDEDF0;
// border-radius: 12px;
// }
// input[type="radio"]:checked + .radioBtn {
// background: #41C977;
// border-color: #41C977;
// color: #FFFFFF;
// }
// input[type="radio"]:disabled + .radioBtn {
// background-color: #ccc;
// opacity: .2;
// }
// .radioBtn.round{
// border-radius: 27px;
// padding: 6px 12px;
// }
// input[type="radio"]:checked + .radioBtn.round {
// background: #ECFAF1;
// border-color: #41C977;
// color: #1F1A48;
// }
// `;

// const H3 = styled.h3`
// font-weight: bold;
// font-size: 16px;
// line-height: 24px;
// font-feature-settings: 'liga' off;
// color: #1F1A48;
// margin:0 0 12px 0;
// `;

// const MainLabel = styled.label`
// font-size: 14px;
// line-height: 24px;
// color: #7C7896;
// margin-bottom: 8px;
// display:inline-block;
// `;

// export default RadioInput;
