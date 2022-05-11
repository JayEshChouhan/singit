import styled from "styled-components";
import Card from "../ui/card";

export const Summary = (props) => {
  return <Card cardTitle="Order Summary" className="summary">
    <Wrapper>
      <div className="row">
        <span>Balance Amount</span>
        <p>$ 13</p>
      </div>
      <div className="row">
        <span>VAT (17%)</span>
        <p>$ 3</p>
      </div>

      <hr />

      <div className="row">
        <span>Total:</span>
        <h2>$ 16</h2>
      </div>

      <ConfirmButton onClick={props.submit}>Confirm and Pay</ConfirmButton>
    </Wrapper>
  </Card>
};

export default Summary;

const Wrapper = styled.div`
  .row { margin: 10px 0; }
  p { margin: 0; font-size: 18px; }
  span { display: block; color: var(--medium-text); font-size: 16px; }
  h2 { margin: 0 }
  hr { margin: 15px 0; border: none; border-bottom: var(--border); }
`;

const ConfirmButton = styled.span`
  width: 100%;
  display: block;
  margin: 20px 0 10px;
  background-color: var(--highlight);
  color: white !important;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  &:hover { opacity: 0.9; }
`;