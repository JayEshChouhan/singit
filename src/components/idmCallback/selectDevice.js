import styled from "styled-components";
import BigButton from "../ui/bigButton";
import FullPageWrapper from "../ui/fullPageWrapper";

const SelectDevice = (props) => {
  return <FullPageWrapper style={{ flexDirection: 'column', textAlign: 'center', backgroundColor: 'white' }}>
    <ContentWrapper>
      <img src="https://s3.us-east-2.amazonaws.com/assets.singit.io/success.gif" alt="success" />
      <h3>Successfully logged in!</h3>
      <p>How would you like to use Singit?</p>
      <a href={"singit://auth/idmCallback?token=" + props.token}><BigButton>Use the app</BigButton></a>
      <span className="transparent-button" onClick={props.continue}>Mobile website</span>
    </ContentWrapper>
  </FullPageWrapper>
}

export default SelectDevice;

const DeviceWrapper = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  border: var(--dark-border);
  margin: 10px auto;
  border-radius: 5px;
`;

const ContentWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;

  img { max-width: 100%; }
  h3 { margin: 0 0 5px; }
  p { margin: 0 0 25px; }
  span {  display: block; margin: 15px auto; color: var(--medium-text); }

  .transparent-button {
    cursor: pointer;
    border-radius: 10px;
    padding: 10px;
    
    &:hover {
      background-color: var(--background);
      width: fit-content;
    }
  }
`;
