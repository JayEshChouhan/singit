import React, { useState } from 'react'
import styled from 'styled-components';
import PopUp from './popUp';
import rectangle from '../../assets/images/Rectangle.png';
import Tags from './tags';

const FindLyrics = (props) => {
    const [lyricsPopup, setLyricsPopup] = useState(false)
    return (
        <>
            <FindWords onClick={() => setLyricsPopup(true)}>+ {props.btnText}</FindWords>
            <PopUp heading={"Select word for the lesson"} show={lyricsPopup} setShow={setLyricsPopup}>
                <p>The words in purple are words that are part of the educational plan for the age grade you chose - we recommend using those words.</p>
                <span>We recommend 4-7 words per lesson.</span>
                <div>
                    <div>Selected Lyrics</div>
                    <Tags tagsList={props.lessonList} setTaglist={props.setLessonlist} removeBtn />
                </div>
                <div>
                    <img src={rectangle} />
                    <div>
                        <div>Easy on Me</div>
                        <span>Adele</span>
                    </div>
                </div>
                <div>
                    <div>
                        <pre>There ain't no gold in this river
                            That I've been washin' my hands in forever
                            I know there is hope in these waters
                            But I can't bring myself to swim
                            When I am drowning in this silence
                            Baby, let me in
                            Go easy on me, baby
                            I was still a child
                            Didn't get the chance to
                            Feel the world around me
                            I had no time to choose
                            What I chose to do
                            So go easy on me
                            There ain't no room for things to change
                            When we are both so deeply stuck in our ways
                            You can't deny how hard I have tried
                            I changed who I was to put you both first
                            But now I give up
                            Go easy on me, baby
                            I was still a child
                            Didn't get the chance to
                            Feel the world around me
                            Had no time to choose
                            What I chose to do
                            So go easy on me
                            I had good intentions
                            And the highest hopes
                            But I know right now
                            That probably doesn't even show
                            Go easy on me, baby
                            I was still a child
                            I didn't get the chance to
                            Feel the world around me
                            I had no time to choose
                            What I chose to do
                            So go easy on me
                        </pre>
                    </div>
                </div>
            </PopUp>
        </>
    )
}

export default FindLyrics;

const FindWords = styled.div`
font-weight: 600;
font-size: 16px;
color: #735FFF;
margin: 0px 0px 22px 0px;
cursor: pointer;
`;