import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Navigationbar = () => {
  return (
    <>
      <Navbar className="bg-body" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/180px-React_Logo_SVG.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Training
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/products/productsList"}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">David</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Outlet /> */}
    </>
  );
};

export default Navigationbar;
