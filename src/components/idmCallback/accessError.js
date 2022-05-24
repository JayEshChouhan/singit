import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AccessError = (props) => {
  return <Wrapper>
    <img src="https://s3.us-east-2.amazonaws.com/assets.singit.io/warning.gif" alt="empty package" />
    <div id="text-wrapper">
      <h3>Can't find your account</h3>
      <p>Looks like your school does not have access to Singit. <br/>If this keeps happening please contact our support</p>
      <Link to="/login" id="main-button">
        Back to Login
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </Link>
      <div className="row center-row">
        <a href="https://wa.me/message/EMQDG37DKLDKM1"><FontAwesomeIcon icon="fa-brands fa-whatsapp" className="support-icon" /></a>
        <a href="mailto:support@singit.io"><FontAwesomeIcon icon="fa-regular fa-envelope" className="support-icon" /></a>
      </div>
    </div>
  </Wrapper>
};

export default AccessError;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 20px 20px;
  height: 95vh;
  background-color: white;

  img { width: 50%; max-width: 300px; margin: 30px auto; }
  h3 { text-align: center; font-weight: normal; font-size: 25px; margin: -30px 0 20px !important; }
  p { color: var(--medium-text); margin: 10px 0; max-width: 400px; }
  .center-row { justify-content: center; margin-top: 30px; }
  .support-icon { font-size: 22px; margin-inline-end: 10px; }
  #main-button{ 
    background-color: white; 
    border: none; 
    cursor: pointer; 
    font-size: 16px; 
    margin: 25px 0 0;
    padding: 10px 25px;
    border-radius: 10px;
    background-color: var(--highlight);
    color: white;
    font-weight: bold;
    display: block;

    svg { margin-inline-start: 10px; font-size: 12px; font-weight: normal; }

    &:hover { opacity: 0.9; }
  }
`;