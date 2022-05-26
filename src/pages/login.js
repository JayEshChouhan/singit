import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LargeInput from "../components/login/largeInput";
import BigButton from "../components/ui/bigButton";
import Card from "../components/ui/card";
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import axios from "axios";
import ErrorCard from "../components/ui/errorCard";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Login = (props) => {
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { register, getValues, handleSubmit } = useForm();
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    document.title = "Singit - Login";
  }, []);

  const handleGoogleCredentialResponse = (response) => {
    setShowError(false);
    setLoading(true);
    axios.post('/users/googleLogin', response)
      .then(result => {
        setShowError(true);
        setLoading(false);

        if (result.data?.token) {
          localStorage.setItem('token', result.data.token);
          window.location = window.location.host + "/explore";
        } else if (result.data.profile) {
          navigate('/register', { state: result.data.profile })
        }
      })
      .catch(err => {
        setShowError(true);
        setLoading(false);
      });
  }

  useGoogleOneTapLogin({
    onSuccess: handleGoogleCredentialResponse,
    onError: () => { }
  });

  const login = async () => {
    setShowError(false);
    setLoading(true);
    let form = getValues();
    const token = await executeRecaptcha('login');
    axios.post("/users/login", { ...form, token: token })
      .then(result => {
        console.log(result.data.token);
        setLoading(false);
        if (!result.data?.token) {
          setShowError(true);
          return;
        }

        localStorage.setItem('token', result.data.token);
        window.location.href = "/explore";
      })
      .catch(err => {
        setShowError(true);
        setLoading(false);
      });
  }

  return <Wrapper>
    <form onSubmit={handleSubmit(login)}>
      <Card>
        <h1>Welcome back!</h1>

        <LargeInput placeholder="Email" {...register('email')} type="text" autoComplete="email" />
        <LargeInput placeholder="Password" {...register('password')} type="password" autoComplete="current-password" />
        <ResetPass><Link to="/reset">Forgot password?</Link></ResetPass>

        <BigButton type="submit" onClick={login} loading={loading} tabIndex={0}>Login</BigButton>
        <p>Not a member yet? <Link to="/register">Register</Link></p>

        {showError && <ErrorCard>Please enter the correct email and password</ErrorCard>}
        <OrWrapper><hr /><span>OR</span></OrWrapper>

        <div className="row row-center">
          {/* href="https://is.remote.education.gov.il/nidp/oauth/nam/authz?response_type=code&client_id=d9cee646-45a4-4449-856a-5341d6a91a70&scope=profile%20eduorg%20edustudent%20openid&redirect_uri=https://test.singit.io/auth/idmCallback" */}
          <a className="sso-button"
            href={`https://lgn.edu.gov.il/nidp/oauth/nam/authz/?response_type=code&client_id=6d7a0f45-5a4f-4f07-8a1d-407f0dcea977&scope=profile%20eduorg%20edustudent%20openid&redirect_uri=https://singit.io`} 
            // /auth/idmCallback
          >
            <img src="https://s3.us-east-2.amazonaws.com/assets.singit.io/idm-icon.png" alt="התחברות משרד החינוך" />
          </a>
          <div className="spacer" />
          <GoogleLogin
            onSuccess={credentialResponse => handleGoogleCredentialResponse(credentialResponse)}
            style={{ color: 'red', border: 'none' }}
            type="icon"
            text="Google"
            onError={() => console.log('Login Failed')}
          />
        </div>
      </Card>
    </form>

    <Footer>
      <p>By using the site you agree to our <a href="https://singit.io/privacy" alt="Terms & Conditions">Terms & Conditions</a></p>
    </Footer>
  </Wrapper >
};

export default Login;



const Wrapper = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  form {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    user-select: none;
    
    .card { padding: 30px; }

    .row-center { 
      justify-content: center; 
      .spacer { margin: 0 5px; }
    }

    .sso-button {
      border: var(--dark-border);
      border-radius: 5px;
      padding: 7px 13px;
      box-sizing: border-box;

      img { height: 20px; }
    }
  }

  a { 
    color: var(--highlight); 

    &:hover { text-decoration: underline; }
  }
`;

const ResetPass = styled.p`
  margin: -5px 15px 15px;
  color: var(--medium-text);
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  user-select: none;

  &:hover { color: var(--dark-text); text-decoration: underline; }
`;

const OrWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px;

  hr { position: absolute; top: 10%; width: 100%; z-index: 1; border: none; border-top: var(--dark-border); }
  span { display: block; text-align: center; background-color: var(--background); z-index: 2; position: relative; width: fit-content; padding: 0 10px; }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--highlight);
  color: white;

  a { color: white; font-weight: bold; }

  @media only screen and (max-width: 500px) { font-size: 12px; }
`;