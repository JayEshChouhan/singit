import CheckBox from './checkBox';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react'

const Checkboxlist = (props) => {

  const [allChecked, setAllChecked] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const selectAll = (e) => {
    setAllChecked(!allChecked);
    setIsCheck(props.CheckboxList.map(li => li.id));
    if (allChecked) {
      setIsCheck([]);
    }
  }
  const hendleChecked = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  }
  useEffect(() => {
    if (props.clear[0]) {
      setIsCheck([]);
      props.clear[1](false)
    }
  }, [props.clear[0]])
  useEffect(() => {
    if (isCheck.length === props.CheckboxList.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false)
    }
  }, [isCheck])

  useEffect(() => {
    props.setValue(isCheck)
  }, [isCheck])
  return (
    <MainDiv marginbottom={props.marginbottom}>
      <H3>{props.heading}</H3>
      <CheckboxList>
        <div>
          <CheckBox color="#777580" handleClick={selectAll} label={props.forAll.label} name={props.forAll.name} id={props.forAll.id} isChecked={allChecked} />
        </div>
        <Row>
          {props.CheckboxList.map((checkBox, index) => <Col sm={6} key={index}><CheckBox color="#777580" handleClick={hendleChecked} label={checkBox.label} name={checkBox.name} id={checkBox.id} isChecked={isCheck.includes(checkBox.id)} /></Col>)}
        </Row>
      </CheckboxList>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  margin-bottom: ${props => props.marginbottom}
  `;

const CheckboxList = styled.div`
  margin-top: 14px;
  `;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: 'liga' off;
  color: #1F1A48;
  margin:0;
  `;
  
export default Checkboxlist;  