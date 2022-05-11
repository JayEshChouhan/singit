import styled from "styled-components";

const Navbar = (props) => {
  return <Wrapper>
    <ContentWrapper>
      <h1>Singit</h1>
    </ContentWrapper>
  </Wrapper>
}

export default Navbar;

const Wrapper = styled.header`
  width: 100%;
  padding: 10px;
  background-color: white;
  border-bottom: var(--border);
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  h1 { margin: 10px 0; }
`;