import styled from "styled-components";
import Card from "../ui/card";
import PuffLoader from "react-spinners/PuffLoader";
import BigButton from "../ui/bigButton";

export const Summary = (props) => {
  return <div className="summary">
    <Card cardTitle="Order Summary">
      <Wrapper>
        <div className="row" style={{ justifyContent: 'flex-start' }}>
          <PlanCover imgSrc={props.plan?.coverImg} />
          <div>
            <p>{props.plan?.title}</p>
            <span>{props.plan?.description}</span>
          </div>
        </div>
        <hr />
        <div className="row">
          <span>Total:</span>
          <h2>
            {currencies[props.plan?.currency] || props.plan?.currency}
            {props.plan?.price / 100}
            <small>/{cycleEnum[props.plan?.billingCycle]}</small>
          </h2>
        </div>

        {!props.loading && <BigButton onClick={props.submit}>Confirm and Pay</BigButton>}
        {props.loading && <BigButton>
          <PuffLoader color="white" size={10} css='margin: 0 auto; width: 20px; height: 20px' />
        </BigButton>}
      </Wrapper>
    </Card>
    <TermsText>By pressing "Confirm and Pay" You agree to the <a href="https://singit.io/privacy" alt="Terms of service">Terms of service</a></TermsText>
  </div>
};

export default Summary;

const cycleEnum = ['', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
const currencies = { USD: '$', EUR: '£', ILS: '₪' }

const Wrapper = styled.div`
  grid-column: 1 / 3;
  .row { margin: 10px 0; }
  p { margin: 0; font-size: 18px; }
  span { display: block; color: var(--medium-text); font-size: 16px; }
  hr { margin: 15px 0; border: none; border-bottom: var(--border); }
  h2 { 
    margin: 0;
    small { font-weight: normal; font-size: 14px; }
  }
`;

const PlanCover = styled.div`
  width: 35px; 
  height: 35px; 
  border: var(--border); 
  background-color: var(--background); 
  border-radius: 10px;
  background-image: url(${props => props.imgSrc});
  margin-inline-end: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

const TermsText = styled.span`
  font-size: 14px;
  color: var(--medium-text);
  text-align: center;
  display: block;
  width: 80%;
  margin: 10px auto;

  a { text-decoration: underline; }
`;