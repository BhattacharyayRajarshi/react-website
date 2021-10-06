//jshint esversion:6

import React from 'react';
import * as firebase from '../node_modules/firebase/app';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Button, Nav, Container, NavbarBrand, Navbar, NavLink, } from 'react-bootstrap';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import vid1 from './Animation NEW.mp4'
import firebaseConfig from './config';
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
        <div className="home" id="home">
        <div className="iflex1">
          <div className="b">
            <video preload="auto" className="vid" autoPlay="true" muted playsInline>
              <source src={vid1} type="video/mp4" />
            </video>
          </div>
          <div className="a">
            <h5 style={{ color: arr[6], fontSize: arr[23] }}>{arr[0]}</h5>
            <h1 className="head1" style={{ fontSize: arr[20] }}>{arr[1]}</h1>
            <h6 className="hh6" style={{ color: arr[6], fontSize: arr[7] }}>{arr[24]}</h6>
            <div className="bt11">
              <Button className="bt1" variant="light"><b>Get Early Access</b></Button>
            </div>
          </div>
          </div>
        </div>

        <div>
          <Navbar className="nav-color" fixed="top" bg="black" variant="dark" collapseOnSelect={true}>
            <Container>
              <Navbar.Brand href="#home"><h1><i>Abc</i>Bank</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-md-1 order-0" />
              <Nav className="topnav-right">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div className="page2">
          <h1 className="hh1" style={{ fontSize: arr[20] }}>{arr[13]}</h1>
          <div className="grad1">
          </div>
          <div className="iflex">
            <div className="c">
              <h2 className="hh11" style={{ fontSize: arr[21] }}>Gamified Experience</h2>
              <h4 className="hh4" style={{ fontSize: arr[22] }}>{arr[14]}</h4>
              <p style={{ color: arr[8], fontSize: arr[9], textAlign: "left"}}>{arr[12]}</p>
              <h4 className="hh4" style={{ fontSize: arr[22] }}>{arr[15]}</h4>
              <p style={{ color: arr[8], fontSize: arr[9], textAlign: "left"}}>{arr[12]}</p>
            </div>
            <div className="d">
              <img className="img1" src={img1} alt="none" />
            </div>
          </div>
        </div>

        <div className="page3" id="features">
          <div className="iflex">
            <div className="e">
              <img className="img2" src={img2} alt="none" />
            </div>
            <div className="f">
              <h2 className="hh11s" style={{ fontSize: arr[21] }}>{arr[17]}</h2>
              <h4 className="hh4" style={{ fontSize: arr[22],fontWeight: "1600" }}>{arr[18]}</h4>
              <p style={{ color: arr[10], fontSize: arr[11], textAlign: "left"}}>{arr[16]}</p>
              <h4 className="hh4" style={{ fontSize: arr[22] }}>{arr[19]}</h4>
              <p style={{ color: arr[10], fontSize: arr[11], textAlign: "left" }}>{arr[16]}</p>
            </div>
          </div>
        </div>

        <div className="page5" id="pricing">
          <div className="iflex">
            <div className="g">
              <h2 className="hh11" style={{ fontSize: arr[21] }}>{arr[5]}</h2>
              <h4 className="hh4" style={{ fontSize: arr[22] }}>{arr[2]}</h4>
              <p style={{textAlign: "left"}}>{arr[4]}</p>
              <h4 className="hh4" style={{ fontSize: arr[22] }}>{arr[3]}</h4>
              <p style={{textAlign: "left"}}>{arr[4]}</p>
            </div>
            <div className="h">
              <img className="img3" src={img3} alt="none" />
            </div>
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

        <div>
          <Navbar className="nav-color" sticky="bottom" bg="black" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="-navbar-nav" className="order-md-1 order-0" />
              <Nav className="topnav-left">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Blogs</Nav.Link>
                <Nav.Link href="#pricing">Privacy Policy</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default App;
