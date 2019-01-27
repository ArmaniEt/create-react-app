import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Card color="dark">
                <CardBody>
                    <CardTitle className='text-white'>Card title</CardTitle>
                </CardBody>
                <img src={props.flightImage} width= "285px"/>
                <CardBody>
                    <CardText className="text-white">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;