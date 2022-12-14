import React from 'react'
import styled from 'styled-components';
import lyricicon from '../../../../assets/images/lyricicon.png'
import Tags from '../../../../components/ui/tags';
import { useState } from 'react';

const FillTextQuestion = () => {

    const [lessonList, setLessonlist] = useState(['There', 'hope', 'chance', 'Around'])
    const [lyricss, setLyricss] = useState("There ain't no gold in this river That I've been washin' my hands in forever I know there is hope in these waters But I can't bring myself to swim When I am drowning in this silence Baby, let me in Go easy on me, baby I was still a child Didn't get the chance to Feel the world around me I had no time to choose What I chose to do So go easy on me There ain't no room for things to change When we are both so deeply stuck in our ways You can't deny how hard I have tried I changed who I was to put you both first But now I give up Go easy on me, baby I was still a child Didn't get the chance to Feel the world around me Had no time to choose What I chose to do So go easy on me I had good intentions And the highest hopes But I know right now That probably doesn't even show Go easy on me, baby I was still a child I didn't get the chance to Feel the world around me I had no time to choose What I chose to do So go easy on me")

    return <div>

        <P>The words in purple are words that are part of the educational plan for the age grade you chose - we recommend using those words.</P>
        <H4>Selected lyrics</H4>
        <Tags tagsList={lessonList} setTaglist={setLessonlist} removeBtn />
        <Iconslyrics>
            <Imgdiv>
                <img src={lyricicon} />
            </Imgdiv>
            <Maindiv>
                <Song>Easy on Me</Song>
                <Singer>Adele</Singer>
            </Maindiv>
        </Iconslyrics>

        <Lyrics>
            <p>
                {lyricss.split(' ').map((ele)=>{
                    if(lessonList.includes(ele)){
                        return <font color="#735FFF"> {ele} </font>
                    }else{
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

const H4 = styled.h4`
font-weight: bold;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const Lyrics = styled.div`
height:348px;
overflow:scroll;
overflow-x:hidden;
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
p{
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    font-feature-settings: 'liga' off;
    color : #A3A1B3;
}
`;

const Iconslyrics = styled.div`
margin-top:15px
`;

const Song = styled.h4`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #1F1A48;
margin-bottom:2px
`;

const Singer = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #777580;
`;

const Maindiv = styled.div`
`

const Imgdiv = styled.div`
float:left;
padding-right:12px;
`;

export default FillTextQuestion;