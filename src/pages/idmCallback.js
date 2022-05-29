import React, { useEffect, useRef, useState } from "react";
import AccessError from "../components/idmCallback/accessError";
import SelectDevice from "../components/idmCallback/selectDevice";
import Loading from "../components/loading";
import useMobileCheck from "../hooks/useMobileCheck";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const IdmCallback = (props) => {
  const [state, setState] = useState('loading');
  const [token, setToken] = useState();
  const isMobile = useMobileCheck();

  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const checked = useRef(false);
  console.log(isMobile);

  useEffect(() => {
    let code = searchParams.get('code');
    if (code) {
      let host = !window.location.host.includes("localhost:") ? window.location.host : "singit.io";
      if (!checked.current) {
        checked.current = true;
        axios.get(`/users/idmLogin?code=${code}&redirectUrl=https://${host}`)
          .then(result => {
            if (!result.data?.token) {
              preventAccess();
              return;
            }

            localStorage.setItem('token', result.data.token);
            setToken(result.data.token);
            setState('allowed');
          })
          .catch(err => {
            preventAccess();
            console.log(err)
          });
      }
    } else {
      preventAccess();
    }
  }, [isMobile, searchParams]);

  const preventAccess = () => {
    setState('blocked');
  };

  const continueToWebsite = () => {
    let route = localStorage.getItem("accessedRoute");
    localStorage.removeItem("accessedRoute");
    if (!route) window.location.href = "/explore";
    else window.location.href = route;
  };

  if (state === 'loading') return <Loading />
  else if (state === 'blocked') return <AccessError />
  else if (state === 'allowed' && !isMobile) {
    continueToWebsite();
    return <Loading />
  }

  return <SelectDevice token={token} continue={continueToWebsite} />
};

export default IdmCallback;