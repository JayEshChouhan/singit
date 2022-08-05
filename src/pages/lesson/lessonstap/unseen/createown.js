import React, { useState } from 'react'
import styled from 'styled-components';
import Vector from '../../../../assets/icon/Vector.png'
import Select from 'react-select';
import Checkbox from "../../../../assets/icon/Checkbox.png"
import ListSvg from '../../../../assets/svgImage/listSvg';
import ListTwosvg from '../../../../assets/svgImage/listTwosvg';

const options = [
  { value: 'Multiple choice', label: 'Multiple choice' },
  { value: 'True or False', label: 'True or False' },
]

const Createown = () => {

  const [addOption, SetAddOption] = useState([]);
  const [selectedClinet, setSelectedClinet] = useState("Multiple choice");
  const addWord = (e) => {

    if (e.key === 'Enter') {
      if (e.target.value === "") {
        e.preventDefault()

      } else {
        SetAddOption([...addOption, e.target.value]);
        e.target.value = "";
      }
    }
  }
  const handleChangeSelect = (event) => {
    setSelectedClinet(event.value)
  }

  return (
    <>
      <div>
        <P>Press on the text to edit the questions as you wish To insert a ‘•••’ symbol type &replace& and it will be inserted automatically.</P>
        <HeaderDiv>
          <img src={Vector} />
          <Pspan>You can edit the instruction and sentence inside the question card by click it</Pspan>
        </HeaderDiv>
        <FDiv>
          <SelectDiv>
            <Select options={options} onChange={handleChangeSelect} />
          </SelectDiv>
          <Image>
            <img src={Checkbox} />
          </Image>
          {selectedClinet === "Multiple choice" ? <Div1>
            <PDiv>
              <P1>Select the correct answer</P1>
              <P2>Upon release, the &replace& garnered critical acclaim, with reviewers comparing it favourably to &replace& previous works and praised its lyrics, production and Adele's vocal performance.</P2>
            </PDiv>
            <ListUl>
              {addOption.map((tag, index) => {
                return (
                  <ListLi className={tag} key={index}>
                    <span>{tag}</span>
                    <div>
                      <ListSvg />
                    </div>
                  </ListLi>
                )
              })}
              <ListLiInput>
                <InputField placeholder='+ Add answer options' onKeyDown={(e) => addWord(e)} />
              </ListLiInput>
            </ListUl>
          </Div1> : <Div1>
            <PDiv>
              <P1>Select if the statement is true or false</P1>
              <P2>It was recorded in Metropolis Studios, London.</P2>
            </PDiv>
            <ListUl>
              {addOption.map((tag) => {
                return (
                  <ListLi>
                    <span>{tag}</span>
                    <div>
                      <ListTwosvg />
                    </div>
                  </ListLi>
                );
              })}
            </ListUl>
          </Div1>
          }
        </FDiv>

      </div>
    </>
  )
}

const InputField = styled.input`
align-items: center;
padding: 16px;
background: #FFFFFF;
border: 1px solid lightgrey;
border-radius: 12px;
width: 100%;
height: 48px;
outline: none !important;
cursor:pointer;
`;

const P = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #777580;
`;

const HeaderDiv = styled.div`
padding: 8px 12px;
gap: 8px;
background: #1F1A48;
border-radius: 12px;
margin-bottom:20px;
`;

const Pspan = styled.span`
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #FFFFFF;
margin-bottom:14px;
margin-left:10px; 
`;

const P1 = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const P2 = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin-top:8px;
`;

const FDiv = styled.div`
padding: 16px;
gap: 12px;
background: #FFFFFF;
border: 1px solid #735FFF;
box-shadow: 0px 4px 0px #735FFF;
border-radius: 12px;
`;

const Image = styled.image`
float:right;
margin-top:-37px;
`;

const Image1 = styled.image`
float:right;
margin-left:470px;
margin-top:-45px;
`;

const PDiv = styled.p`
margin-top:14px;
`;

const LDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 16px;
gap: 12px;
width: 532px;
height: 204px;
background: #FFFFFF;
border: 1px solid #735FFF;
box-shadow: 0px 4px 0px #735FFF;
border-radius: 12px;
margin-top:20px;
`;

const P3 = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const P4 = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const SelectDiv = styled.div`
height: 40px;
width: 247px;
left: 0px;
top: 0px;
border-radius: 12px;
cursor: pointer;
padding: 12px, 16px, 12px, 16px;
.css-1okebmr-indicatorSeparator{
  display:none;
  cursor:pointer;
}
`;

const SelectDiv1 = styled.div`
height: 40px;
width: 247px;
left: 0px;
top: 0px;
border-radius: 12px;
padding: 12px, 16px, 12px, 16px;
.css-1okebmr-indicatorSeparator{
  display:none;
}
`;

const ListUl = styled.ul`
display:flex;
flex-wrap: wrap;
align-items: center;
column-gap: 12px;
row-gap: 12px;
`;

const ListLi = styled.li`
width: calc(50% - 6px);
display: flex;
justify-content:space-between;
align-items: center;
padding: 12px 16px;
border: 1px solid #CCCBDF;
border-radius: 12px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const ListLiInput = styled.li`
width: calc(50% - 6px);
`;

const Div1 = styled.div`
margin-top:16px
`;

export default Createown;


