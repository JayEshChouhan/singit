import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import CheckBox from "../../../components/ui/checkBox";
import InputRange from "../../../components/ui/inputRange";
import Maininput from "../../../components/ui/mainInput";
import Tags from "../../../components/ui/tags";
import RadioInput from "../../../components/ui/radioInput";
import FindLyrics from "../../../components/ui/findLyrics";
import SearchPopup from "../../../components/ui/searchPopup";
import BtnSecondary from "../../../components/ui/btnSecondary";
import BtnPrimary from "../../../components/ui/btnPrimary";
import InputIconthreesvg from "../../../assets/svgImage/inputIconthreesvg";
import Select from 'react-select';

const LevelAndSong = (props) => {

  const [lessonList, setLessonlist] = useState([]);
  const [mainInputDisabled, setMainInputDisabled] = useState(true)
  const [value, setValue] = useState(props.data.age_grade || "0");
  const [radio, setRadio] = useState(props.data.Difficulty || "");
  const [checkBox, setCheckBox] = useState(props.data.make_public || false);
  const [selectDuration, setSelectDuration] = useState(props.data.SelectDuration || "Select Duration");

  const disable = props.disable;
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (
      lessonList.length === 0 ||
      value === "0" ||
      radio === "" ||
      selectDuration === "Select Duration"
    ) {
      props.setDisable(true);
    } else {
      props.setDisable(false);
    }
  }, [lessonList, value, radio, selectDuration]);

  const testPattarn = /^[a-zA-Z0-9]*$/gm

  const addWord = (e) => {
    if (e.key === "Enter") {
      if (testPattarn.test(e.target.value)) {
        setLessonlist([...lessonList, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const preFunction = (e) => {
    if (e.detail !== 0) props.setStap(props.stap - 1);
  };

  const nextFunction = (e) => {
    if (e.detail !== 0) {
      props.setStap(props.stap + 1);
    }
  };

  const options = [
    { value: '5 minutes', label: '5 minutes' },
    { value: '10 minutes', label: '10 minutes' },
  ]

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.setData(data);
      })}
    >
      <InputRange
        min={0}
        max={9}
        staps={1}
        value={value}
        label="Age Grade"
        name="ageGrade"
        marginbottom="20px"
        setValue={setValue}
        register={register}
      />
      <SearchPopup marginbottom="20px" setMainInputDisabled={setMainInputDisabled} />
      <RadioInput
        marginbottom="20px"
        name="difficulty"
        label="Difficulty"
        value={radio}
        radios={["Easy", "Regular", "Hard", "Expert"]}
        setRadio={setRadio}
        register={register}
      />

      <Maininput marginbottom="20px" label="Duration" >
        <PositionRelative>
          <InputIcon>
            <InputIconthreesvg />
          </InputIcon>
          <Select name="duration" options={options} placeholder="Select Duration" onChange={(e)=>setSelectDuration(e.value)}/>


          {/* <Select
            name="duration"
            value={selectDuration}
            {...register("SelectDuration", {
              onChange: (e) => setSelectDuration(e.target.value),
              required: {
                value: true,
              },
            })}
          >
            <option>Select Duration</option>
            <option value={"5"}>5 minutes</option>
            <option value={"10"}>10 minutes</option>
            <option value={"15"}>15 minutes</option>
          </Select> */}
        </PositionRelative>
      </Maininput>
      <PositionRelative>
        <Maininput marginbottom="20px" label="Main Topic" style={mainInputDisabled&&{pointerEvents: 'none'}}>
          <input
            name="lessonList"
            placeholder="Add words to the lesson"
            className="only-bottom-border"
            type="text"
            // disabled={mainInputDisabled}
            onKeyDown={(e) => addWord(e)}
          />
          {lessonList.length !== 0 && <Tags tagsList={lessonList} setTaglist={setLessonlist} removeBtn />}
        </Maininput>

        <FindLyrics
          btnText=" Finding words from the song lyrics"
          lessonList={lessonList}
          setLessonList={setLessonlist}
          style={mainInputDisabled&&{pointerEvents: 'none'}}
        />
        {mainInputDisabled && <Disabled/>}
      </PositionRelative>
      <CheckBox
        label="Make Public"
        name="public"
        id={"makePublic"}
        isChecked={checkBox}
        setCheckBox={setCheckBox}
        register={register}
      />

      <BtnMain>
        <Div>
          {props.stap === 0 ? (
            ""
          ) : (
            <BtnSecondary onClick={preFunction}>Previous</BtnSecondary>
          )}
        </Div>
        <Div>
          <BtnPrimary type="submit" onClick={(e) => nextFunction(e)} disabled={disable}>
            Next
          </BtnPrimary>
        </Div>
      </BtnMain>
    </form>
  );
};


const InputIcon = styled.span`
  position: absolute;
  bottom: 50%;
  right: 22px;
  transform: translateY(50%);
`;

const PositionRelative = styled.div`
  position: relative;
`;

const Checkboxcolor = styled.div`
  background: #41c977;
`;

const BtnMain = styled.div`
  display: flex;
  border-top: 1px solid #cccbdf;
  column-gap: 18px;
`;
const Div = styled.div`
  width: 100%;
`;

// const Select = styled.select`
// cursor:pointer;
// `;

const Disabled = styled.div`
position: absolute;
width:100%;
height: 100%;
top:0;
left: 0;
opacity: 40%;
// z-index:3;
background: #ffffff;
cursor: not-allowed;
`

export default LevelAndSong;