import styled from "styled-components";
import Input from "../ui/input";

const CreateUserForm = (props) => {
  return <>
    <Input label="First name">
      <input type="text" autoComplete="given-name" {...props.form.register('firstname')} />
    </Input>
    <Input label="Last name">
      <input type="text" autoComplete="family-name" {...props.form.register('lastname')} />
    </Input>

    <Input label="Email">
      <input type="email" autoComplete="email" {...props.form.register('email')} />
    </Input>
    <Input label="Phone number">
      <input type="phone" autoComplete="tel" {...props.form.register('phone')} />
    </Input>

    <Input label="Password">
      <input type="password" autoComplete="new-password" {...props.form.register('password')} />
    </Input>
    <Input label="Repeat Password">
      <input type="password" autoComplete="new-password" {...props.form.register('repeatPassword')} />
    </Input>
    <PasswordInstructions>Password must be at least 8 characters long, containing a mix of uppercase letters, lowercase letters, numbers and special characters (!@#$%^&*_-)</PasswordInstructions>
  </>
};

export default CreateUserForm;

const PasswordInstructions = styled.p`
  font-size: 12px;
  color: var(--medium-text);
  margin: 10px 0;
  grid-column: 1 / -1;
`;
