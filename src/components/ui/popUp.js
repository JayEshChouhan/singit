import React from 'react'
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import BtnPrimary from './btnPrimary';
import BtnSecondary from './btnSecondary';
const PopUp = (props) => {

    const handleClose = () => {

        props.setShow(false);
        if (props.onHide) {
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
                <Div>
                    {props.footer.map((ele, index) => {
                        if (ele === 'Clear' || ele === "Cancel") {
                            return <BtnSecondary onClick={props.closePopup?handleClose:props.handleSearch } key={index} >{ele} </BtnSecondary>
                        } else {
                            return <BtnPrimary onClick={props.closePopup?handleClose:props.handleClick} key={index} >{ele}</BtnPrimary>
                        }
                    })}
                </Div>
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

const Div = styled.div`
margin: 0;
display: flex;
column-gap: 16px;
max-width: 344px;
width: 100%;
`;

export default PopUp;