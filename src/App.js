//jshint esversion:6

import React from 'react';
import * as firebase from '../node_modules/firebase/app';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Button, Nav, Container, NavbarBrand, Navbar, NavLink, NavDropdown } from 'react-bootstrap';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import vid1 from './croppedVideo.mp4'
import firebaseConfig from './config';
import NavbarPage from './NavbarPage'
require('firebase/auth');
require('firebase/database');

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] }
  }

  componentDidMount() {
    const myItem1 = firebase.database().ref("pageDesc");
    let llist = []
    myItem1.on("value", datasnap => {
      var obj = datasnap.val();
      console.log(obj);
      for (const property in obj) {
        llist.push(obj[property])
      }
      console.log(llist);
      this.setState({ list: llist });
      console.log(this.state.list);
    });
  }

  render() {
    var arr = [];
    this.state.list.map(data => {
      arr.push(data);
    })
    console.log(arr);
    return (
      <>
        <div>
          <Navbar className="nav-color" sticky="top" bg="black" variant="dark" collapseOnSelect={true}>
            <Container>
              <Navbar.Brand href="#home" style={{ fontFamily: "Work Sans", fontWeight: "mixed", color: "#dddddd" }}>     <h1><b><i>Abc</i></b>Bank</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="-navbar-nav" className="order-md-1 order-0" />
              <Nav className="topnav-right">
                <Nav.Link href="#home" className="hello1" style={{ fontFamily: "Inter", fontWeight: "bold", color: "#FFFFFF", height: "30px", paddingBottom: "3.3px" }}>Features</Nav.Link>
                <Nav.Link href="#features" className="hello2" style={{ fontFamily: "Inter", fontWeight: "bold", color: "#FFFFFF", height: "30px", marginBottom: "3.3px" }}>How it Works</Nav.Link>
                <Nav.Link href="#pricing" className="hello3" style={{ fontFamily: "Inter", fontWeight: "bold", color: "#FFFFFF", height: "30px", marginBottom: "3.3px" }}>Our Team</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div className="home" id="home">
          <div className="iflex1">
            <div className="b">
              <video preload="auto" className="vid" autoPlay={true} muted playsInline>
                <source src={vid1} type="video/mp4" />
              </video>
            </div>
            <div className="a">
              <h5 className="head2" style={{ fontSize: arr[23], paddingBottom: "20px", lineHeight: "24px", letterSpacing: "2%", color: "#fdfdfd", fontWeight: "Regular", fontSize: "24px", height: "24px", fontFamily: "Inter" }}>{arr[0]}</h5>
              <h5 className="head1" style={{ marginBottom: "30px", lineHeight: "65px", letterSpacing: "2%", fontWeight: "100px", height: "130px", fontFamily: "Inter" }}>{arr[1]}</h5>
              <h6 className="hh6" >{arr[24]}</h6>
              <div className="bt11">
                <Button className="bt1" style={{ backgroundColor: "#dddddd", color: "#020102" }}><b>Get Early Access</b></Button>
              </div>
            </div>
          </div>
        </div>

        <div className="page2">
            <h1 className="hh1" style={{ fontSize: arr[20], fontFamily: "Frank Ruhl Libre" }}>{arr[13]}</h1>
            <div className="grad1">
            </div>
            <div className="c">
              <h5 className="hh11" style={{ fontSize: arr[21], fontWeight: "black", fontFamily: "Lato", lineHeight: "54px", letterSpacing: "1%", fontSize: "50px", marginBottom: "26px" }}>Gamified   Experience</h5>
              <h4 className="hh4" style={{ fontSize: arr[22], fontFamily: "Inter", fontWeight: "semi-bold", fontSize: "24px", lineHeight: "54px" }}>{arr[14]}</h4>
              <p className="p2para" style={{ color: arr[8], marginBottom: "39px", fontSize: arr[9], textAlign: "justify", fontFamily: "Inter", fontSize: "20px", lineHeight: "32px", letterSpacing: "1.5%", color: "#a5a5a7" }}>{arr[12]}</p>
              <h4 className="hh4" style={{ fontSize: arr[22], fontFamily: "Inter", fontWeight: "semi-bold", fontSize: "24px", lineHeight: "54px" }}>{arr[15]}</h4>
              <p className="p2para" style={{ color: arr[8], fontSize: arr[9], textAlign: "justify", fontFamily: "Inter", fontSize: "20px", lineHeight: "32px", letterSpacing: "1.5%", color: "#a5a5a7", marginBottom: "82px" }}>{arr[12]}</p>
            </div>
          <div className="d">
            <img className="img1" src={img1} alt="none" />
          </div>
        </div>

        <div className="page3" style={{ paddingBottom: "0" }} id="features">
          <div className="e">
            <img className="img2" src={img2} alt="none" />
          </div>
          <div className="f">
            <h2 className="hh11s" style={{ fontSize: arr[21], fontWeight: "800", fontFamily: "Inter", lineHeight: "54px", fontSize: "40px" }}>{arr[17]}</h2>
            <h4 className="hh4" style={{ fontSize: arr[22], fontFamily: "Inter", lineHeight: "54px", fontSize: "24px" }}>{arr[18]}</h4>
            <p style={{ color: arr[10], fontWeight: "500", fontSize: arr[11], textAlign: "justify", fontFamily: "Inter", lineHeight: "32px", fontSize: "18px" }}>{arr[16]}</p>
            <h4 className="hh4" style={{ fontSize: arr[22], fontFamily: "Inter", lineHeight: "54px", fontSize: "24px" }}>{arr[19]}</h4>
            <p style={{ color: arr[10], fontSize: arr[11], fontWeight: "500", textAlign: "justify", fontFamily: "Inter", lineHeight: "32px", fontSize: "18px" }}>{arr[16]}</p>
          </div>
        </div>

        <div className="page5" id="pricing">

          <div className="g">
            <h2 className="hh11" style={{ fontSize: arr[21], fontWeight: "800", fontFamily: "Inter", lineHeight: "54px", fontSize: "40px" }}>{arr[5]}</h2>
            <h4 className="hh4" style={{ fontSize: arr[22], fontWeight: "600", fontFamily: "Inter", lineHeight: "54px", fontSize: "24px" }}>{arr[2]}</h4>
            <p style={{ textAlign: "justify", color: "#f1f2f6", fontWeight: "500", fontFamily: "Inter", lineHeight: "32px", fontSize: "18px", marginBottom: "40px" }}>{arr[4]}</p>
            <h4 className="hh4" style={{ fontSize: arr[22], fontWeight: "600", fontFamily: "Inter", lineHeight: "54px", fontSize: "24px" }}>{arr[3]}</h4>
            <p style={{ textAlign: "justify", color: "#f1f2f6", fontWeight: "500", fontFamily: "Inter", lineHeight: "32px", fontSize: "18px", marginBottom: "30px" }}>{arr[4]}</p>
          </div>
          <div className="h">
            <img className="img3" src={img3} alt="none" />
          </div>

        </div>

        <div className="page4">
          <h1 className="Team">Our Team's Background</h1>
          <div className="grad2"></div>
          <div className="frnds">
            <img className="sponsor" src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" />
            <img className="sponsor" src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
            <img className="sponsor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" />
            <img className="sponsor" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
          </div>
        </div>

        <div className="grad3"></div>
        <div>
          <footer className="ftr" style={{ backgroundColor: "black", height: "auto" }}>
            <div className="ftrc1">
              <p className="ftrp1">Home</p>
              <p className="ftrp1">About</p>
              <p className="ftrp1">Blog</p>
              <p className="ftrp1">Privacy policy</p>
            </div>
            <div>
              <p className="ftrp2">Coming soon</p>
            </div>
            <div>
              <p className="ftrp3" style={{ marginBottom: "0" }}>&copy; 2020 AbcBank. All rights reserved</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
