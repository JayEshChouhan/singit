import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import closeIcon from "../../assets/icon/close.png"
import bannerImg from "../../assets/images/bannerUnion.png"
import arrow from "../../assets/images/arrow.png"


const Banner = (props) => {

  const mobileVersion = useMediaQuery
    ({
      query: '(max-width: 991px)'
    })
  return (
    <BannerDiv className={'banner '} mobile={mobileVersion}>
      <BannerInnerDiv>
        {!mobileVersion && <HomeButton><img src={arrow} />Go home</HomeButton>}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          {props.heading && <BannerText>{props.heading} </BannerText>}
          {mobileVersion &&
            <CancelButton>
              <CancelButtonImg src={closeIcon} ></CancelButtonImg>
            </CancelButton>
          }
        </div>
        {props.para && <p>{props.para}</p>}
      </BannerInnerDiv>
    </BannerDiv>
  )
}

const BannerDiv = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
background: #735FFF;
max-width: 100%;
${(props) => props.mobile ? 'padding: 24px 20px 36px 20px;' : 'padding: 24px 0px 44px 0;'}
background-image: url('${bannerImg}');
background-repeat: no-repeat;
background-position: center;
`;

const BannerInnerDiv = styled.div`
width: 100%;
max-width: 580px;
margin: 0 auto;
`;

const BannerText = styled.h1`
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
margin: 0;
`;


const CancelButton = styled.button`
padding: 0;
border: none;
background-color: transparent;
`;

const CancelButtonImg = styled.img`
width: 24px;
height: 24px;
`;

const HomeButton = styled.button`
border:none;
outline:none;
padding: 0;
margin: 0;
background: transparent;
font-weight: bold;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
display: flex;
align-items: center;
column-gap: 17px;
`;

export default Banner;