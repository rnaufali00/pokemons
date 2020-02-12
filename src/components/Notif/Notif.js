import React from 'react';
import './notif.scss'
import { Toast } from 'react-bootstrap';

const NotifComponent = (props) =>(
    <div className="toast-container">
            <Toast className={`toast-${props.type}`} onClose={() => props.handleOnClose()} show={props.flagShow}  delay={3000} animation={true} autohide >
                <Toast.Header>
                    <strong className="mr-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </div>
)

export default NotifComponent;