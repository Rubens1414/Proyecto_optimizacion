import styled from "styled-components";

import { Element } from "react-scroll";
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";


// Global Components es mas que nada para darle estilo.
import { Title } from "./globalStyledComponents";
import { Button, Col, Container, Row } from "react-bootstrap";
import imagen_manzana from "../images/manzana.png";
import imagen_manzanas from "../images/manzanas.png";
import machine_learning from "../images/machine-learning.png";
import bad_a from "../images/bad_a.png";
import good_a from "../images/good_a.png";


export default function Description() {
  const styles = {
    card: {
      maxWidth: '1100px',
      maxHeight: '90vh',
      paddingBottom: '200px',
      paddingTop: '-2px',
      paddingLeft: '20px',
      paddingRight: '20px',
      marginBottom: '100px',
      borderRadius: '50px',
      borderColor: '#61DAFB',
      borderWidth: '3px',
      borderStyle: 'solid',
      backgroundColor: '#f8f9fa',
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '120px',
      marginLeft: '120px',
    },
  };
  const stylesc = {
    inter: {
     
      marginBottom: '100px',
     
    },
  };

  return (
    <Element name={"Description"} id="Description">
      <Container className="text-center">
        <Title>
          <h2>Description</h2>
          <div className="underline"></div>
        </Title>
      </Container>
      <Carousel style={stylesc.inter} >
        <Carousel.Item>
          <Card style={styles.card} className=" h-75 ">
            <CardBody>
            <subTitle className='text-center text-success'>
             <h3> Which dataset did we choose?</h3>
         
            </subTitle>
              <CardText className="text-center">
              It is a dataset of different samples where we find different parameters and descriptions of the fruit itself.
              </CardText>
            
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className=" mb-2 ">
                <a href="https://www.kaggle.com/datasets/nelgiriyewithana/apple-quality" target="_blank" rel="noreferrer">
                <img
                  src={imagen_manzana}
                  loading="lazy"
                  style={{ width: "4rem", height: "4rem" }}
                />
                </a> 
                Click me! :D
              </div>
          
            <cardText>

            <subTitle className='text-center text-warning'>
          <h3> What do we plan to do with this dataset?</h3>
         
         </subTitle>
                 
              </cardText>
              <div className=" mx-xl-5 pb-3 ">
              <CardText className="text-center ">
              This dataset will be used to train an image-based Deep Learning model for binary classification of apple quality.
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <a href="https://www.w3schools.com/ai/" target="_blank" rel="noreferrer">
                <img
                  src={imagen_manzanas}
                  loading="lazy"
                  style={{ width: "4rem", height: "4rem" }}
                />
                  <img
                  src={machine_learning}
                  loading="lazy"
                  style={{ width: "4rem", height: "4rem" }}
                />
                </a>
              
              </div>
              </CardText>
              </div>
              <subTitle className='text-center text-info'>
             <h3>What is our objective?</h3>
         
            </subTitle>
              <CardText className="text-center">
              The objective is to develop a model that can analyze and determine whether they are of good or bad quality, based on a set of labeled data.
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
               <div>
                <img
                  src={good_a}
                  loading="lazy"
                  style={{ width: "4rem", height: "4rem" }}
                />
                  <img
                  src={bad_a}
                  loading="lazy"
                  style={{ width: "4rem", height: "4rem" }}
                />
                </div>
                
              </div>
              </CardText>
            </CardBody>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={styles.card}>
            <CardBody>
              <cardText>
                ¿Que contiene el dataset?
              </cardText>
              <CardText>
                El dataset contiene atributos como: el identificador único de la
                manzana, imágenes RGB de las manzanas, tamaño, peso, dulzura,
                crujiente, jugosidad, madurez, acidez y la etiqueta de calidad
                general (buena o mala).
              </CardText>
            </CardBody>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={styles.card}>
            <CardBody>
              <CardText>
                Este tipo de modelo tiene aplicaciones potenciales en la industria
                agrícola, sistemas de control de calidad en la cadena de suministro
                de alimentos y desarrollo de robots para la cosecha selectiva de
                manzanas.
              </CardText>
            </CardBody>
          </Card>
        </Carousel.Item>
        
      </Carousel>
    </Element>
  );
}
