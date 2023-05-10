import React from "react";
import { useUserAuth } from "../context/AuthContext";
import {
  Button,
  Card,
  CardGroup,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

const Home = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Coding Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {user && user.displayName ? user.displayName : user.email}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="row mt-1 mx-2 rounded-md py-lg-5 bg-title bg-no-repeat bg-cover bg-center">
        <div className="col-lg-6 col-md-8 mx-auto backdrop-blur-sm ">
          <p className="lead text-body-secondary text-center text-white font-serif font-extrabold text-xl backdrop-blur-sm">
            This is coding blog website. Website to learn new things and explore
            new technology. A great place to learn language
          </p>
        </div>
      </div>

      <div className="cards my-5 mx-5">
        <CardGroup>
          <Card className="mx-2">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Home;
