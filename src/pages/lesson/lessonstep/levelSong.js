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

const LevelAndSong = (props) => {
  const [lessonList, setLessonlist] = useState(["manvi"]);
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

  const addWord = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        setLessonlist([...lessonList, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const preFunction = (e) => {
    if (e.detail !== 0) props.setStep(props.step - 1);
  };

  const nextFunction = () => {
    if (props.step < 2) {
      props.setStep(props.step + 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.setData(data);
        nextFunction();
      })}
    >
      <InputRange
        min={0}
        max={9}
        steps={1}
        value={value}
        label="Age Grade"
        name="age_grade"
        marginbottom="20px"
        setValue={setValue}
        register={register}
      />
      <SearchPopup marginbottom="20px" />

      <RadioInput
        marginbottom="20px"
        name="Difficulty"
        label="Difficulty"
        value={radio}
        radios={["Easy", "Regular", "Hard", "Expert"]}
        setRadio={setRadio}
        register={register}
      />

      <Maininput marginbottom="20px" label="Duration">
        <PositionRelative>
          <InputIcon>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#7C7896"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputIcon>

          <select
            name="SelectDuration"
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
          </select>
        </PositionRelative>
      </Maininput>
      <Maininput marginbottom="20px" label="Main Topic">
        <input
          name="lessonList"
          placeholder="Add words to the lesson"
          className="only-bottom-border"
          type="text"
          onKeyDown={(e) => addWord(e)}
        />
        <Tags tagsList={lessonList} setTaglist={setLessonlist} removeBtn />
      </Maininput>

      <FindLyrics
        btnText=" Finding words from the song lyrics"
        tagsList={lessonList}
        setTaglist={setLessonlist}
      />
      <CheckBox
        label="Make Public"
        name="make_public"
        id={"makePublic"}
        isChecked={checkBox}
        setCheckBox={setCheckBox}
        register={register}
      />

      <BtnMain>
        <Div>
          {props.step === 0 ? (
            ""
          ) : (
            <BtnSecondary onClick={preFunction}>Previous</BtnSecondary>
          )}
        </Div>
        <Div>
          <BtnPrimary type="submit" disabled={disable}>
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

export default LevelAndSong;