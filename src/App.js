import Router from "./components/router";
import axios from "axios";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  axios.defaults.baseURL = 'https://api.singit.io';

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LeVO_UaAAAAAF59gCGGmFJtqKvDIqSGRlak0O_l" >
      <GoogleOAuthProvider clientId="489354885029-aj5ic15ue24k99k1lngkhjg86ga7gav5.apps.googleusercontent.com">
        <div className="full-width">
          <Router />
        </div>
      </GoogleOAuthProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
