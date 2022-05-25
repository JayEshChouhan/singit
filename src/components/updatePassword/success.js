import styled from "styled-components";
import { Link } from "react-router-dom";
import BigButton from "../ui/bigButton";
import UpdateFormWrapper from "./updateFormWrapper";

const Success = (props) => {
  return <UpdateFormWrapper>
    <img src="https://s3.us-east-2.amazonaws.com/assets.singit.io/success.gif" alt="success" />
    <h1>Success!</h1>
    <p>Please wait for an email with further instructions</p>
    <Link to="/"><BigButton style={{ margin: "30px 0 10px" }}>Back to login</BigButton></Link>
  </UpdateFormWrapper>
};

export default Success