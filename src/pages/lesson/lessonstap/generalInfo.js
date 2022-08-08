import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import BtnPrimary from "../../../components/ui/btnPrimary";
import BtnSecondary from "../../../components/ui/btnSecondary";
import Maininput from "../../../components/ui/mainInput";

const Generalinfo = (props) => {

  const [LessonTitle, setLessonTitle] = useState(props.data.LessonTitle || "");
  const [lessonDescription, setLessonDescription] = useState(props.data.lessonDescription || "");
  const [textAreaCount, setTextAreaCount] = useState(300);
  const [MainTopic, setMainTopic] = useState(props.data.MainTopic || "");

  const disable = props.disable;
  const { register, handleSubmit } = useForm();

  const recalculate = (e) => {
    setLessonDescription(e.target.value);
    setTextAreaCount(300 - e.target.value.length);
  };

  useEffect(() => {
    if (LessonTitle === "" || lessonDescription === "" || MainTopic === "") {
      props.setDisable(true);
    } else {
      props.setDisable(false);
    }
  }, [lessonDescription, LessonTitle, MainTopic]);

  const preFunction = (e) => {
    if (e.detail !== 0) props.setStap(props.stap - 1);
  };

  const nextFunction = (e) => {
    if (props.stap < 2) {
      props.setStap(props.stap + 1);
    }
  
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.setData(data);
        nextFunction();
      })}
    >
      <Maininput marginbottom="20px" label="Lesson’s Title">
        <input
          type="text"
          value={LessonTitle}
          name={"title"}
          {...register("LessonTitle", {
            onChange: (e) => setLessonTitle(e.target.value),
            required: {
              value: true,
            },
          })}
        />
      </Maininput>

      <Maininput marginbottom="20px" label="Description">
        <CharLeft>{textAreaCount} char left</CharLeft>
        <textarea
          type="text"
          value={lessonDescription}
          maxLength={300}
          {...register("lessonDescription", {
            onChange: (e) => recalculate(e),
            required: {
              value: true,
            },
          })}
        />
      </Maininput>

      <Maininput marginbottom="20px" label="Main Topic">
        <input
          type="text"
          value={MainTopic}
          name={"lesson-main-topic"}
          {...register("MainTopic", {
            onChange: (e) => setMainTopic(e.target.value),
            required: {
              value: true,
            },
          })}
        />
      </Maininput>
      <BtnMain>
        <Div>
          {props.stap === 0 ? (
            ""
          ) : (
            <BtnSecondary onClick={preFunction}>Previous</BtnSecondary>
          )}
        </Div>
        <Div>
          <BtnPrimary onClick={()=>{}} type="submit" disabled={disable}>
            Next
          </BtnPrimary>
        </Div>
      </BtnMain>
    </form>
  );
};

const CharLeft = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #a3a1b3;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const BtnMain = styled.div`
  display: flex;
  border-top: 1px solid #cccbdf;
  column-gap: 18px;
`;
const Div = styled.div`
  width: 100%;
`;

export default Generalinfo;