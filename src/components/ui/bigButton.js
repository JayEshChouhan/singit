import styled from "styled-components";

const BigButton = (props) => {
  return <ConfirmButton {...props}>{props.children}</ConfirmButton>
};

export default BigButton;

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

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { opacity: 0.9; }
`;