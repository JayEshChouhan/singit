import styled from "styled-components";

const Navbar = (props) => {
  return <Wrapper>
    <ContentWrapper className="full-width">
      <h1>Singit</h1>
    </ContentWrapper>
  </Wrapper>
}

export default Navbar;

const Wrapper = styled.header`
  width: 100vw;
  left: 0;
  position: absolute;
  background-color: white;
  border-bottom: var(--border);
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 20px;
  h1 { margin: 10px 0; }
`;