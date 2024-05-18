import React from 'react'
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Container,Modal,Image, ModalTitle } from 'react-bootstrap';


import trofeo from "../images/trofeito.gif";

import 'react-medium-image-zoom/dist/styles.css';
import graf_cf from "../images/graf_cf.png";
import { useState } from 'react';
export default function Final_Conclusion() {
    const [showModal, setShowModal] = useState(false);
   

    return (
      <Element name={"Final_Conclusion"} id="final_Conclusion">
        <Container className="text-center">
          <Title>
          <h2>Final Conclusion</h2>
          <div className="underline_yellow"></div>
          </Title>
        </Container>
     
        <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
                <CardTitle className='text-center' style={{color:'#F6E516'}}><h3>What can we say about both models?</h3></CardTitle>
  
                <CardText className="text-center">
                In conclusion, our Random Forest classification model is suitable for predicting the quality of apples, with an AUC of 0.95 in 1000 cross-validation iterations and a good performance in the confusion matrix. The metrics obtained are:
                <ul className="list-group text-center">
                      <li className="list-group-item">Accuracy: 0.88</li>
                      <li className="list-group-item">Precision: 0.87</li>
                      <li className="list-group-item">Recall: 0.90</li>
                      <li className="list-group-item">F1-score: 0.88</li>
                    </ul>
                    </CardText>
                    <CardText className="text-center">
                    This type of model is widely used in data classification and prediction, based on multiple decision trees and voting on the predominant outcomes in the trees.            
                    </CardText>
                    <CardText className="text-center">
                    Comparatively, the neural network model, while showing efficiency in initial learning, underperformed in the metrics evaluated:


                    <ul className="list-group text-center">
                      <li className="list-group-item">Accuracy:0.72</li>
                      <li className="list-group-item">Precision: 0.73</li>
                      <li className="list-group-item">Recall: 0.71</li>
                      <li className="list-group-item">F1-score: 0.72</li>
                    </ul>
                    </CardText>
                    <CardText className="text-center">
                    Therefore, we chose the Random Forest model for its better performance in predicting apple quality.
                    </CardText>
                   <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
                      <img src={trofeo} alt="table" style={{ width: '140px', height: '140px' }} />
                  </a>
                  <CardSubtitle className='text-center  '><h5> Click on the trophy to see the performance difference graph 🏆.</h5></ CardSubtitle>
               
                
              </CardBody>
            
            </Card>
           
   
      
        
          {/* Additional Carousel Items */}
   
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered >
    
          <Modal.Header closeButton >
           
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image 
            className="w-70 "
            fluid 
            style={{ maxHeight: '400px'}} src={graf_cf}/>
      
            
          </Modal.Body>
          </Modal>
         
        
      </Element>
    );
}

