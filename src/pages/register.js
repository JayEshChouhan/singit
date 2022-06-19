import CreateBillingAccount from "../components/register/createBillingAccount";
import CreateUserForm from "../components/register/createUserForm";
import Card from "../components/ui/card";
import styled from "styled-components";
import Summary from "../components/register/summary";
import ExistingBillingAccount from "../components/register/existingBillingAccount";
import Navbar from "../components/ui/navbar";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import validator from 'validator';
import axios from "axios";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import ErrorCard from "../components/ui/errorCard";

const Register = (props) => {
  const rendered = useRef(false);
  const payMeInstance = useRef();
  const cardToken = useRef();
  const form = useForm();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState(null);
  const [billingAccount, setBillingAccount] = useState(null);

  const { executeRecaptcha } = useGoogleReCaptcha();
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Singit - Register";
  }, []);

  useEffect(() => {
    let planId = searchParams.get('planId');
    axios.get(`/billing/${planId}/details`)
      .then(plan => {
        if (plan.data) setPaymentPlan(plan.data);
        else throw new Error();
      })
      .catch(err => {
        console.log(err);
        setError("Corrupted sign up link, please go back to our website or ask for a new invitation.");
        window.scroll(0, 0)
      });
  }, [searchParams]);

  useEffect(() => {
    if(location.state) {
      for(let key of Object.keys(location.state)) {
        form.setValue(key, location.state[key]);
      }
    }
  }, [form, location]);

  const submit = async () => {
    setError("");
    setLoading(true);
    let formValue = form.getValues();
    console.log(formValue);

    if (!validator.isEmail(formValue.email)) {
      setError("Please enter a valid email address");
      window.scroll(0, 0)
      setLoading(false);
      return;
    }

    if (!validatePassword(formValue.password)) {
      setError("Please enter a strong password (capital letter, lowercase letter, a number and a special character)");
      window.scroll(0, 0)
      setLoading(false);
      return;
    }

    if (formValue.repeatPassword !== formValue.password) {
      setError("Please make sure passwords are matching");
      window.scroll(0, 0)
      setLoading(false);
      return;
    }

    if (!billingAccount) {
      const data = {
        payerFirstName: formValue.payerFirstName,
        payerLastName: formValue.payerLastName,
        payerEmail: formValue.email,
        payerPhone: formValue.phone,
        payerSocialId: formValue.identifier,
        total: {
          label: 'Student Light',
          amount: {
            currency: 'USD',
            value: '13.00',
          }
        }
      };

      if (!cardToken.current) {
        try {
          cardToken.current = await payMeInstance.current.tokenize(data);
          console.log(cardToken.current);
        } catch (err) {
          setError("Please make sure all fields are entered correctly and try again.");
          window.scroll(0, 0)
          setLoading(false);
          return;
        }
      }
    }

    try {
      const token = await executeRecaptcha('signUp');
      let jwt = localStorage.getItem('token');
      let config = { headers: { 'Authorization': `Bearer ${jwt}` } }
      let user = await axios.post("/users/create", {
        ...formValue,
        planId: paymentPlan?._id,
        token: token,
        cardToken: cardToken.current,
        useExistingAccount: billingAccount !== null
      }, config);
    } catch (err) {
      console.log(err);
      setError(err.response.data?.message || "Email address is already in use");
      window.scroll(0, 0)
      setLoading(false);
      return;
    };

    // Payment successful: send to login
    setLoading(false);
    navigate('/welcome', { state: { referrer: searchParams.get('referrer'), name: formValue.firstname } });
  }

  const initializePayMe = () => {
    if (!rendered.current) {
      var apiKey = 'MPL16522-733434V7-SLBZYAKQ-ZVZGOEJQ';
      rendered.current = true;
      window.PayMe.create(apiKey, { testMode: true }).then((instance) => {
        payMeInstance.current = instance;
        var fields = instance.hostedFields();
        var cardNumber = fields.create('cardNumber', {
          styles: {
            base: { 'background': 'red' }
          }
        });
        var expiration = fields.create('cardExpiration');
        var cvc = fields.create('cvc');
        cardNumber.mount('#card-number-container');
        expiration.mount('#card-expiration-container');
        cvc.mount('#card-cvv-container');
      }).catch((error) => {
        console.log(error);
        setError("Please make sure all the fields are entered correctly and try again.");
      })
    }
  };

  const validatePassword = (password) => {
    if (
      password.length > 8 &&
      password.match(/[A-Z]/) &&
      password.match(/[a-z]/) &&
      password.match(/[0-9]/) &&
      password.match(/[!@#$%^&*_-]/)
    )
      return true;
    return false;
  };

  const getBillingAccount = useCallback((token) => {
    axios.get(`/users/billingCardInfo`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        setBillingAccount(res.data);
      })
      .catch(err => {
        setBillingAccount(null);
        initializePayMe();
      })
  }, []);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token && token.length) getBillingAccount(token);
    else initializePayMe();
  }, [getBillingAccount]);

  return <>
    <Navbar />
    <Wrapper>
      <div className="pageTitle">
        <h1>Join Us!</h1>
        <h3>Create a user and start learning like never before</h3>
      </div>
      <form className="row">
        <div className="contentColumn">
          {error && <ErrorCard>{error}</ErrorCard>}
          <Card cardTitle="General Information"><CreateUserForm form={form} /></Card>
          {!billingAccount && <Card cardTitle="Billing Information"><CreateBillingAccount form={form} /></Card>}
          {billingAccount && <Card cardTitle="Billing Information"><ExistingBillingAccount account={billingAccount} /></Card>}
        </div>
        <Summary loading={loading} plan={paymentPlan} submit={submit} />
      </form>
    </Wrapper>
  </>
};

export default Register;

const Wrapper = styled.div`
  position: relative;
  top: 90px; 
  
  .pageTitle {
    padding: 5px 20px;
    h1 { margin: 20px 0 0; }
    h3 { margin: 0 0 20px; font-weight: normal; font-size: 16px; color: var(--medium-text); }
  }

  .row { justify-content: space-between; }

  .contentColumn {
    flex: 2;
    margin-inline-end: 20px;

    @media only screen and (max-width: 800px) {
      flex: 1;
      margin-inline-end: 0;
      min-width: 100%;
    }
  }

  form { 
    align-items: flex-start;
  
    .card {
      margin: 0 0 20px;

      .content { 
        display: grid;
        grid: auto auto/repeat(auto-fill,minmax(200px,1fr));
        grid-gap: 0 20px;
      }
    }
  }

  .summary { flex: 1; } 

  .half-row {
    max-width: calc(50% - 10px);
  }
`;

