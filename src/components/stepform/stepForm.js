import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnPrimary from "../ui/btnPrimary";
import BtnSecondary from "../ui/btnSecondary";

const Stepform = (props) => {
  const [step, setStep] = useState(0);
  const [btnText, setBtnText] = useState("Next");
  const stepPages = props.stepPages;
  const stapComponent = props.tabs;
  const disable = props.disable;

  const nextFunction = (e) => {
    if (e?.detail!== 0) {
      if (step < stepPages.length -1 ) {
        setStep(step + 1);
      }
    }
  };

  useEffect(() => {
    if (props.step || step == stepPages.length -1) {
      if (props.btnText) {
        props.setBtnText("Save");
      } else {
        setBtnText("Save");
      }
    } else {
      if (props.btnText) {
        props.setBtnText("Next");
      } else {
        setBtnText("Next");
      }
    }
  }, [props.step || step]);

  const preFunction = (e) => {
    if (e.detail !== 0) setStep(step - 1);
  };

  return (
    <div>
      <div className="stepperMain">
        <H1>
          {(props.step || step + 1) + ". " + stepPages[props.step || step]}
        </H1>
        <Staps>
          {stepPages.map((item, index) => {
            if(props.step){
              if (index > props.step) {
                return <Stap key={index}></Stap>;
              } else {
                return <ActiveStap key={index}></ActiveStap>;
              }
            }else{
              if (index > step) {
                return <Stap key={index}></Stap>;
              } else {
                return <ActiveStap key={index}></ActiveStap>;
              }
            }
          })}
        </Staps>
        {stapComponent[props.step || step]}
        {stepPages[0] !== "General Information" && (
          <BtnMain>
            <Div>
              {props.step || step === 0 ? (
                ""
              ) : (
                <BtnSecondary onClick={props.preFunction || preFunction}>
                  Previous
                </BtnSecondary>
              )}
            </Div>
            <Div>
              <BtnPrimary
                type="submit"
                disabled={disable}
                onClick={nextFunction}>
                {props.btnText || btnText}
              </BtnPrimary>
            </Div>
          </BtnMain>
        )}
      </div>
    </div>
  );
};
const H1 = styled.h1`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #1f1a48;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Staps = styled.div`
  display: flex;
  column-gap: 8px;
  margin-bottom: 32px;
`;

const Stap = styled.div`
  height: 4px;
  background: #ededf0;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const ActiveStap = styled.div`
  height: 4px;
  background: #ffb84f;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const BtnMain = styled.div`
  display: flex;
  border-top: 1px solid #cccbdf;
  column-gap: 18px;
`;

const Div = styled.div`
  width: 100%;
`;

export default Stepform;