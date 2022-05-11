import CreateBillingAccount from "../components/register/createBillingAccount";
import CreateUserForm from "../components/register/createUserForm";
import Card from "../components/ui/card";
import styled from "styled-components";
import Summary from "../components/register/summary";
import ExistingBillingAccount from "../components/register/existingBillingAccount";
import Navbar from "../components/ui/navbar";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Register = (props) => {
  const rendered = useRef(false);
  const payMeInstance = useRef();
  const form = useForm();

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    initializePayMe();
  }, []);

  const submit = () => {
    setShowError(false);
    let formValue = form.getValues();
    console.log(formValue);

    const data = {
      payerFirstName: formValue.payerFirstName,
      payerLastName: formValue.payerLastName,
      payerEmail: formValue.email,
      payerPhone: formValue.phone,
      payerSocialId: formValue.socialId,
      total: {
        label: 'Student Light',
        amount: {
          currency: 'USD',
          value: '13.00',
        }
      }
    };
    payMeInstance.current.tokenize(data)
      .then(result => {
        console.log(result);
      }).catch(err => {
        setShowError(true);
        console.log(err)
      });
  };

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
      })
    }
  };

  return <>
    <Navbar />
    <Wrapper>
      <div className="pageTitle">
        <h1>Join Us!</h1>
        <h3>Create a user and start learning like never before</h3>
      </div>
      <form className="row">
        <div className="contentColumn">
          {showError && <ErrorCard>Please make sure all the fields are entered correctly and try again.</ErrorCard>}
          <Card cardTitle="General Information"><CreateUserForm form={form} /></Card>
          <Card cardTitle="Billing Information"><CreateBillingAccount form={form} /></Card>
          <Card cardTitle="Billing Information"><ExistingBillingAccount /></Card>
        </div>
        <Summary submit={submit} />
      </form>
    </Wrapper>
  </>
};

export default Register;

const Wrapper = styled.div`
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

const ErrorCard = styled.div`
  background-color: #ffe3e3;
  color: #d55e5e;
  margin: 0 0 20px;
  padding: 15px;
  border-radius: 10px;
`;