import styled from "styled-components";

const SocialButton = styled.button`
  flex: 1;
  background-color: white;
  border: var(--dark-border);  
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.color};
  border-radius: 10px;
  margin-inline-end: ${props => props.marginEnd ? "15px" : 0};
  font-weight: bold;

  svg { margin-inline-end: 10px; }
  span { color: black; }
  
  &:hover {
    background-color: var(--background);
  }
`;

export default SocialButton;