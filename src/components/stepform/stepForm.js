import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import BtnPrimary from '../ui/btnPrimary';
import BtnSecondary from '../ui/btnSecondary';
// import { MultiStepContext } from '../../pages/lesson/lessonstep/generalInfo';


const Stepform = (props) => {

    // const {LessonTitle,MainTopic} = useContext (MultiStepContext);

    const stepPages = props.stepPages;
    const [step, setStep] = useState(0);
    const [btnText, setBtnText] = useState('Next');
    const [disable, setDisable] = useState(true);

    const setBtnDisabled = () => {
        setDisable(true);
    }

    const setBtnEnabled = () => {
        setDisable(false);
    }

    const stapComponent = props.tabs;

    const nextFunction = () => {
         if (step < stepPages.length - 1) {
            setStep(step + 1)
        }

    };

    useEffect(() => {
        if (step == stepPages.length - 1) {
            setBtnText(props.lastBtn || 'Save')
        } else {
            setBtnText('Next')
        }
    }, [step]);

    const preFunction = () => {
        setStep(step - 1)
    };

    return (
        <div>
            <div className='stepperMain'>
                <H1>{(step + 1) + '. ' + stepPages[step]}</H1>
                <Staps>
                    {
                        stepPages.map((item, index) => {
                            if (index > step) {
                                return <Stap key={index}></Stap>
                            } else {
                                return <ActiveStap key={index}></ActiveStap>
                            }
                        })
                    }
                </Staps>
                {stapComponent[step]}
                <BtnMain>
                    <Div>
                        {step === 0 ? '' : <BtnSecondary onClick={preFunction}>Previous</BtnSecondary>}
                    </Div>
                    <Div>
                        <BtnPrimary onClick={nextFunction} disabled={false} >{btnText}</BtnPrimary>
                    </Div>
                </BtnMain>

            </div>
        </div>
    )
}
const H1 = styled.h1`
margin: 0;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin-bottom:8px;
font-weight: 600;
`;

const Staps = styled.div`
display: flex;
column-gap: 8px;
margin-bottom: 32px
`;

const Stap = styled.div`
height: 4px;
background: #EDEDF0;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 1;
`;

const ActiveStap = styled.div`
height: 4px;
background: #FFB84F;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 1;
`;

const BtnMain = styled.div`
display:flex;
border-top: 1px solid #CCCBDF;
column-gap: 18px ;
`;

const Div = styled.div`
width:100%;
`;

export default Stepform;
