import styled from "styled-components";

const ExistingBillingAccount = (props) => {
  return <div className="row" style={{ justifyContent: 'flex-start',   gridColumn: "1 / 3"}}>
    <CreditCard>
      <img src="https://s3.us-east-2.amazonaws.com/assets.singit.io/credit+cards/amex.png" alt="credit card type" />
    </CreditCard>
    <Details>
      <p>Benny Rosner</p>
      <span>Card number 11********12334</span>
    </Details>
  </div>
};

export default ExistingBillingAccount;

const CreditCard = styled.div`
  max-width: 70px;
  margin-inline-end: 15px;
  img { width: 100%; }
`;

const Details = styled.div`
  p { font-size: 20px; font-weight: bold; margin: 0; }
  span { color: var(--medium-text); }
`;