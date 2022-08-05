import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import Banner from "../../components/banners/banner";
import NavBar from "../../components/navBar";
import Stapform from "../../components/stapform/stapForm";
import Assignments from "./lessonstap/assignment";
import Generalinfo from "./lessonstap/generalInfo";
import LevelAndSong from "./lessonstap/levelSong";

const Lesson = () => {
  const [generalData, setGeneralData] = useState({});
  const [levalAndSongData, setLevalAndSongDataData] = useState({});
  const [assignmentsData, setAssignmentsData] = useState({});
  const [stap, setStap] = useState(0);
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
            <Stapform
              stap={stap}
              tabs={[
                <Generalinfo setDisable={setDisable} stap={stap} setStap={setStap} disable={disable} data={generalData} setData={setGeneralData}/>,
                <LevelAndSong setDisable={setDisable} disable={disable}  stap={stap} setStap={setStap} data={levalAndSongData} setData={setLevalAndSongDataData}/>,
                <Assignments stap={stap} setStap={setStap} data={assignmentsData} setData={setAssignmentsData}/>,
              ]}
              stapPages={[
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
