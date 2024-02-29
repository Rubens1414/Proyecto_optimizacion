import styled from "styled-components";

import { Element } from "react-scroll";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
// Importen la imagen
import perfil from "../images/perfil.png";
import perfil_kevin from "../images/kevin.jpeg";
import perfil_manuel from "../images/manuel.jpeg";
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
  const styles = {
    inter: {
     
      marginBottom: '120px',
     
    },
  };

  return (
    <Element name={"About"} id="about">
      <StyledAboutUs className="section">
        <Container style={styles.inter} >
          <Container className="d-flex">
            <Title>
              <h2>About Us</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
              <p className="fs-2 text-warning">Rubens Andre Apresa Echeverria</p>
                <p className="fs-6">
I am a seventh-semester student studying System Engineering at Universidad del Norte. At 20 years old, I reside in Barranquilla. In my leisure time, I enjoy immersing myself in video games and hitting the gym. Collaboration fuels my passion, as I thrive in team environments. My creativity shines through in all my projects.</p>
           
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
                <p>Web developer 🖥️</p>
              </ContentContainer>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
              <p className="fs-2 text-info">Manuel Martinez Rincon</p>
                <p className="fs-6">
                I am a student in my sixth semester of systems engineering. Originally from Bogotá, I moved to Barranquilla with my family in 2008 at the age of five. I was enrolled in the school Lyndon B. Johnson where I graduated in 2021. I began pursuing my degree where I currently am, at the Universidad del Norte, the same year. In my personal life I have also pursued other passions, including learning foreign languages, photography and writing.
                </p>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil_manuel}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>Data Analyst 📊</p>
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
               <p className="fs-2 text-success">Kevin Ruiz Espitia</p>
                <p>Seventh semester student in systems engineering at the University of the North. I am 20 years old and I am from Monteria, thanks to a scholarship I had the opportunity to move from city in search of better opportunity. My hobbies are video games, movies and reading occasionally. I develop as a team and I provide good ideas.</p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil_kevin}   
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
