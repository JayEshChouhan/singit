import React from 'react'
import styled from "styled-components";
import closeIcon from "../../assets/icon/close.png"
import bannerImg from "../../assets/images/bannerUnion.png"

const Banner = (props) => {

  return (
    <BannerDiv className='banner' >
      {props.heading && <BannerText>{props.heading} </BannerText>}
      <CancelButton>
        <CancelButtonImg src={closeIcon} ></CancelButtonImg>
      </CancelButton>
      {props.para && <p>{props.para}</p>}
    </BannerDiv>
  )
}

const BannerDiv = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
background: #735FFF;
max-width: 100%;
height: 72px;
background-image: url('${bannerImg}');
background-repeat: no-repeat;
background-position: right;
padding: 0 20px;
padding-bottom: 20px;
`;

const BannerText = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
margin: 0;
`;


const CancelButton = styled.button`
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
padding: 0;
border: none;
background-color: transparent;
`;

const CancelButtonImg = styled.img`
width: 24px;
height: 24px;
left: 331px;
top: 20px;
`;

export default Banner;