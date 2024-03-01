import React, { Component } from 'react'
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import { Card, CardBody, CardText, CardTitle, Carousel, Container,Modal,Image, ModalTitle } from 'react-bootstrap';
import imagen_table from "../images/data_table.png";
import corre from "../images/corre.png";

import bad_a from "../images/bad_a.png";
import good_a from "../images/good_a.png";
import react, { useState } from 'react';

export default function Dataset_behavior() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <Element name={"Dataset_behavior"} id="Dataset_behavior">
      <Container className="text-center">
        <Title>
        <h2>Dataset behavior</h2>
        <div className="underline"></div>
        </Title>
      </Container>
      <Carousel
      prevIcon={<span style={{ color: 'red', fontSize: '5rem', padding: '0.5rem', pointerEvents: 'auto' }}>&#8249;</span>}
      nextIcon={<span style={{ color: 'red', fontSize: '5rem', padding: '0.5rem', pointerEvents: 'auto' }}>&#8250;</span>}
      indicatorClassName="custom-indicator"
      indicatorLabel={(index) => {
        return <span style={{ backgroundColor: 'red' }}>{index}</span>;
      }}

>
        <Carousel.Item>
          <Card className="mx-auto mt-4" style={{ maxWidth: '850px',  marginBottom: '100px' }}>
            <CardBody style={{display: 'flex', flexDirection: 'column'}} >
              <CardTitle className='text-center text-success'><h3>Dataset table</h3></CardTitle>
             
                <div className="text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
                    <img src={imagen_table} alt="table" style={{ width: '750px', height: '350px' }} />
                </a>
                </div>
                <CardText className="text-center">
                🍎❗ Click on the image to see it better
                </CardText>
             
            </CardBody>
          
          </Card>
         
        </Carousel.Item>
        <Carousel.Item>
        <Card className="mx-auto mt-4" style={{ maxWidth: '700px',  marginBottom: '100px' }}>
          <CardBody style={{display: 'flex', flexDirection: 'column'}} >
          <CardTitle className='text-center text-warning'><h3>Correlation Matrix</h3></CardTitle>
          <div className="text-center">
                <a href="#" onClick={(e) => { e.preventDefault(); setShowModal2(true); }}>
                    <img src={corre} alt="table" style={{ width: '650px', height: '350px' }} />
                </a>
                </div>
                <CardText className="text-center">
                🍎❗ Click on the image to see it better
                </CardText>
            </CardBody>
          </Card>
        </Carousel.Item>
    
        {/* Additional Carousel Items */}
      </Carousel>
      <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="modal-lg" >
  
        <Modal.Header closeButton >
            <ModalTitle className='text-success text-center '>
            <h3>Dataset table</h3>
            </ModalTitle>
          
        </Modal.Header>
        <Modal.Body>
            <Image src={imagen_table} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto' }} />
            <h4 className=' text-center  text-black '>This is a sample of the different parameters that our dataframe has</h4>
        </Modal.Body>
        </Modal>
        <Modal show={showModal2} onHide={() => setShowModal2(false)} dialogClassName="modal-lg" >
  
        <Modal.Header closeButton >
            <ModalTitle className='text-warning text-center '>
            <h3>Correlation Matrix</h3>
            </ModalTitle>
          
        </Modal.Header>
        <Modal.Body>
            <Image src={corre} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto' }} />
            <p className=' text-center  text-black '>
            The correlation matrix provided reveals several key observations.
             The values on the main diagonal are 1, indicating perfect correlation of each variable with itself. Negative and positive correlations are observed, with values varying between -1 and 1. Most of the values are close to 0, suggesting few strong linear relationships between the variables, some significant correlations stand out, such as the negative one between "Size" and "Weight", and the negative one between "Sweetness" and "Ripeness". In addition, the correlation between "Size" and "Weight" seems unusual, which could point to errors in the data or counterintuitive relationships. 
            </p>
        </Modal.Body>
        </Modal>
    </Element>
  );
}
