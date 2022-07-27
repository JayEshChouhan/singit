import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

const BtnPrimary = (props) => {

  const onPress = (e) => {

    if (!props.loading && e.key === "Enter") props.onClick();

  };

  return <ConfirmButton type={props.type} {...props} loading={props.loading ? 1 : 0} onClick={props.loading ? null : props.onClick} onKeyDown={onPress} disabled={props.disabled}>
    {!props.loading && props.children}
    {props.loading && <PuffLoader color="white" size={10} css='margin: 0 auto; width: 20px; height: 20px' />}
  </ConfirmButton>
};


const ConfirmButton = styled.button`
width: 100%;
display: block;
margin: 20px 0 10px;
background-color: var(--highlight);
color: white ;
padding: 15px;
box-sizing: border-box;
font-weight: 600;
border-radius: 35px;
text-align: center;
cursor: pointer;
border: none;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
&:hover, &:active { opacity: 0.8; }
&:disabled{
background: #F5F5F7;
color: #CCCBDF;
}
`;

export default BtnPrimary;
