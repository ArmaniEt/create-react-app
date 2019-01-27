import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';


function Footer(props) {
    return (
        <Row style={{backgroundColor: '#313437', position: '' +
                'fixed', bottom: '0', width: '70%', height: '80px', borderRadius: '10px'}} xs={12}>
            <Col xs={4}>
                <p className='text-white mt-2'>{props.contactInfo}</p>
                <p className='text-white'>{props.contactPhone}</p>
            </Col>
            <Col className="mt-4" xs={3}>
                <Button style={{ width: '200px' }} color="info">{props.call}</Button>
            </Col>
            <Col className="mt-4" xs={5}>
                <Button color="link">{props.feedback}</Button>
            </Col>
        </Row>
    )

}


export default Footer;