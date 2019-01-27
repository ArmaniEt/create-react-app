import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">{this.props.aAirlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.bAirways}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.alAirlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.aCanda}</NavLink>
                    </NavItem>
                </Nav>
                <hr/>
            </div>
        );
    }
}