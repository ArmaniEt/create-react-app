import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Card color="dark">
                <CardBody>
                    <CardTitle className='text-white'>{props.flightTitle}</CardTitle>
                </CardBody>
                <img src={props.flightImage} height="150px" width= "285px"/>
                <CardBody>
                    <CardText className="text-white">
                        {props.date}
                    </CardText>
                    <CardText className="text-white">
                        {props.price}
                    </CardText>
                    <CardText className="text-white">
                        {props.flightNumber}
                    </CardText>
                    <CardLink href="#">{props.buyTicket}</CardLink>
                    <CardLink href="#">{props.view}</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;