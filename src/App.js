import Router from "./components/router";
import axios from "axios";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  axios.defaults.baseURL = 'http://localhost:1234';

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LeVO_UaAAAAAF59gCGGmFJtqKvDIqSGRlak0O_l" >
      <div className="full-width">
        <Router />
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default App;
