import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import Maininput from "../../../components/ui/mainInput";

// export const MultiStepContext = createContext();
const Generalinfo = (props) => {
  const [LessonTitle, setLessonTitle] = useState(props.data.LessonTitle || "");
  const [lessonDescription, setLessonDescription] = useState(props.data.lessonDescription || "");
  const [textAreaCount, setTextAreaCount] = useState(300);
  const [MainTopic, setMainTopic] = useState(props.data.MainTopic || "");

  const {  register,formState:{errors} ,} = props.methods;

  const recalculate = (e) => {
    setLessonDescription(e.target.value);
    setTextAreaCount(300 - e.target.value.length);
  };

  useEffect(()=>{
    if( LessonTitle === "" || errors?.LessonTitle?.message || lessonDescription === "" || errors?.lessonDescription?.message || MainTopic === "" || errors?.MainTopic?.message ){
      props.setDisable(true)
    }else{
      props.setDisable(false)
    }
  },[lessonDescription,LessonTitle,MainTopic, errors?.LessonTitle?.message, errors?.lessonDescription?.message,errors?.MainTopic?.message])

  


  return (
    <div>
      <Maininput marginbottom="20px" label="Lesson’s Title">
        <input
          type="text"
          name={"lesson-title"}
          {...register("LessonTitle", {
            onChange: (e) => setLessonTitle(e.target.value),
            required: {
              value: true,
              message: "field must be filled",
            },

          })}
        />
  
      </Maininput>
      <Maininput marginbottom="20px" label="Description">
        <CharLeft>{textAreaCount} char left</CharLeft>
        <textarea
          type="text"
          maxLength={300}
          {...register("lessonDescription", {
            onChange:(e)=>setLessonDescription(e.target.value),
            required: {
              value: true,
              message: "field must be filled",
            },
          })}
        />
      
      </Maininput>

      <Maininput marginbottom="20px" label="Main Topic">
        <input
          type="text"
          name={"lesson-main-topic"}
          {...register("MainTopic", {
            onChange:(e) => setMainTopic(e.target.value),
            required: {
              value: true,
              message: "field must be filled",
            },
          })}
        />
      
      </Maininput>
    </div>
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



export default Generalinfo;