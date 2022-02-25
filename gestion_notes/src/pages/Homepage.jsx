import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import { Col, Row,} from 'react-bootstrap'



export default function Homepage(){

    return (
          <div className='mt-5'>
            <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/image1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/image2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/image3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        <div className='mt-5'>
            <Row xs={1} md={2} className="g-4">
                 

                          <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image13.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image10.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                  
                            <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image12.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                  
                  <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image17.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                  This is a longer card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                  
                  
          </Row>
        </div>
     </div>
    )

}