import styled from "styled-components";

const ExistingBillingAccount = (props) => {
  return <RowWrapper className="row">
    <CreditCard>
      <img src={`https://s3.us-east-2.amazonaws.com/assets.singit.io/credit+cards/${props.account?.type}.png`} alt="credit card type" />
    </CreditCard>
    <Details>
      <p>{props.account?.cardholderName}</p>
      <span>Card ending in {props.account?.cardMask}</span>
    </Details>
  </RowWrapper>
};

export default ExistingBillingAccount;

const RowWrapper = styled.div`
  justify-content: flex-start !important;   
  grid-column: 1 / 3;
  padding: 10px 0;
`;

const CreditCard = styled.div`
  max-width: 70px;
  margin-inline-end: 20px;
  img { width: 100%; }
`;

const Details = styled.div`
  p { font-size: 20px; font-weight: bold; margin: 0; }
  span { color: var(--medium-text); }
`;