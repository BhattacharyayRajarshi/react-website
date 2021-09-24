//jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'C:/Users/Rajarshi/Desktop/FullStack/figma/src/App.css';
import 'C:/Users/Rajarshi/Desktop/FullStack/figma/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container, NavbarBrand, Navbar, NavLink, } from 'react-bootstrap';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import vid1 from './Animation S.mp4'

function App() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><i>Abc</i>Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="-navbar-nav" className="order-md-1 order-0" />
            <Nav className="topnav-right">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="home">
        <table>
          <tr>
            <td>
              <h5>SIMPLE, SECURE, COMMISSION FREE</h5>
              <h1>Your Tool For real-world <br /> tasks</h1>
              <h6 className="hh6">Abc Bank is a banking App with zero balance savings <br /> acoount. It helps you get better with your money - <br /> one deligthful feature at the same time</h6>
              <div className="bt1">
                <Button className="bt1" variant="light"><b>Get Early Access</b></Button>
              </div>
            </td>
            <td>
              <video preload="auto" className="vid" autoPlay="true" muted playsInline>
              <source src={vid1} type="video/mp4" />
              </video>
            </td>
          </tr>
        </table>
      </div>

      <div className="page2">
        <h1 className="hh1">Banking That Works Around You</h1>
        <table>
          <tr>
            <td className="cell">
              <h2 className="hh11">Gamified Experience</h2>
              <h4 className="hh4">GET MORE BITCOIN THAN DCA</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <h4 className="hh4">INVEST AT YOUR OWN PACE</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </td>
            <td >
              <img className="img1" src={img1} alt="none" />
            </td>
          </tr>
        </table>
      </div>

      <div className="page3">
        <table>
          <tr>
            <td>
              <img className="img2" src={img2} alt="none" />
            </td>
            <td className="cell1">
              <h2 className="hh11">AI-Based Assistant</h2>
              <h4 className="hh4">AI-BASED ASSISTANT TO EASE BANKING</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <h4 className="hh4">AI-BASED ASSISTANT TO EASE BANKING</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </td>
          </tr>
        </table>
      </div>

      <div className="page2">   //Actually page 3
        <table>
          <tr>
            <td className="cell">
              <h2 className="hh11">We Nudge You To Save More</h2>
              <h4 className="hh4">WE NUDGE YOU TO SAVE MORE</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <h4 className="hh4">WE NUDGE YOU TO SAVE MORE</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </td>
            <td >
              <img className="img3" src={img3} alt="none" />
            </td>
          </tr>
        </table>
      </div>

      <div className="page4">
        <h1 className="Team">Our Team's Background</h1>
        <table className="tt">
          <tr>
            <td>
              <img className="sponsor" src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" />
            </td>
            <td>
              <img className="sponsor" src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
            </td>
            <td>
              <img className="sponsor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" />
            </td>
            <td>
              <img className="sponsor" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </td>
          </tr>
        </table>
      </div>

      <div>
        <Navbar sticky="bottom" bg="dark" variant="dark">
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

export default App;
