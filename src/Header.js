import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#" active>{this.props.mainPage}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.airlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.carLink}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.hotelLink}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.airportTransfers}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.attractions}</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}