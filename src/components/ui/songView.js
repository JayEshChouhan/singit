import React from 'react';
import styled from 'styled-components';
import songImg from '../../assets/images/songImg.png'

const SongView = (props) => {
    const { song } = props;
    return (
        <MainDiv>
            <div>
                <img src={song.image} />
            </div>
            <div>
                <H4>{song.songName}</H4>
                <P>{song.description}</P>
                <Span>
                    <i>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33301 11.3327V3.82157L12.6663 2.66602V10.1771" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.66667 13.3333C4.58714 13.3333 5.33333 12.5871 5.33333 11.6667C5.33333 10.7462 4.58714 10 3.66667 10C2.74619 10 2 10.7462 2 11.6667C2 12.5871 2.74619 13.3333 3.66667 13.3333Z" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.9997 11.9993C11.9201 11.9993 12.6663 11.2532 12.6663 10.3327C12.6663 9.41221 11.9201 8.66602 10.9997 8.66602C10.0792 8.66602 9.33301 9.41221 9.33301 10.3327C9.33301 11.2532 10.0792 11.9993 10.9997 11.9993Z" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    <span>{song.genres}</span>
                    <span>{song.title}</span>
                </Span>
            </div>
        </MainDiv>
    )
}

export default SongView;

const MainDiv = styled.div`
display: flex;
column-gap: 16px;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #777580;
margin-top: 18px;
padding-bottom: 16px;
border-bottom: 1px solid #EDEDF0;
& *{
    margin-bottom:0;
}
`

const H4 = styled.h4`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #1F1A48;
`
const P = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #777580;
`

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
`