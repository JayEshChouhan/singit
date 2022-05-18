import styled from 'styled-components';

const Modal = (props) => {
  return <>
    <ModalWrapper maxWidth={props.maxWidth}>
      {props.children}
    </ModalWrapper>
    <ModalBackdrop onClick={props.dismiss} />
  </>
}

export default Modal;


const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  max-width: ${props => props.maxWidth || "500px"};
  overflow: hidden;
  padding: 15px;
  /* max-height: 70vh; */

  #title-row { padding: 20px 0 10px; justify-content: space-between}
  h2, h3 { margin: 0; }
  .title-icon { background-color: rgba(var(--highlight, 0.5)); margin-inline-end: 10px; }
  .fa-xmark {cursor: pointer; position: absolute; top: 15px; right: 15px; }
`;


const BottomRowWrapper = styled.div`
  margin: 20px 0 0;
  background-color: var(--background);
  padding: 12px 25px;
  font-size: 0.8em;

  span {
    font-weight: bold;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.1s;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 6px 1px rgba(0,0,0,0.05);
    font-weight: bold;

    &:hover { 
      background-color: #fafafa; 
    }
  }

  .primary {
    padding: 10px 20px;
    color: white;
    background-color: var(--highlight);
    margin-inline-start: 15px; 
    transition: 0.1s;
    box-shadow: 0 2px 6px 1px rgba(0,0,0,0.05);
    font-weight: bold;

    &:hover {
      background-color: var(--highlight);
      opacity: 0.8;
    }
  }
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 9;
`;