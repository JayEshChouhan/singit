import styled from "styled-components";

const NotFound = () => {
  
  return <Wrapper className="wrapper">
    <h1>404</h1>
    <h3>Not found</h3>
  </Wrapper>
};


const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
h1 { font-size: 48px; margin: 0; }
h3 { font-size: 28px; margin: 0; font-weight: normal; }
`;

export default NotFound;
