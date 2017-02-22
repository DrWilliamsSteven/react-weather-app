var React = require("react");
var ReactDOM = require("react-dom")
var { Link, IndexLink } = require("react-router");
var { Navbar, NavItem, NavDropdown, MenuItem, Nav, FormGroup, FormControl, Button } = require('react-bootstrap');
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

var Nav_inst = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        console.log('Not wired up yet!')
    },
    render: function() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">React Weather App</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem eventKey={1}>Get Weather</NavItem>
                      </IndexLinkContainer>
                    <LinkContainer to="/about">
                        <NavItem eventKey={2}>About</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/examples">
                        <NavItem eventKey={3}>Examples</NavItem>
                      </LinkContainer>
                  </Nav>
                 
                  <Navbar.Form pullRight >
                  <form  onSubmit = { this.onSearch }>
                    <FormGroup role="form" >
                      <FormControl type="text" placeholder="Search"/>
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                    </form>
                  </Navbar.Form>
                </Navbar.Collapse>
              </Navbar>
        );
    }
});

module.exports = Nav_inst;
