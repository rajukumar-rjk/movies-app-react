import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Movies
          </Nav.Link>

          <Nav.Link to="/coming-soon" as={NavLink}>
            Coming soon
          </Nav.Link>
          <Nav.Link to="/favorite-movies" as={NavLink}>
            Favorite
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
