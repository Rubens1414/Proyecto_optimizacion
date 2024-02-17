import styled from "styled-components";

import { Element } from "react-scroll";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
// Importen la imagen
import perfil from "../images/perfil.png";
const StyledAboutUs = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

//Aqui se debe de cambiar el contenido de nosotros solo se debe de cambiar el contenido de los parrafos y las imagenes

export default function AboutUs() {


  return (
    <Element name={"About"} id="about">
      <StyledAboutUs className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Us</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>Crear biografia para Rubens</p>
           
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>Rol de la persona</p>
              </ContentContainer>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>Crear biografia para Manuel</p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>Rol de la persona</p>
              </ContentContainer>
           
            </Col>
            
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>Crear biografia para Jose</p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>Rol de la persona</p>
              </ContentContainer>
           
            </Col>
            
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>Crear biografia para German</p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>Rol de la persona</p>
              </ContentContainer>
            </Col>
            
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>Crear biografia para Kevin</p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>Rol de la persona</p>
              </ContentContainer>
            </Col>
            
          </Row>
        </Container>
      </StyledAboutUs>
    </Element>
  );
}
