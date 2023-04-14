import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './footer.css';
import { Modal, Button, Form } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">

        <div className="gpt3__possibility-content">
          <h6 className="gradient__text"><h3 style={{ fontSize: "600", color: "white" }}>Akshay</h3></h6>
          <p> Not thoughts all exercise blessing. Indulgence way<br /> everything joy alteration boisterouse the attachment.</p>
        </div>
      </div>
      <div>
        <div className="gpt3__navbar-sign">
          <p><a href="#home">Home</a></p>
          <p><a href="#possibility">About</a></p>
          <p><a href="#features">Specifications</a></p>
          <p><a href="#blog">Library</a></p>
          <p variant="primary" onClick={handleShow}>Sign in</p>
          <Modal show={show1}
            onHide={handleClose1}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your number"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company name"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose1}>
                Close
              </Button> */}
              <Button variant="primary" onClick={handleClose1}>
                Register
              </Button>
            </Modal.Footer>
          </Modal>
          <Button variant="primary" onClick={handleShow}>
            Sign Up
          </Button>

          <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Paassword</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Login
              </Button>
              <Button variant="primary" onClick={handleClose}>
              Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div style={{float:"right"}}>
          <SocialIcon url="https://github.com/as906871" style={{ height: 35 , position:"relative", width: 35, marginRight:"20px" , marginTop:"50px"}} />
          <SocialIcon url="https://www.linkedin.com/in/as906871/" style={{ height: 35, width: 35, position:"relative",  marginRight:"20px",marginTop:"50px"  }} />
          <SocialIcon network="twitter" bgColor="#ff5a01"  style={{ height: 35, width: 35, marginRight:"20px" , position:"relative" , marginTop:"50px"}}/>
          <SocialIcon url="https://www.youtube.com/" style={{ height: 35, width: 35 , marginRight:"20px" , position:"relative", marginTop:"50px"}} />
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p variant="primary" onClick={handleShow1}>Sign in</p>
              <Modal show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your number"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your company name"
                        autoFocus
                      />
                    </Form.Group>

                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose1}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>



              <Button variant="primary" onClick={handleShow}>
                Sign Up
              </Button>

              <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="*********"
                        autoFocus
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Footer;
