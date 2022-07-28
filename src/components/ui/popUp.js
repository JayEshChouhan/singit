import React, { Children, useState } from 'react'
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const PopUp = (props) => {

    const handleClose = () => {
        props.setShow(false);
        if(props.onHide){
            props.onHide(true);
        }
    }

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modelheading>{props.heading}</Modelheading>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            {props.footer && <Modal.Footer>
                <button onClick={() => handleClose()} >close modal</button>
            </Modal.Footer>}
        </Modal>
    )
}

const Modelheading = styled.div`
font-weight: 700;
font-size: 20px;
line-height: 28px;
font-feature-settings: 'liga' off;
color: #1F1A48;
`;

export default PopUp;