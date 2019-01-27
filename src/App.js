import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Cards from "./Content";
import Image1 from './img/ic-flight-13.jpg';


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
                                    <Cards flightImage={Image1}/>
                                </Col>
                                <Col className="mt-2" xs={4}>
                                    <Cards/>
                                </Col>
                                <Col className="mt-2" xs={4}>
                                    <Cards/>
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
