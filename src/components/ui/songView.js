import React from 'react';
import styled from 'styled-components';
import songImg from '../../assets/images/songImg.png'
import SongViewsvg from '../../assets/svgImage/songViewsvg';

const SongView = (props) => {

    const { song } = props;
    return (
        <MainDiv onClick={props.onClick}>
            <ImgDiv>
                {song.album ?
                    <img className='img-fluid' src={song.album.cover || songImg} />
                    :
                    <img className='img-fluid' src={songImg} />
                }

            </ImgDiv>
            <div>
                <H4>{song.title}</H4>
                <P>{song.description}</P>
                <Span>
                    <i>
                        <SongViewsvg />
                    </i>
                    <span>{song.genres}</span>
                    <span>{song.title}</span>
                </Span>
            </div>
        </MainDiv>
    )
}

const MainDiv = styled.div`
display: flex;
column-gap: 16px;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #777580;
margin-top: 18px;
padding-bottom: 16px;
cursor:pointer;
border-bottom: 1px solid #EDEDF0;
& *{
margin-bottom:0;
}
`;

const ImgDiv = styled.div`
min-width: 64px;
width:64px;
img{
    border-radius: 12px; 
}
`;

const H4 = styled.h4`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #1F1A48;
`;

const P = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const Span = styled.span`
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #777580;
i {
    margin-right: 8px;
}
& ~ span{
    margin-right: 4px;
}
`;

export default SongView;
