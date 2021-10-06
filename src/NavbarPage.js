import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    <Router>
      <MDBContainer>
        <MDBNavbar color="green lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer>
            <MDBNavbarBrand>
              MDBNavbar
            </MDBNavbarBrand>
            <MDBNavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse13')}>
              <span className="white-text">
                <MDBIcon icon="bars" />
              </span>
            </MDBNavbarToggler>
            <MDBCollapse id="navbarCollapse13" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default NavbarPage;