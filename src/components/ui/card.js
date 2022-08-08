import styled from "styled-components";

const Card = (props) => {

  return <Wrapper style={props.style} className={"card " + props.className}>
    {props.cardTitle && <h3 className="cardTitle">{props.cardTitle}</h3>}
    <div className="content">{props.children}</div>
  </Wrapper>
};

const Wrapper = styled.div`
background-color: white;
border: var(--border);
border-radius: 10px;
padding: 10px 20px;
.cardTitle { width: 100%; border-bottom: var(--border); margin: 0 0 10px; padding: 10px 0 15px; }
`;

export default Card;
