import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const Success = (props) => {
  
  const location = useLocation();
  const navigate = useNavigate();

  const continueToApp = () => {

    if(location.state?.referrer) window.location = "/account/students";
    else navigate('/login');
    
  }

  return <Wrapper>
    <Gif src="https://s3.us-east-2.amazonaws.com/assets.singit.io/success.gif" alt="success" />
    <h3>Thank you {location.state?.firstname}!</h3>
    <p>Congratulations for joining the Singit Family, we can't wait to help you learn english like never before.</p>
    <button onClick={continueToApp}>Start learning now <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
  </Wrapper>
};


const Gif = styled.img`
width: 400px;
max-width: 100%;
margin: 0 auto;
display: block;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
padding: 0 20px 20px;
height: 95vh;
background-color: white;

h3 { text-align: center; font-weight: normal; font-size: 25px; margin: -30px 0 20px !important; }
p { color: var(--medium-text); margin: 10px 0; max-width: 400px; }
button { 
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

svg { margin-inline-start: 10px; font-size: 12px; font-weight: normal; }

&:hover {
}
}
`;

export default Success;
