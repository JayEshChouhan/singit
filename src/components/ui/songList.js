import SongView from './songView';
import LabelSvg from '../../assets/svgImage/labelSvg';
import LoadMoresvg from '../../assets/svgImage/loadMoresvg';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

const SongList = (props) => {
  const [next, setNext] = useState(props.listNumber || props.songlist?.length);
  const loadMore = () => {
    setNext(next + 2);
  };

  const handleSongChange = (id) => {
    const currentSong = props.songlist.filter((song) => song._id === id);
    props.setSelectSong(...currentSong)
    props.setSearchPopup(false)
  }

  useEffect(() => {
    setNext(props.listNumber || props.songlist?.length)
  }, [props.songlist])

  return (
    <MainListDiv marginbottom={props.marginbottom}>
      <HeadingDiv>
        <H3>{props.heading}</H3>
        {props.label && <Label>
          <LabelSvg />
          {props.label}
        </Label>}
      </HeadingDiv>
      <Row>
        {props.songlist.slice(0, next).map((song, index) => {
          return <Col sm={6} key={index}><SongView song={song} key={index} onClick={() => handleSongChange(song._id)} /></Col>
        })}
      </Row>
      {props.load && next < props.songlist?.length && <LoadBtn onClick={() => loadMore()}>
        Load More
        <LoadMoresvg />
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

export default SongList;