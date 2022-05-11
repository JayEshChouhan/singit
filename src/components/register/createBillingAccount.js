import Input from "../ui/input";

const CreateBillingAccount = (props) => {
  return <>
    <Input label="Card number">
      <div id="card-number-container" className="form-control input-lg"></div>
    </Input>
    <div className="row">
      <Input label="Expiration date" className="half-row">
        <div id="card-expiration-container" className="form-control input-lg"></div>
      </Input>
      <Input label="CVV" className="half-row">
        <div id="card-cvv-container" className="form-control input-lg"></div>
      </Input>
    </div>

    <Input label="Card holder first name">
      <input type="text" autoComplete="cc-given-name" {...props.form.register('payerFirstName')} />
    </Input>
    <Input label="Card holder last name">
      <input type="text" autoComplete="cc-family-name" {...props.form.register('payerLastName')} />
    </Input>
    <Input label="Social id number">
      <input type="text" {...props.form.register('socialId')} />
    </Input>

  </>
};

export default CreateBillingAccount;