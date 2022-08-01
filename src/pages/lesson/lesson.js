import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import Banner from "../../components/banners/banner";
import NavBar from "../../components/navBar";
import Stepform from "../../components/stepform/stepForm";
import Assignments from "./lessonstep/assignment";
import Generalinfo from "./lessonstep/generalInfo";
import LevelAndSong from "./lessonstep/levelSong";

const Lesson = () => {
  const [generalData, setGeneralData] = useState({});
  const [levalAndSongData, setLevalAndSongDataData] = useState({});
  const [assignmentsData, setAssignmentsData] = useState({});
  const [step, setStep] = useState(0);
  const [disable, setDisable] = useState(true);
  const mobileVersion = useMediaQuery({
    query: "(max-width: 991px)",
  });

  const methods = useForm();

  return (
    <div>
      <NavBar />
      <Banner heading="Create a lesson" />
      <MainDiv mobile={mobileVersion}>
        <FormProvider {...methods}>
            <Stepform
              step={step}
              tabs={[
                <Generalinfo setDisable={setDisable} step={step} setStep={setStep} disable={disable} data={generalData} setData={setGeneralData}/>,
                <LevelAndSong setDisable={setDisable} disable={disable}  step={step} setStep={setStep} data={levalAndSongData} setData={setLevalAndSongDataData}/>,
                <Assignments step={step} setStep={setStep} data={assignmentsData} setData={setAssignmentsData}/>,
              ]}
              stepPages={[
                "General Information",
                "level and Song",
                "Assignments",
              ]}
              disable={disable}
            />
        </FormProvider>
      </MainDiv>
    </div>
  );
};

const MainDiv = styled.div`
  max-width: 580px;
  margin: 0 auto;
  ${(props) => (props.mobile ? "margin-top:  -12px;" : "margin-top:  -30px;")}
  background-color: #ffffff;
  border-radius: 12px 12px 0 0;
  padding: 20px;
`;

export default Lesson;