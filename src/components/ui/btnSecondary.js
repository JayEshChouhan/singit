import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

const BtnSecondary = (props) => {

  const onPress = (e) => {

    if (!props.loading && e.key === "Enter") props.onClick();

  };

  return <>
    <ConfirmButton {...props} loading={props.loading ? 1 : 0} onClick={props.loading ? null : props.onClick} onKeyDown={onPress}>
      {!props.loading && props.children}
      {props.loading && <PuffLoader color="white" size={10} css='margin: 0 auto; width: 20px; height: 20px' />}
    </ConfirmButton>
  </>
};


const ConfirmButton = styled.button`
width: 100%;
display: block;
margin: 20px 0 10px;
background-color: #EDEDF0;
color: #735FFF;
padding: 15px;
box-sizing: border-box;
font-weight: 600;
border-radius: 35px;
text-align: center;
cursor: pointer;
border: none;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
&:hover, &:active { opacity: 0.8; }
`;

export default BtnSecondary;
