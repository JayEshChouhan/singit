import React from "react";
import styled from "styled-components";

function RadioInput(props) {
  
  return (
    <>
      <div>
        <H3>
          {props.heading} {props.required && <sup>*</sup>}
        </H3>
        <MainDiv marginbottom={props.marginbottom}>
          {props.radios &&
            props.radios.map((radio, index) => {
              return (
                <div key={props.name + index}>
                  {props.register ? (
                    <input
                      type="radio"
                      id={radio}
                      name={props.name}
                      value={radio}
                      checked={props.value === radio ? true : false}
                      {...props.register(props.name, {
                        onChange: (e) => {
                          if (props.setRadio) {
                            props.setRadio(e.target.value);
                          }
                          if (props.setValue) {
                            props.setValue([e.target.value]);
                          }
                        },
                      })}
                    />
                  ) : (
                    <input
                      type="radio"
                      id={radio}
                      name={props.name}
                      value={radio}
                      checked={props.checked.includes(radio)}
                      onChange={(e) => {
                        if (props.setRadio) {
                          props.setRadio(e.target.value);
                        }
                        if (props.setValue) {
                          props.setValue([e.target.value]);
                        }
                      }}
                    />
                  )}

                  <label
                    className={"radioBtn " + props.className}
                    htmlFor={radio}>
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
    cursor: pointer;
		margin: 15px 0;
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
  .radioBtn.round {
    border-radius: 27px;
    padding: 6px 12px;
  }
  input[type="radio"]:checked + .radioBtn.round {
    background: #ecfaf1;
    border-color: #41c977;
    color: #1f1a48;
  }
`;

const H3 = styled.h3`
font-weight: bold;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin:0;
`;

export default RadioInput;
