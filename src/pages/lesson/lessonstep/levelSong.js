import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckBox from "../../../components/ui/checkBox";
import InputRange from "../../../components/ui/inputRange";
import Maininput from "../../../components/ui/mainInput";
import Tags from "../../../components/ui/tags";
import RadioInput from "../../../components/ui/radioInput";
import FindLyrics from "../../../components/ui/findLyrics";
import SearchPopup from "../../../components/ui/searchPopup";


const LevelAndSong = (props) => {
  const [lessonList, setLessonlist] = useState(['ja']);
  const [value, setValue] = useState(props.data.age_grade || '0');
  const [radio, setRadio] = useState("");
  const [description, setDescription] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [selectDuration, setSelectDuration] = useState("Select Duration");

  useEffect(() => {
    if (
      lessonList.length === 0 ||
      value === "0" ||
      radio === "" ||
      description === "" ||
      checkBox === false ||
      selectDuration === "Select Duration"
    ) {
      props.setDisable(true);
    } else {
      props.setDisable(false);
    }
  }, [lessonList, value, radio, checkBox, description, selectDuration]);

  const {
    register,
    formState: { errors },
  } = props.methods;

  const addWord = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        setLessonlist([...lessonList, e.target.value]);
        e.target.value = "";
      }
    }
  };

  return (
    <div>
      <InputRange
        min={0}
        max={9}
        steps={1}
        value={value}
        label="Age Grade"
        name="age_grade"
        marginbottom="20px"
        methods={props.methods}
        setValue={setValue}
      />
      <SearchPopup marginbottom="20px" />

      <RadioInput
        marginbottom="20px"
        name="Difficulty"
        label="Difficulty"
        radio={radio}
        radios={["Easy", "Regular", "Hard", "Expert"]}
        methods={props.methods}
        setRadio={setRadio}
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
            {...register("Select Duration", {
              onChange: (e) => setSelectDuration(e.target.value),
              required: {
                value: true,
                message: "one must selected",
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
          placeholder="Add words to the lesson"
          className="only-bottom-border"
          type="text"
          onKeyDown={(e) => addWord(e)}
        />
        {lessonList.length !== 0 && <Tags tagsList={lessonList} setTaglist={setLessonlist} removeBtn />}
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
        checkBox={checkBox}
        methods={props.methods}
        setCheckBox={setCheckBox}
      />

      <Maininput marginbottom="20px">
        <input
          placeholder="Public short description here"
          className="only-bottom-border border-0"
          style={{ borderBottom: "0px !important" }}
          type="text"
          {...register("description", {
            onChange: (e) => setDescription(e.target.value),
            required: {
              value: true,
              message: "field must be filled",
            },
            maxLength: {
              value: 20,
              message: "must be 20 char",
            },
          })}
        />
      </Maininput>
    </div>
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

export default LevelAndSong;