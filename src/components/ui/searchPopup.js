import React, { createContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CheckBox from './checkBox';
import Maininput from './mainInput'
import PopUp from './popUp'
import RadioInput from './radioInput';
import SongView from './songView';
import songImg from '../../assets/images/songImg.png'
import onecallaway from '../../assets/images/onecallaway.png'
import easyonme from '../../assets/images/easyonme.png'
import laterbitches from '../../assets/images/laterbitches.png'
import Tags from './tags';
import { click } from '@testing-library/user-event/dist/click';

const SearchPopup = (props) => {

  const [searchText, setSearchText] = useState('');
  const [songList, setSongList] = useState(true);
  const [generes, setGeneres] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const [hidecontent, setHidecontent] = useState([]);


  const [searchPopup, setSearchPopup] = useState(false);
  const [filterPopUp, setFilterPopUp] = useState(false);
  const [clear, setClear] = useState(false)
  const [selectSong,setSelectSong] = useState();
  const [songTag, setSongTag] = useState(["Emotions: 😍", "⚠️ Coarse Language", "📝 Politic"])

  useEffect(() => {
    if (searchPopup === filterPopUp) {
      setSearchPopup(false)
    }
  }, [filterPopUp])

  useEffect(() => {
    if (searchText !== '') {
      const searchedList = songlist.filter((ele, index, list) => ele.description.toLowerCase().includes(searchText.toLowerCase()))
      setSongList(searchedList)
    } else {
      setSongList(true)
    }
  }, [searchText])

  const handleFilterApply = () => {
    setFilterPopUp(false)
    setSearchPopup(true)
  }

  const handleFilterClear = () => {
    setClear(true)
    setEmotions([])
  }

  useEffect(() => {
    if (!(generes.length === 0 || emotions.length === 0 || hidecontent.length === 0)) {
      const searchedList = songlist.filter(ele => ele.title.includes(emotions[0][0]))
      setSongList(searchedList)
    }
  }, [generes, emotions, hidecontent])
  return (
    <>
      <InputBtn marginbottom={props.marginbottom} onClick={() => setSearchPopup(true)} selectSong={setSelectSong}>
        <InputIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5553 17.7143C14.2372 17.7143 17.222 14.6442 17.222 10.8571C17.222 7.07005 14.2372 4 10.5553 4C6.87344 4 3.88867 7.07005 3.88867 10.8571C3.88867 14.6442 6.87344 17.7143 10.5553 17.7143Z" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.4446 20L15.5557 16" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </InputIcon>
        Song. lyric, artist
        <FilterIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6083 4.64573C21.1579 3.99575 20.6959 3 19.8447 3H4.1553C3.30408 3 2.84207 3.99575 3.39173 4.64573L9.76357 12.1804C9.91623 12.3609 10 12.5897 10 12.8261V18.382C10 18.7607 10.214 19.107 10.5528 19.2764L12.5528 20.2764C13.2177 20.6088 14 20.1253 14 19.382V12.8261C14 12.5897 14.0838 12.3609 14.2364 12.1804L20.6083 4.64573Z" stroke="#A3A1B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </FilterIcon>
      </InputBtn>
      <PopUp heading={"Search"} show={searchPopup} setShow={setSearchPopup}>
        <Maininput marginbottom="22px">
          <PositionRelative>
            <InputIcon left="0px">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5553 17.7143C14.2372 17.7143 17.222 14.6442 17.222 10.8571C17.222 7.07005 14.2372 4 10.5553 4C6.87344 4 3.88867 7.07005 3.88867 10.8571C3.88867 14.6442 6.87344 17.7143 10.5553 17.7143Z" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4446 20L15.5557 16" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </InputIcon>
            <input type="search" className="only-bottom-border search" placeholder='Song, lyric, artist' onChange={(e) => setSearchText(e.target.value)} />
            <FilterIcon right="0px" onClick={() => setFilterPopUp(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6083 4.64573C21.1579 3.99575 20.6959 3 19.8447 3H4.1553C3.30408 3 2.84207 3.99575 3.39173 4.64573L9.76357 12.1804C9.91623 12.3609 10 12.5897 10 12.8261V18.382C10 18.7607 10.214 19.107 10.5528 19.2764L12.5528 20.2764C13.2177 20.6088 14 20.1253 14 19.382V12.8261C14 12.5897 14.0838 12.3609 14.2364 12.1804L20.6083 4.64573Z" stroke="#7C7896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FilterIcon>
          </PositionRelative>
          {!(emotions.length === 0) && <Tags tagsList={emotions} setTagList={setEmotions} removeBtn />}

        </Maininput>
        {songList === true ?
          <>
            {/* <SongList marginbottom="22px" songlist={songlist} heading="Recommended Song for" label="2nd Grade" load={true} listNumber={4} /> */}
            <SongList heading="All Song" songlist={songlist} listNumber={10} />
          </> :
          songList.length === 0 ?
            <>
              <NotFound>No result found</NotFound>
              <SongList marginbottom="22px" songlist={songlist} heading="Recommended Song for" label="2nd Grade" load={true} listNumber={2} />
            </>
            : <SongList heading={"Found " + songList.length + " songs"} songlist={songList} />
        }
      </PopUp>
      <PopUp heading={"Filter"} show={filterPopUp} onHide={setSearchPopup} setShow={setFilterPopUp} footer={['Clear', 'Apply']} handleClick={handleFilterApply} handleSearch={handleFilterClear} >
        <Checkboxlist setValue={setGeneres} marginbottom="22px" heading="Genres" CheckboxList={genres} forAll={genresForall} clear={[clear,setClear]}/>
        <RadioInput setValue={setEmotions} marginbottom="20px" className="round" name="emotions" heading="Emotions (1)" checked={emotions} radios={['😄 Joy', '😭 Sadness', '😡 Anger', '🤢 Disgust', '😱 Fear']} />
        <Checkboxlist setValue={setHidecontent} heading="Hide Contents" CheckboxList={contents} forAll={contentsForall} clear={[clear,setClear]}/>
      </PopUp>
    </>
  )
}

const PositionRelative = styled.div`
position: relative;
`;

const InputBtn = styled.div`
${(props) => props.marginbottom && "margin-bottom: " + props.marginbottom + ";"}
height: 48px;
position: relative;
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 48px;
background: #F5F5F7;
border-radius: 12px;
`;

const InputIcon = styled.span`
position: absolute;
bottom: 50%;
left: ${props => props.left || "16px"};
transform: translateY(50%);
`;

const FilterIcon = styled.div`
position: absolute;
bottom: 50%;
right: 16px;
right: ${props => props.right || "16px"};
transform: translateY(50%);
cursor: pointer;
`;

const NotFound = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const SongList = (props) => {
  const [next, setNext] = useState(props.listNumber || props.songlist?.length);
  const loadMore = () => {
    setNext(next + 2);
  };

  const handleSongChange=(id)=>{
    const currentSong = songlist.filter((song)=>song.id===id);
    console.log(currentSong)
  }

  
  useEffect(() => {
    setNext(props.listNumber || props.songlist?.length)
  }, [props.songlist])

  return (
    <MainListDiv marginbottom={props.marginbottom}>
      <HeadingDiv>
        <H3>{props.heading}</H3>
        {props.label && <Label>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41512 11.5924C7.02615 11.9742 6.40307 11.9742 6.0141 11.5924L3.2487 8.87788C2.9292 8.56425 2.9292 8.04949 3.2487 7.73587C3.55962 7.43067 4.05756 7.43033 4.3689 7.73508L6.71461 10.0312L12.2948 4.55371C12.6077 4.24657 13.1092 4.24745 13.421 4.5557C13.7395 4.87057 13.7386 5.38524 13.419 5.69899L7.41512 11.5924Z" fill="#41C977" />
          </svg>
          {props.label}
        </Label>}
      </HeadingDiv>
      <Row>
        {props.songlist?.slice(0, next)?.map((song, index) => {
          return <Col sm={6} key={index}><SongView song={song} key={index} onClick={()=>handleSongChange(song.id)} /></Col>
        })}
      </Row>
      {props.load && next < props.songlist?.length && <LoadBtn onClick={() => loadMore()}>
        Load More
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="#735FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </LoadBtn>}
    </MainListDiv>
  )
}

const MainListDiv = styled.div`
margin-bottom: ${props => props.marginbottom || '0px;'}
`;

const HeadingDiv = styled.div`
display: flex;
align-items: center;
column-gap: 8px;
`;

const H3 = styled.h3`
font-weight: bold;
font-size: 16px;
line-height: 24px;
font-feature-settings: 'liga' off;
color: #1F1A48;
margin:0;
`;

const Label = styled.label`
width: fit-content;
background: #ECFAF1;
border-radius: 27px;
padding: 6px 12px;
display: flex;
justify-content: center;
align-items: center;
column-gap:4px;
font-weight: 400;
font-size: 12px;
line-height: 12px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const LoadBtn = styled.button`
background: #EDEDF0;
border-radius: 100px;
width:100%;
outline: none;
border:none;
padding: 7.25px 0;
font-weight: bold;
font-size: 14px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #735FFF;
display:flex;
column-gap: 8px;
justify-content: center;
`;

const Checkboxlist = (props) => {
  const [allChecked, setAllChecked] = useState(false)
  const [isCheck, setIsCheck] = useState([])
  const selectAll = (e) => {
    setAllChecked(!allChecked);
    setIsCheck(props.CheckboxList.map(li => li.id));
    if (allChecked) {
      setIsCheck([]);
    }
  }
  const hendleChecked = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  }
  useEffect(()=>{
    if(props.clear[0]){
      setIsCheck([]);
      props.clear[1](false)
    }
  },[props.clear[0]])
  useEffect(() => {
    if (isCheck.length === props.CheckboxList.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false)
    }
  }, [isCheck])

  useEffect(() => {
    props.setValue(isCheck)
  }, [isCheck])
  return (
    <MainDiv marginbottom={props.marginbottom}>
      <H3>{props.heading}</H3>
      <CheckboxList>
        <div>
          <CheckBox color="#777580" handleClick={selectAll} label={props.forAll.label} name={props.forAll.name} id={props.forAll.id} isChecked={allChecked} />
        </div>
        <Row>
          {props.CheckboxList.map((checkBox, index) => <Col sm={6} key={index}><CheckBox color="#777580" handleClick={hendleChecked} label={checkBox.label} name={checkBox.name} id={checkBox.id} isChecked={isCheck.includes(checkBox.id)} /></Col>)}
        </Row>
      </CheckboxList>
    </MainDiv>
  )
}

const MainDiv = styled.div`
margin-bottom: ${props => props.marginbottom}
`
const CheckboxList = styled.div`
margin-top: 14px;
`

const genresForall = {
  id: 'all_genres',
  name: 'all_genres',
  label: 'All genres'
}

const genres = [
  {
    id: 'classic',
    name: 'classic',
    label: 'Classic'
  },
  {
    id: 'jazz',
    name: 'jazz',
    label: 'Jazz'
  },
  {
    id: 'pop',
    name: 'pop',
    label: 'Pop'
  },
  {
    id: 'country',
    name: 'country',
    label: 'Country'
  },
  {
    id: 'techno',
    name: 'techno',
    label: 'Techno'
  },
  {
    id: 'r&b',
    name: 'r&b',
    label: 'R&B'
  },
  {
    id: 'reggae',
    name: 'reggae',
    label: 'Reggae'
  },
  {
    id: 'rap',
    name: 'rap',
    label: 'Rap'
  },
  {
    id: 'death_metal',
    name: 'death_metal',
    label: 'Death Metal'
  },
  {
    id: 'blues',
    name: 'Blues',
    label: 'Blues'
  }
]

const contentsForall = {
  id: 'hide_ontents',
  name: 'hide_ontents',
  label: 'Hide Contents'
}

const contents = [
  {
    id: 'abuse',
    name: 'abuse',
    label: 'Abuse'
  },
  {
    id: 'violence',
    name: 'violence',
    label: 'Violence'
  },
  {
    id: 'coarce_language',
    name: 'coarse_language',
    label: 'Coarse Language'
  },
  {
    id: 'gambling',
    name: 'gambling',
    label: 'Gambling'
  },
  {
    id: 'gender_identity',
    name: 'gender_identity',
    label: 'Gender Idenity'
  },
  {
    id: 'sexual_orientation',
    name: 'sexual_orientation',
    label: 'Sexual Orientation'
  },
  {
    id: 'politic',
    name: 'politic',
    label: 'Politic'
  },
  {
    id: 'race_and_ethnicity',
    name: 'race_and_ethnicity',
    label: 'Race and Ethnicity'
  },
  {
    id: 'religion',
    name: 'religion',
    label: 'Religion'
  },
  {
    id: 'sexual',
    name: 'sexual',
    label: 'Sexual'
  },
  {
    id: 'substance_use',
    name: 'substance_use',
    label: 'Substance Use'
  }
]

const songlist = [
  {
    id: 1,
    songName: 'Free Spirit',
    title: 'Emotions: 😄',
    description: 'Khalid',
    genres: 'Jazz •',
    image: songImg
  },
  {
    id: 2,
    songName: 'Free Spirit',
    title: 'Emotions: 😄',
    description: 'Khalid',
    genres: 'Jazz •',
    image: songImg
  },
  {
    id: 3,
    songName: 'One Call Away',
    title: 'Emotions: 😄',
    description: 'Charlie Puth',
    genres: 'R&B •',
    image: onecallaway
  },
  {
    id: 4,
    songName: 'One Call Away',
    title: 'Emotions: 😄',
    description: 'Charlie Puth',
    genres: 'R&B •',
    image: onecallaway
  },
  {
    id: 5,
    songName: 'Heat Waves',
    title: 'Emotions: 😄',
    description: 'Diplo and Glass Animals',
    genres: 'Jazz •',
    image: laterbitches
  },
  {
    id: 6,
    songName: 'One Call Away',
    title: 'Emotions: 😄',
    description: 'Charlie Puth',
    genres: 'Jazz •',
    image: onecallaway
  },
  {
    id: 7,
    songName: 'Free Spirit',
    title: 'Emotions: 😄',
    description: 'Khalid',
    genres: 'Jazz •',
    image: songImg
  },
  {
    id: 8,
    songName: 'Wave Of You',
    title: 'Emotions: 😄',
    description: 'Surfaces',
    genres: 'Jazz • ',
    image: laterbitches
  },
  {
    id: 9,
    songName: 'Easy on Me',
    title: 'Emotions: 😄',
    description: 'Adele',
    genres: 'Jazz • ',
    image: easyonme
  },
  {
    id: 10,
    songName: 'Later Bitches',
    title: 'Emotions: 😄',
    description: 'The Prince Karma',
    genres: 'Jazz • ',
    image: laterbitches
  }
]

export default SearchPopup;
