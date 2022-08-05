import React, { useState } from 'react'
import styled from 'styled-components';
import Tags from '../../../../components/ui/tags';
import FindLyrics from '../../../../components/ui/findLyrics';
import Maininput from '../../../../components/ui/mainInput';
import ContainerBox from './containerBox';

const SelectBase = () => {

  const [lessonList, setLessonlist] = useState(["hymn", "for", "the", "weekend"])
  const [sentenceBox, setSentenceBox] = useState(['That man there', "I hope he is here now|", "Give him a chance to improve"])
  const deleteHandler = (id) => {

    setSentenceBox((oldInput) => {
      return oldInput.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  const addSentence = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value !== "") {
        setSentenceBox([...sentenceBox, e.target.value]);
        e.target.value = "";
      }
    }
  }

  return (
    <div>
      <Text> Our grammar test is generated from the sentences in this list, go over the sentences - make any adjustments you want and press next.</Text>
      <BoldText>These sentences are based on the words:</BoldText>
      <Tags tagsList={lessonList} setTaglist={setLessonlist} marginbottom="14px" removeBtn />
      <FindLyrics btnText=" Finding words from the song lyrics" tagsList={lessonList} setTaglist={setLessonlist} />
      <BorderTop />
      <Maininput marginbottom="20px" >
        <input type="text" placeholder='+ Add sentence' onKeyDown={(e) => addSentence(e)} />
      </Maininput>
      {sentenceBox.map((ele, index) => {
        return <ContainerBox heading={ele} index={index} onClick={deleteHandler} />
      })}
    </div>
  )
}

const Text = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
`;

const BoldText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #1F1A48;
flex: none;
order: 0;
flex-grow: 0;
`;

const BorderTop = styled.div`
border-top: 1px solid #CCCBDF;
padding-top: 27px;
`;

export default SelectBase;