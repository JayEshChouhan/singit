import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import lyricicon from '../../../../assets/images/lyricicon.png'

const NewWork = () => {

    const [lessonList, setLessonlist] = useState(['There', 'hope', 'chance', 'around'])
    const [lyricss, setLyricss] = useState("There ain't no gold in this river That I've been washin' my hands in forever I know there is hope in these waters But I can't bring myself to swim When I am drowning in this silence Baby, let me in Go easy on me, baby I was still a child Didn't get the chance to Feel the world around me I had no time to choose What I chose to do So go easy on me There ain't no room for things to change When we are both so deeply stuck in our ways You can't deny how hard I have tried I changed who I was to put you both first But now I give up Go easy on me, baby I was still a child Didn't get the chance to Feel the world around me Had no time to choose What I chose to do So go easy on me I had good intentions And the highest hopes But I know right now That probably doesn't even show Go easy on me, baby I was still a child I didn't get the chance to Feel the world around me I had no time to choose What I chose to do So go easy on me")
    return <div>
        <P>Please review your work before sending it to students.</P>

        <Iconslyrics>
            <Imgdiv>
                <img src={lyricicon} />
            </Imgdiv>
            <Mdiv>
                <SongName>Easy on Me</SongName>
                <Singer>Adele</Singer>
            </Mdiv>
        </Iconslyrics>
        <Lyrics>
            <p>
                {lyricss.split(' ').map((ele) => {
                    if (lessonList.includes(ele)) {
                        return <Design> <span>...</span> </Design>
                    } else {
                        return <span> {ele} </span>
                    }
                })}
            </p>
        </Lyrics>
    </div>

}

const P = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const Iconslyrics = styled.div`
`;

const SongName = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #1F1A48;
margin-bottom:2px
`;

const Singer = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const Lyrics = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 36px;
font-feature-settings: 'liga' off;
height:348px;
overflow:scroll;
overflow-x:hidden;
color : #A3A1B3;
&::-webkit-scrollbar{
    width:4px;
    border-radius:8px;
}
&::-webkit-scrollbar-track{
    background:#FFFFFF;
}
&::-webkit-scrollbar-thumb{
    background:#EDEDF0;
    border-radius:8px
}
`;

const Imgdiv = styled.div`
float:left;
padding-right:12px;
`;

const Mdiv = styled.div`
`;

const Design = styled.span`
display: inline-flex;
align-items: center;
justify-content: center;
padding: 4px 14px;
background: #EDEDF0;
border-radius: 8px;
font-weight: bold;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #1F1A48;
span{
    position: relative;
    bottom: 3px;
}
`;

export default NewWork

