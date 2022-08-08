import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PopUp from './popUp';
import Tags from './tags';
import lyricicon from '../../assets/images/Rectangle.png';

const FindLyrics = (props) => {

    const [click, setClick] = useState(true)

    // const [lessonList, setLessonlist] = useState(['There', 'hope', 'chance', 'Around'])
    const [lyricss, setLyricss] = useState("There ain't no gold in this river That I've been washin' my hands in forever I know there is hope in these waters But I can't bring myself to swim When I am drowning in this silence Baby, let me in Go easy on me, baby I was still a child Didn't get the chance to Feel the world around me I had no time to choose What I chose to do So go easy on me There ain't no room for things to change When we are both so deeply stuck in our ways You can't deny how hard I have tried I changed who I was to put you both first But now I give up Go easy on me, baby I was still a child Didn't get the chance to Feel the world around me Had no time to choose What I chose to do So go easy on me I had good intentions And the highest hopes But I know right now That probably doesn't even show Go easy on me, baby I was still a child I didn't get the chance to Feel the world around me I had no time to choose What I chose to do So go easy on me")
    const [lyricsList, setLyricsList] = useState([]);
    const [lyricsListNotUnique, setLyricsListNotUnique] = useState([]);
    const [lyricsPopup, setLyricsPopup] = useState(false);

    useEffect(() => {
        setLyricsList(convertLyricsToListAndRemoveDuplicate(lyricss))
    }, [lyricss]);

    const convertLyricsToListAndRemoveDuplicate = (lyricss) => {
        lyricss = lyricss.split(' ');
        setLyricsListNotUnique(lyricss);
        var unique = lyricss.filter((item,
            index) => lyricss.indexOf(item) === index);
        return unique;
    }

    return (
        <>
            <FindWords onClick={() => { setLyricsPopup(true); setClick(true) }}>+ {props.btnText} </FindWords>
            <PopUp heading={"Select word for the lesson"} show={lyricsPopup} setShow={setLyricsPopup} footer={["Cancel", 'Save']} handleClick={() => console.log("data")} closePopup>
                <p>The words in purple are words that are part of the educational plan for the age grade you chose - we recommend using those words.</p>
                <span>We recommend 4-7 words per lesson.</span>

                return <div>
                    <P>The words in purple are words that are part of the educational plan for the age grade you chose - we recommend using those words.</P>
                    {props.lessonList.length !== 0 && <><H4>Selected lyrics</H4>
                        <Tags tagsList={props.lessonList} setTaglist={props.setLessonList} removeBtn /></>}
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
                        <P1 onClick={() => setClick(false)} >
                            {/* {click ?
                                lyricsListNotUnique.map((ele, index) => {
                                    if (props.lessonList.includes(ele)) {
                                        return <font color="#735FFF" key={index}> {ele} </font>
                                    } else {
                                        return <span key={index}> {ele} </span>
                                    }

                                }) :
                                 */}

                            {lyricsList.map((ele, index) => {
                                if (props.lessonList.includes(ele)) {
                                    return <SelectBox key={index} onClick={(e) => props.setLessonList(props.lessonList.filter(item => item !== ele))} Selected>{ele}</SelectBox>
                                } else {
                                    return <SelectBox key={index} onClick={(e) => props.setLessonList([...props.lessonList, ele])}> {ele} </SelectBox>
                                }
                            })}
                        </P1>
                    </Lyrics>
                </div>
            </PopUp>
        </>
    )
}

const P1 = styled.div`
display: flex;
flex-wrap: wrap;
column-gap: 8px;
row-gap: 12px;
font-size: 20px;
font-weight: 400;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
color: #777580;
`;

const SelectBox = styled.div`
display: block;
padding: 4px 12px;
background: ${props => props.Selected ? "#ECFAF1" : '#ffffff'};
border: 1px solid ${props => props.Selected ? "#41C977" : '#CCCBDF'};
border-radius: 8px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const FindWords = styled.div`
font-weight: 600;
font-size: 16px;
color: #735FFF;
margin: 0px 0px 22px 0px;
cursor: pointer;
`;

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
`;

const Imgdiv = styled.div`
float:left;
padding-right:12px;
`;

const Div = styled.div`
margin: 0;
display: flex;
column-gap: 16px;
max-width: 344px;
width: 100%;
`;

export default FindLyrics;
