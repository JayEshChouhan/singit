import React from 'react'
import styled from 'styled-components'

const Basetext = () => {
    return (
        <div>
            <P>In order to generate an unseen test we need a text <br /> paragraph with a minimum of 300 words.</P>
            <P>Word count: 337 words.</P>
            <Div>
                <p>"Hello" is a song recorded by English singer-songwriter
                    Adele, released on 23 October 2015 by XL Recordings as
                    the lead single from her third studio album, 25 (2015).
                    Written by Adele and with its producer, Greg Kurstin,
                    "Hello" is a piano ballad with soul influences (including
                    guitar and drums), and lyrics that discuss themes of
                    nostalgia and regret.
                    Upon release, the song garnered critical acclaim, with
                    reviewers comparing it favourably to Adele's previous
                    works and praised its lyrics, production and Adele's vocal
                    performance. It was recorded in  Metropolis Studios,
                    London.

                    "Hello" was a massive global success, topping the records charts in a record-setting 36 countries, including in the United Kingdom where it became Adele's second chart topper, following "Someone Like You", and had the largest opening week sales in three years. In the United States, "Hello" debuted atop the Billboard Hot 100, reigning for ten consecutive weeks whilst becoming Adele's fourth number-one single on the chart and breaking several records, including becoming the first song to sell over a million digital copies in a week.
                    By the end of 2015, it had sold 12.3 million units globally (combined sales and track-equivalent streams) and was the year's 7th best-selling single while it stands as one of the best-selling digital singles of all-time.The accompanying music video was directed by Xavier Dolan and co-stars Adele and Tristan Wilds.
                    The music video for the song broke the Vevo Record by achieving over 27.7 million views within a 24-hour span, held previously by Taylor Swift's "Bad Blood" which accumulated 20.1 million views in that timeframe. "Hello" also broke the record for shortest time to reach one billion YouTube views (87 days).
                    The music video for the song received seven nominations at the 2016 MTV Video Music Awards, including Video of the Year and Best Female Video. At the 59th Annual Grammy Awards, "Hello" won three awards; Record of the Year, Song of the Year, and Best Pop Solo Performance. The song also won the Brit Award for British Single, and APRA Award for International Work of the Year.</p>
            </Div>



        </div>
    )
}

export default Basetext;

const P = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #777580;
padding-bottom:20px;
`
const Div = styled.div`

font-weight: 400;
font-size: 20px;
line-height: 36px;
font-feature-settings: 'liga' off;
color: #1F1A48;
height: 424px;
overflow:scroll;
overflow-x:hidden;
&::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
}
&::-webkit-scrollbar-track {
    background: #EDEDF0;
}
&::-webkit-scrollbar-thumb {
    background: #CCCBDF;
    border-radius: 8px;
}
`







