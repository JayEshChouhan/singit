import React from 'react'
import styled from 'styled-components';

const Tags = (props) => {
    const { tagsList, setTaglist, removeBtn } = props;

    const deleteTag = (i) => {
        setTaglist(tagsList.filter((tag, index) => index !== i))
    }
    return (
        <ListUl>
            {tagsList.map((tag, index) => {
                return <ListLi className={tag} key={index}>{tag} {removeBtn && <span onClick={() => deleteTag(index)}>x</span>}</ListLi>
            })}
        </ListUl>
    )
}

export default Tags;

const ListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 8px;
    row-gap: 8px;
    margin-top: 12px;
    .Emotions{
        background: #F5F7FA;
    }
`
const ListLi = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    background: #EDEDF0;
    border-radius: 27px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    font-feature-settings: 'liga' off;
    color: #1F1A48;    
`
