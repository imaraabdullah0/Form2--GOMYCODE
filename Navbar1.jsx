import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar1.css';

function Navbar1() {
  return (
    <>
      <Navbar className='navbar'  variant="dark" >
        <div className='container justify-content-between' >
          <div className='logo col' href="#home"><strong>A.imara</strong></div>
          <Nav className="me-auto ">
            <Nav.Link className='' href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default Navbar1;


// import React from 'react';
// // import Nav from 'react-bootstrap/Nav';
// // import NavDropdown from 'react-bootstrap/NavDropdown';


// const Navbar = () => {
  
//   return (
//     <div>

//     </div>
//   );
// }
// export default Navbar