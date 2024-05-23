import React from 'react'
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Container,Modal,Image, ModalTitle } from 'react-bootstrap';

import ojito from "../images/ojito.png";
import { Magnifier } from "react-image-magnifiers";

import 'react-medium-image-zoom/dist/styles.css';
import red_dibujo from "../images/red_dibujo.png";
import extraño from "../images/extraño.png";
import Accuracy from "../images/Accuracy-Recovery.png";
import conf_r_M from "../images/conf_r_M.png";
import red_neuronal from "../images/red_neuronal.png";
import loss_curve from "../images/Training Loss Curve.png";
import { useState } from 'react';
import gifaN from "../images/rA.gif";
export default function Neuronal_Network() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);

    return (
      <Element name={"Neuronal_Network"} id="neuronal_network">
        <Container className="text-center">
          <Title>
          <h2>Neural Network Model</h2>
          <div className="underline_red"></div>
          </Title>
        </Container>
     
        <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
                <CardTitle className='text-center' style={{color:'#FF5733'}}><h3> Do you need help to know in a simple way how to apply Neural Network to our data?  📎</h3></CardTitle>
  
                
                   <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
                      <img src={ojito} alt="table" style={{ width: '140px', height: '140px' }} />
                  </a>
                  <CardSubtitle className='text-center  '><h5> Click on the apple with the mysterious eye 👁️‍🗨️</h5></ CardSubtitle>
               
                  <CardTitle className='text-center' style={{color:'#FF8E33'}}><h3>What type of neural network are we analyzing? 🤔</h3></CardTitle>
                  <CardText className="text-center">
                  The neural network we have assembled has 20 neurons and 3 layers with ReLu activation function, which is excellent for the task of classifying apples. The input layer can receive the various features of the data set. The hidden layers allow us to process this information in a complex way, discovering patterns not obvious to the naked eye. Finally, the output layer determines whether an apple is good or bad. This deep and densely connected configuration allows the network to learn a wide variety of distinctive characteristics of apples, resulting in accurate and efficient classification. 
                   </CardText>
                   <a className='text-center' href="#" onClick={(e) => { e.preventDefault(); setShowModal2(true); }}>
                      <img src={extraño} alt="table" style={{ width: '140px', height: '140px' }} />
                  </a>
           
                  <CardSubtitle className='text-center  '><h5>Click on this “Strange” apple to see the neural network design 👻.</h5></ CardSubtitle>
              </CardBody>
            
            </Card>
            <Container className="text-center">
            <Title>
          <h2>Model performance graphs</h2>
          <div className="underline_red"></div>
          </Title>
          </Container>
          <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
            <CardTitle className='text-center text-warning'><h3>What does the Precision-Recovery Curve tell us? 👂</h3></CardTitle>
          
            <div className="text-center">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowModal3(true); }}>
                      <img src={Accuracy} alt="table"className="img-fluid" style={{ maxHeight: '400px' }} />
                  </a>
                  </div>
                  <CardText className="text-center">
                  🔎❗Click on the image to see it better and know the explanation of it.
                  </CardText>
              </CardBody>
            </Card>
   
            <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
            <CardTitle className='text-center text-info'><h3>Confusion Matrix 👁️‍🗨️🤔</h3></CardTitle>
            <div className="text-center">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowModal4(true); }}>
                      <img src={conf_r_M} alt="table" className="img-fluid" style={{ maxHeight: '400px' }} />
                  </a>
                  </div>
                  <CardText className="text-center">
                  ❗ Click on the image to see it better
                  </CardText>
              </CardBody>
            </Card>
            <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
            <CardTitle className='text-center ' style={{color:'#F241F6'}}><h3>Loss Curve</h3></CardTitle>
             
      
            <div className="text-center">
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowModal5(true); }}>
                      <img src={loss_curve} alt="table" className="img-fluid" style={{ maxHeight: '400px' }} />
                  </a>
                  </div>
                  <CardText className="text-center">
                  ❗ Click on the image to see it better
                  </CardText>
              
                    
                  
              </CardBody>
            </Card>
            <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
            <CardTitle className='text-center' style={{color:'#A323A'}}><h3> Preliminary conclusions 🍎🍏🧠</h3></CardTitle>
                   
                  <CardText className="text-center">
                  In this preliminary conclusion, the neural network model provides adequate training on our data oriented to a classification neural network generated good performance in the 1000 test and training iterations, however, the performance provided by the model is questionable in certain metrics. 
                 <ul className="list-group text-center">
                      <li className="list-group-item">Accuracy:0.72</li>
                      <li className="list-group-item">Precision: 0.73</li>
                      <li className="list-group-item">Recall: 0.71</li>
                      <li className="list-group-item">F1-score: 0.72</li>
                    </ul>
                    </CardText>
                    <CardText className="text-center">
                    The metrics may vary depending on the hyperparameters one takes, but the neural network demonstrated rapid learning efficiency at the beginning of training, which is reflected in the sharp decrease in loss. This suggests that the network is able to adjust its internal parameters (weights and biases) effectively to minimize the error in predictions.                
                    </CardText>
                    <div className="text-center">
                    <img src={gifaN} alt="table" style={{ width: '250px', height: '200px' }} />
                    </div>
              </CardBody>
            </Card>
        
          {/* Additional Carousel Items */}
   
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered >
    
          <Modal.Header closeButton >
              <ModalTitle style={{color:'#F92417',alignItems:'center',margin:'0 auto'}}>
              <h3 className='text-center '>Analogical view of Neural Network 👁️</h3>
              </ModalTitle>
          
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image 
            className="w-70 "
            fluid 
            style={{ maxHeight: '400px'}} src={red_dibujo}/>
          <p className=' text-center  text-black ' style={{marginTop:'2rem'}}>
          Let's imagine you have a basket full of apples and you want to sort them into good and bad. To do this, we must observe the characteristics of the apples. Neural networks work in a similar way, but instead of a person, it is a computer system that learns to classify. Just as you would learn to distinguish between good and bad apples from experience, a neural network learns from examples 👁️‍🗨️.              </p>
            
          </Modal.Body>
          </Modal>
          <Modal show={showModal2} onHide={() => setShowModal2(false)} size="lg" centered >
    
          <Modal.Header closeButton >
              <ModalTitle className='text-warning text-center '>

              <h3>Neural network diagram </h3>
              </ModalTitle>
            
          </Modal.Header>
          <Modal.Body style={{ maxWidth: '750px', margin: '0 auto' }}>
          <Magnifier
          imageSrc={red_neuronal}
          imageAlt="Neural Network Diagram"
     
          mouseActivation="hover"
          cursorStyle="crosshair"
          zoomFactor={2}  // Ajusta este valor para cambiar el nivel de zoom
      
        />
          
        
          </Modal.Body>
          </Modal>
          <Modal show={showModal3} onHide={() => setShowModal3(false)} size="lg" centered >
    
          <Modal.Header closeButton  className='align-items-center'>
              <ModalTitle className=' text-warning-emphasis  text-center '>
              <h4 style={{color:'#F92417'}}> Accuracy Recovery Curve</h4>
              </ModalTitle>
            
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image 
            className="w-70 "
            fluid 
            style={{ maxHeight: '400px'}}
             src={Accuracy} />
              <p className=' text-center  text-black '>
              The precision-recall curve, used to evaluate the performance of a binary classification model, focuses on the relationship between precision (the proportion of true positives among all predicted positive cases) and recall (the proportion of true positives detected with respect to the total number of true positives).
              <ul className="list-group text-center">
                      <li className="list-group-item"><strong style={{color:'#3387FF'}}>The blue line 🔵: </strong>represents the precision for each recall level, and as you can see they decrease as the recall increases, which is common since increasing the capture of positive cases usually implies accepting more false positives, thus reducing the precision.</li>
                      <li className="list-group-item"><strong style={{color:'#FA3030'}}>The red dot 🔴:</strong> indicates the point at which the maximum F1 score is obtained, which is a measure that combines precision and recovery into a single number by means of its harmonic mean. A value that gave us F1 of 1.00 indicates a perfect balance between precision and recovery, which is ideal considering that we did 1000 iterations in the training.</li>
                      <li className="list-group-item"><strong style={{color:'#30F0FA'}}>The AUC ⏺️:</strong> indicates that the area under the precision-recall curve is 0.80, which is generally considered a good result, meaning that the model has good classification recognition 🤌.</li>
                     
                    </ul>
              </p>
              <p className=' text-center  text-black '>
            <strong>              As you will see the AUC is 0.80 in our 1000 iterations that we tested in our neural network model. 👁️👻
</strong>
              </p>
          </Modal.Body>
          </Modal>
        <Modal show={showModal4} onHide={() => setShowModal4(false)} size="lg" centered >
        
        <Modal.Header closeButton >
            <ModalTitle className=' text-center '>
            <h4 style={{color:'#554C84'}}>Neural network confusion matrix🤔</h4>
            </ModalTitle>
        
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image 
            className="w-70 "
            fluid 
            style={{ maxHeight: '400px'}}
            src={conf_r_M} />
            <p className=' text-center  text-black '>
            In this case, the confusion matrix of our neural network model shows us that our model performs well but has a considerable percentage in false positives and false negatives even so most predictions different iterations had good results. 📎
            </p>
          
        </Modal.Body>
        </Modal>
        <Modal show={showModal5} onHide={() => setShowModal5(false)} size="lg" centered >
        
        <Modal.Header closeButton >
            <ModalTitle className=' text-center '>
            <h4 style={{color:'#554C84'}}>Training Loss Curve🤔</h4>
            </ModalTitle>
        
        </Modal.Header>
        <Modal.Body>
            <Image src={loss_curve} fluid className="img-fluid" style={{ maxHeight: '400px', maxWidth: '750px', margin: '0 auto',display: 'flex', justifyContent: 'center' }} />
            <p className=' text-center  text-black '>
            The training loss curve of our neural network shows a rapid initial decline and subsequent stabilization, indicating that the model has effectively learned from the data. The rapid decrease in loss suggests adequate initial adaptation of the model weights from their starting values. Stabilization of the loss at a low value suggests that the model has reached convergence and shows no signs of overfitting, indicating good performance. 👁️‍🗨️
            </p>
          
        </Modal.Body>
        </Modal>
        
      </Element>
    );
}

