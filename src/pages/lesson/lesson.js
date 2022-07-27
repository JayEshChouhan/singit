import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Banner from "../../components/banners/banner";
import NavBar from "../../components/navBar";
import Stepform from "../../components/stepform/stepForm";
import Assignments from "./lessonstep/assignment";
import Generalinfo from "./lessonstep/generalInfo";
import LevelAndSong from "./lessonstep/levelSong";

const Lesson = () => {
  const [data,setData]=useState({});
  const [disable, setDisable] = useState(true);

  const mobileVersion = useMediaQuery({
    query: "(max-width: 991px)",
  });

  const methods = useForm();
  const { handleSubmit, } = methods;
  
  return (
    <div>
      <NavBar />
      <Banner heading="Create a lesson" />
      <MainDiv mobile={mobileVersion}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit((data) => {setData(data);console.log(data)})}>
            <Stepform
              tabs={[
                <Generalinfo methods={methods} setDisable={setDisable} data={data}/>,
                <LevelAndSong methods={methods} setDisable={setDisable} data={data}/>,
                <Assignments methods={methods} data={data}/>,
              ]}
              stepPages={[
                "General Information",
                "level and Song",
                "Assignments",
              ]}
              disable={disable}
            />
          </form>
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