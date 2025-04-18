import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Container, Nav, Navbar } from "react-bootstrap";
// Images
import Logo from "./defaultNavLogo.svg";
import image_icon from "../images/iconM.png";

// #region styled-components
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid;
  border-color: #F92417;

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
   
  }
`;
const styleborder = {
   borderbottom: '1px solid red'

};

const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

function ThemeToggle() {
  const { theme, toggleTheme, closeExpanded } = useAppContext();

  return (
    <StyledSwitch onClick={closeExpanded}>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>
        {theme === "light" ? (
          <Icon icon="game-icons:sunflower" />
        ) : (
          <Icon icon="game-icons:moon" />
        )}
      </div>
    </StyledSwitch>
  );
}
// #endregion

// #region component
const propTypes = {
  Logo: PropTypes.node.isRequired,
};

const defaultProps = {
  Logo: Logo,
};
//aqui se debe de cambiar el contenido de la barra de navegacion
export default function NavBar({ Logo }) {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();
  const navLinks = {
    routes: [
      { id: "1R", name: "Home", route: "/" },
     
    ],
    to: [
      { id: "1T", name: "Home", to: "Home" },
      { id: "2T", name: "About Us", to: "About" },
      { id: "3T", name: "Description", to: "Description" },
      { id: "4T", name: "Dataset behavior", to: "Dataset_behavior" },
      { id: "5T", name: "Machine learning Model", to: "Machine_learning" },
      { id: "6T", name: "Neural Network Model", to: "Neuronal_Network" },
      { id: "7T", name: "Final Conclusion", to: "Final_Conclusion" },
    ],
  };

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
        style={{ borderBottom: '2px solid red', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}

      >
        <Container>
          <Navbar.Brand>
            <img
              alt="Logo"
              src={image_icon}
              width="35"
              height="35"
              className="rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link"
                          onClick={closeExpanded}
                          offset={-100} // Ajuste el valor negativo según sea necesario

                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
            </Nav>
            <Nav>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion
