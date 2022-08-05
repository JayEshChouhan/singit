import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Maininput from './mainInput'
import PopUp from './popUp'
import RadioInput from './radioInput';
import Tags from './tags';
import axios from 'axios';
import InputIconsvg from '../../assets/svgImage/inputIconsvg';
import FilterIconsvg from '../../assets/svgImage/filterIconsvg';
import InputIcontwosvg from '../../assets/svgImage/inputIcontwosvg';
import FilterIcontwosvg from '../../assets/svgImage/filterIcontwosvg';
import SongList from './songList';
import Checkboxlist from './checkBoxlist';

const SearchPopup = (props) => {

  const [searchText, setSearchText] = useState('');
  const [songList, setSongList] = useState([]);
  const [generes, setGeneres] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const [hidecontent, setHidecontent] = useState([]);
  const [searchPopup, setSearchPopup] = useState(false);
  const [filterPopUp, setFilterPopUp] = useState(false);
  const [clear, setClear] = useState(false)
  const [selectSong, setSelectSong] = useState({})
  const [songTag, setSongTag] = useState([])

  useEffect(() => {
    if (searchPopup === filterPopUp) {
      setSearchPopup(false)
    }
  }, [filterPopUp])

  useEffect(() => {
    axios.post(`tracks/search`, { "query": searchText })
      .then(function (response) {
        setSongList(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [searchText]);

  useEffect(() => {
    console.log(selectSong)
    if(Object.keys(selectSong).length!==0){
      props.setMainInputDisabled(false)
      console.log('run')
    }
  }, [selectSong])

  const handleFilterApply = () => {
    setFilterPopUp(false)
    setSearchPopup(true)
  }

  // if(setSelectSong.length<0){
  //   props.setMainInputDisabled(false)
  // }

  const handleFilterClear = () => {
    setClear(true)
    setEmotions([])
  }

  useEffect(() => {
    setSongTag(selectSong.emotions)
  }, [selectSong])

  useEffect(() => {
    if (!(generes.length === 0 || emotions.length === 0 || hidecontent.length === 0)) {
      const searchedList = songList.filter(ele => ele.title.includes(emotions[0][0]))
      setSongList(searchedList)
    }
  }, [generes, emotions, hidecontent])

  return (
    <>
      <PositionRelative marginbottom={props.marginbottom}>
        <InputBtn marginbottom={0} onClick={() => setSearchPopup(true)} setSongList={setSongList}>
          <InputIcon>
            <InputIconsvg />
          </InputIcon>
          {selectSong.title ? selectSong.title : "Song. lyric, artist"}
          <FilterIcon>
            <FilterIconsvg />
          </FilterIcon>
        </InputBtn>
        {selectSong.emotions && selectSong.emotions.length !== 0 && <Tags tagsList={songTag} setTagList={setEmotions} />}
      </PositionRelative>

      <PopUp heading={"Search"} show={searchPopup} setShow={setSearchPopup} >
        <Maininput marginbottom="22px">
          <PositionRelative>
            <InputIcon left="0px">
              <InputIcontwosvg />
            </InputIcon>
            <input type="search" className="only-bottom-border search" placeholder='Song, lyric, artist' onChange={(e) => setSearchText(e.target.value)} />
            <FilterIcon right="0px" onClick={() => setFilterPopUp(true)}>
              <FilterIcontwosvg />
            </FilterIcon>
          </PositionRelative>
        </Maininput>
        {songList === true ?
          <>
            {/* <SongList marginbottom="22px" songlist={songlist} heading="Recommended Song for" label="2nd Grade" load={true} listNumber={4} /> */}
            <SongList heading="All Song" songlist={songList} listNumber={10} setSelectSong={setSelectSong} setSearchPopup={setSearchPopup} />
          </> :
          songList.length === 0 ?
            <>
              <NotFound>No result found</NotFound>
              <SongList marginbottom="22px" songlist={songList} heading="Recommended Song for" label="2nd Grade" load={true} listNumber={2} setSelectSong={setSelectSong} setSearchPopup={setSearchPopup} />
            </>
            : <SongList heading={"Found " + songList.length + " songs"} songlist={songList} setSelectSong={setSelectSong} setSearchPopup={setSearchPopup} />
        }
      </PopUp>
      <PopUp heading={"Filter"} show={filterPopUp} onHide={setSearchPopup} setShow={setFilterPopUp} footer={['Clear', 'Apply']} handleClick={handleFilterApply} handleSearch={handleFilterClear} >
        <Checkboxlist setValue={setGeneres} marginbottom="22px" heading="Genres" CheckboxList={genres} forAll={genresForall} clear={[clear, setClear]} />
        <RadioInput setValue={setEmotions} marginbottom="20px" className="round" name="emotions" heading="Emotions (1)" checked={emotions} radios={['😄 Joy', '😭 Sadness', '😡 Anger', '🤢 Disgust', '😱 Fear']} />
        <Checkboxlist setValue={setHidecontent} heading="Hide Contents" CheckboxList={contents} forAll={contentsForall} clear={[clear, setClear]} />
      </PopUp>
    </>
  )
}

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

const PositionRelative = styled.div`
${(props) => props.marginbottom && "margin-bottom: " + props.marginbottom + ";"}
position: relative;
cursor: pointer;
margin: 15px 0;
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

const SelectSong = styled.div`
padding: 6px 12px;
background: #F5F7FA;
border-radius: 27px;
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: 'liga' off;
  color: #1F1A48;
  margin:0;
  `;




export default SearchPopup;
