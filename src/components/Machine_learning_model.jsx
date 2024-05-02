import React, { Component } from 'react'
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Carousel, Container,Modal,Image, ModalTitle } from 'react-bootstrap';
import imagen_table from "../images/data_table.png";
import bosque from "../images/bosque.png";
import randomf from "../images/random-forest.png";
import data_apple from "../images/data_apple_tree.png";
import roc from "../images/ROC.png";
import Matriz_c from "../images/Matriz_c.png";
import appletree from "../images/apple_tree.png";
import gifa from "../images/Apple_gif.gif";
import { useState } from 'react';

export default function Machine_learning_model() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    return (
      <Element name={"Machine_learning"} id="machine_learning">
        <Container className="text-center">
          <Title>
          <h2>Machine Learning Model</h2>
          <div className="underline"></div>
          </Title>
        </Container>
     
            <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: '650px',  marginBottom: '150px' }}>
              <CardBody style={{display: 'flex', flexDirection: 'column'}} >
                <CardTitle className='text-center text-success'><h3> Which machine learning model do we choose? </h3></CardTitle>
                <CardSubtitle className='text-center text-info-emphasis '><h4> "🌲Random Forest Classifier🌲"</h4></ CardSubtitle>
                  
                  <CardText className="text-center">
                    Random Forest Classifier is a supervised learning algorithm that builds multiple decision trees during training and combines their predictions to improve accuracy and generalization in classification problems.
                   </CardText>
                   <CardSubtitle className='text-center text-info-emphasis '><h5> Random Forest Classifier diagram📊</h5></ CardSubtitle>
                   <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
                      <img src={bosque} alt="table" style={{ width: '70px', height: '70px' }} />
                  </a>
                  <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
                    
                  </a>
                  <CardText className='text-center'> Click on the forest to see the image 😊🌲</CardText>
                  <CardTitle className='text-center text-success'><h3> How does our model behave with the data we are studying?</h3></CardTitle>
                  <CardText className="text-center">
                  The behavior of our data with our apple dataset is a very good option to predict our output variable (This data is treated with the cross-validation method) then you will test them with different decision trees to predict the output variable and at the end you make a decision by vote and the result will come out. 
                   </CardText>
                   <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal2(true); }}>
                      <img src={data_apple} alt="table" style={{ width: '90px', height: '90px' }} />
                  </a>
                  <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal2(true); }}>
                    
                  </a>
                  <CardText className='text-center'> Click on the apple tree to see the image 😊🍎🌳</CardText>
              </CardBody>
            
            </Card>
      
      
          <Card className="mx-auto mt-4" style={{ maxWidth: '700px', height:'550px',   marginBottom: '100px' }}>
            <CardBody style={{display: 'flex', flexDirection: 'column'}} >
            <CardTitle className='text-center text-warning'><h3>🌳How good is the model with our data?🍎</h3></CardTitle>
          
            <div className="text-center">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowModal3(true); }}>
                      <img src={roc} alt="table" style={{ width: '650px', height: '400px' }} />
                  </a>
                  </div>
                  <CardText className="text-center">
                  🍎🌳❗Click on the image to see it better and know the explanation of it.
                  </CardText>
              </CardBody>
            </Card>
   
          <Card className="mx-auto mt-4" style={{ maxWidth: '700px',height:'550px',  marginBottom: '100px' }}>
            <CardBody style={{display: 'flex', flexDirection: 'column'}} >
            <CardTitle className='text-center text-info'><h3>Confusion Matrix 🌳🤔</h3></CardTitle>
            <div className="text-center">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowModal4(true); }}>
                      <img src={Matriz_c} alt="table" style={{ width: '650px', height: '400px' }} />
                  </a>
                  </div>
                  <CardText className="text-center">
                  🍎🤔❗ Click on the image to see it better
                  </CardText>
              </CardBody>
            </Card>
            <Card className="mx-auto mt-4" style={{ maxWidth: '700px',height:'740px',  marginBottom: '100px' }}>
            <CardBody style={{display: 'flex', flexDirection: 'column'}} >
            <CardTitle className='text-center text-info'><h3> Preliminary conclusions  🧠🍎🔥❗</h3></CardTitle>
                   
                  <CardText className="text-center">
                  In our preliminary conclusions we can say that our random forest classification model is a good model to predict the quality of apples, since it has an AUC of 0.95 in the 1000 cross-validation iterations that were done and a good performance in the matrix of confusion, which indicates that it is a good model for predicting. quality of the apple although we also analyze different averages of the metrics such as:
          
                 <ul className="list-group text-center">
                      <li className="list-group-item">Accuracy: 0.88</li>
                      <li className="list-group-item">Precision: 0.87</li>
                      <li className="list-group-item">Recall: 0.90</li>
                      <li className="list-group-item">F1-score: 0.88</li>
                    </ul>
                    </CardText>
                    <CardText className="text-center">
                    This type of model is widely used in data classification and data prediction, as it is a model that is based on several decision trees and voting on the results that came out the most in the trees, in this case a vote for the apple that came out the most in the trees.  This can be applied to different similar data for different fruits or foods.                  
                    </CardText>
                    <div className="text-center">
                    <img src={gifa} alt="table" style={{ width: '250px', height: '200px' }} />
                    </div>
                    
                  
              </CardBody>
            </Card>
        
          {/* Additional Carousel Items */}
   
        <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="modal-lg" >
    
          <Modal.Header closeButton >
              <ModalTitle className='text-success'>
              <h3 className='text-center '>🌲Random Forest Classifier diagram🌲</h3>
              </ModalTitle>
          
          </Modal.Header>
          <Modal.Body>
          <Image src={randomf} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto', display: 'block' }} />
          <p className=' text-center  text-black '>
              Random forest classifier uses several classification trees so it will give a result that would be the prediction value, it will make a vote with the result that came out the most in the trees.
              </p>
            
          </Modal.Body>
          </Modal>
          <Modal show={showModal2} onHide={() => setShowModal2(false)} dialogClassName="modal-lg" >
    
          <Modal.Header closeButton >
              <ModalTitle className='text-warning text-center '>
              <h3>Diagram of the model related to our topic.</h3>
              </ModalTitle>
            
          </Modal.Header>
          <Modal.Body>
         
              <Image src={appletree} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto', display: 'block' }} />
              <p className=' text-center  text-black '>
              As you'll see in the diagram above, the random forest classifier model is a model that is based on several decision trees (in this case apple trees) 

              They train with different data and a vote is made with the results that came out the most in the trees, in this case a vote for the apple that came out the most in the trees.
              </p>
          </Modal.Body>
          </Modal>
          <Modal show={showModal3} onHide={() => setShowModal3(false)} dialogClassName="modal-lg" >
    
          <Modal.Header closeButton >
              <ModalTitle className=' text-warning-emphasis  text-center '>
              <h4> ROC (Receiver-Operating-Characteristic)</h4>
              </ModalTitle>
            
          </Modal.Header>
          <Modal.Body>
              <Image src={roc} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto',display: 'flex', justifyContent: 'center' }} />
              <p className=' text-center  text-black '>
              This graph helps us understand how our binary classification model behaves at different classification thresholds. The ROC curve is a graphical representation of the sensitivity versus specificity for a binary classification system as the classification threshold is varied, in simpler forms it is the relationship between the true positive rate (TPR) and the false positive rate (FPR) for different classification thresholds if the curve is above the diagonal is a good model in our case it can be considered that if it's a good model in our case.
            
              </p>
              <p className=' text-center  text-black '>
         
As you will see the AUC is 0.95 in our 1000 iterations that we tested the average of this reflects us that e is a good model , we can also apply the different metrics and it will come out with a good performance 🔍🍎.
              </p>
          </Modal.Body>
          </Modal>
        <Modal show={showModal4} onHide={() => setShowModal4(false)} dialogClassName="modal-lg" >
        
        <Modal.Header closeButton >
            <ModalTitle className=' text-warning-emphasis  text-center '>
            <h4>🌲Confusion Matrix 🌳🤔</h4>
            </ModalTitle>
        
        </Modal.Header>
        <Modal.Body>
            <Image src={Matriz_c} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto',display: 'flex', justifyContent: 'center' }} />
            <p className=' text-center  text-black '>
            The confusion matrix is a tool that allows us to visualize the performance of a ranking algorithm. Each column in the array represents the number of predictions in each class, while each row represents the instances in the actual class.

            The values on the main diagonal of the confusion matrix represent the number of correct predictions (True Positives and True Negatives), while the values outside the main diagonal represent the number of incorrect predictions (False Positives and False Negatives).

               
        
            </p>
            <p className=' text-center  text-black '>
           In our case, the confusion matrix shows us that our model works well, since most predictions in the different iterations had good hits with the actual values. 🍎
            </p>
        </Modal.Body>
        </Modal>
      </Element>
    );
}

