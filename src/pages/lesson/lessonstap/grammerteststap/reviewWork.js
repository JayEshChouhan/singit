import React from 'react'
import styled from 'styled-components';
import FormBoxes from './formBoxes';

const ReviewWork = () => {
  return (
    <div>
      <Text>Please review your work before sending it to students.</Text>
      {listofQuestion.map((ele, index) => {
        return <FormBoxes data={ele} />
      })}
    </div>
  )
}

const listofQuestion = [
  {
    type: "Correct Form",
    describe: "Put the word into a correct form.",
    question: "That &replace& there.",
    options: ['Man', 'men'],
    selectedOption: ["Man"]
  },
  {
    type: "Correct Form",
    describe: "Put the word into a correct form.",
    question: "That &replace& there.",
    options: ['Man', 'men'],
    selectedOption: ["Man"]
  }
]

const Text = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

export default ReviewWork;

