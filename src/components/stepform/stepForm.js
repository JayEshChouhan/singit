import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BtnPrimary from '../ui/btnPrimary';
import BtnSecondary from '../ui/btnSecondary';
import Generalinfo from './generalInfo';
import LevelAndSong from './level&Song';
import Assignments from './assignments';
const stapComponent = [<Generalinfo/>,<LevelAndSong/>,<Assignments/>];

const Stepform = () => {
    const stepPages = ['General Information', 'level and Song', 'Assignments'];
    const [step, setStep] = useState(0);
    const [btnText, setBtnText] = useState('Next');
    const nextFunction = () => {
        if (step < 2) {
            setStep(step + 1)
        }
    }

    useEffect(() => {
        if (step == 2) {
            setBtnText('Save')
        }else{
            setBtnText('Next')
        }
    }, [step])

    const preFunction = () => {
        setStep(step - 1)
    }
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
                        {step === 0 ?'' : <BtnSecondary onClick={preFunction}>Previous</BtnSecondary>}
                    </Div>
                    <Div>
                        <BtnPrimary onClick={nextFunction}>{btnText}</BtnPrimary>
                    </Div>
                </BtnMain>
                
            </div>
        </div>
    )
}
export default Stepform;
const H1 = styled.h1`
margin: 0;
// font-weight: 500;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin-bottom:8px;
`
const Staps = styled.div`
    display: flex;
    column-gap: 8px;
    margin-bottom: 32px`

const Stap = styled.div`
    height: 4px;
    background: #EDEDF0;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 1;`


const ActiveStap = styled.div`
height: 4px;
background: #FFB84F;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 1;`

const BtnMain= styled.div`
display:flex;
column-gap: 18px ;
`

const Div = styled.div`
width:100%;
`