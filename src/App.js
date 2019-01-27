import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Cards from "./Content";
import Image1 from './img/ic-flight-13.jpg';
import Image2 from './img/indigo-Airlines-flight-image.jpg';
import Image3 from './img/268103.jpg'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Header hotelLink="Hotels" carLink="Cars"
                                airlines="Airlines" mainPage="Account and Booking"
                                airportTransfers="Airport Transfers"
                                attractions="Attractions"/>
                    </Row>
                    <Row end="xs">
                        <Col xs={10}>
                            <Row>
                                <Col className="mt-2" xs={4}>
                                    <Cards view="More Details" buyTicket="Purchase Ticket" date="Flight Date: 12.03.19"
                                           flightImage={Image1} flightTitle="New York => Boston"
                                           price="Ticket Price: 200$" flightNumber="Flight Number: 159-251"/>
                                </Col>
                                <Col className="mt-2" xs={4}>
                                    <Cards view="More Details" buyTicket="Purchase Ticket" date="Flight Date: 10.05.19"
                                           flightImage={Image2} flightTitle="London => Vancouver"
                                           price="Ticket Price: 250$" flightNumber="Flight Number: 155-213"/>
                                </Col>
                                <Col className="mt-2" xs={4}>
                                    <Cards view="More Details" buyTicket="Purchase Ticket" date="Flight Date: 02.05.19"
                                           flightImage={Image3} flightTitle="Dublin => Toronto"
                                           price="Ticket Price: 300$" flightNumber="Flight Number: 152-212"/>
                                </Col>
                            </Row>

                        </Col>
                        <Sidebar aAirlines="America Airlines" bAirways="British Airways" alAirlines= "Alaska Airlines"
                                 aCanda="Air Canada"/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
