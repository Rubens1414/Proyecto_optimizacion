import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import { Card, CardBody, CardText, CardTitle, Carousel, Container } from 'react-bootstrap';
import imagen_manzana from "../images/manzana.png";
import imagen_manzanas from "../images/manzanas.png";
import machine_learning from "../images/machine-learning.png";
import bad_a from "../images/bad_a.png";
import good_a from "../images/good_a.png";

export default function Description() {
 
  return (
    <Element name={"Description"} id="Description">
      <Container className="text-center">
        <Title>
        <h2>Description</h2>
        <div className="underline"></div>
        </Title>
      </Container>
      <Carousel
      prevIcon={<span style={{ color: 'red', fontSize: '4rem', padding: '0.5rem', pointerEvents: 'auto' }}>&#8249;</span>}
      nextIcon={<span style={{ color: 'red', fontSize: '4rem', padding: '0.5rem', pointerEvents: 'auto' }}>&#8250;</span>}
      indicatorClassName="custom-indicator"
      indicatorLabel={(index) => {
        return <span style={{ backgroundColor: 'red' }}>{index}</span>;
      }}

>
        <Carousel.Item >
        <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '110px'}}>
      <CardBody className="d-flex flex-column">
              <CardTitle className='text-center text-success'><h3>Which dataset did we choose?</h3></CardTitle>
              <CardText className="text-center">
              It is a set of data from different samples where we find different parameters and descriptions of a fruit that in this case would be the apple, where they describe different parameters to detect if it is good or not.
              </CardText>
              <div className="text-center">
                <a href="https://www.kaggle.com/datasets/nelgiriyewithana/apple-quality" target="_blank" rel="noreferrer">
                  <img src={imagen_manzana} className="img-fluid   " alt="Manzana" style={{ maxWidth: '80px', }}/>
                </a>
                <p>Click me! :D</p>
              </div>
              <CardTitle className='text-center text-warning'><h3>What do we plan to do with this dataset?</h3></CardTitle>
              <CardText className="text-center">
              This dataset will attempt to train an image-based deep learning model to classify the apple.
              </CardText>
              <div className="text-center">
              <a href="https://www.w3schools.com/ai/" target="_blank" rel="noreferrer" >
                  <img src={imagen_manzanas} className="img-fluid" alt="Manzanas" style={{ maxWidth: '80px', }}/>
                  <img src={machine_learning} className="img-fluid" alt="Machine Learning"style={{ maxWidth: '80px', }} />
                </a>
              </div>
            </CardBody>
          
          </Card>
         
        </Carousel.Item>
        <Carousel.Item >
        <Card className="mx-auto mt-4" style={{ maxWidth: '850px', height: 'auto', marginBottom: '150px' }}>
      <CardBody className="d-flex flex-column">
              
              <CardTitle className='text-center text-info'><h3>What is our objective?</h3></CardTitle>
              <CardText className="text-center">
              Our goal is to develop a model that can analyze and determine whether they are of good or poor quality, from a set of labeled data, either giving the required parameters or if possible an image of it.
                <div className="d-flex justify-content-center">
                  <img src={good_a} className="img-fluid" alt="Good"  style={{ maxWidth: '80px', }}/>
                  
                </div>
              </CardText>
              <CardTitle className='text-center text-danger'><h3>What is the purpose of this project?</h3></CardTitle>
              <CardText className="text-center">
              The goal of this project is to provide a tool that can help people sort their apples in a more efficient way.(If this is possible, it can be generalized to all fruits)
                <div className="d-flex justify-content-center">
                  <img src={bad_a} className="img-fluid" alt="Bad"  style={{ maxWidth: '80px', }}/>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Carousel.Item>
    
        {/* Additional Carousel Items */}
      </Carousel>
    </Element>
  );
}
