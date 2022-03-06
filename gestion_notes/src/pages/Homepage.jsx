import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import {Container, Col, Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'



export default function HomePage(props) { 
 
    const [infosTeacher, setInfosTeacher] = useState({})
   
    useEffect(() => {

        getInfosForOneTeacher()

    }, [])


    async function getInfosForOneTeacher() {

        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log(data.id)
        console.log(data.nom)
        console.log(data.prenom)
        console.log(data.role)
       
    }


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
                <h5>Une école au service du numérique</h5>
                <p>Formez-vous dans les plus grands domaines informatique du futur</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/image2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Une école au service du numérique</h5>
                <p>Formez-vous dans les plus grands domaines informatique du futur</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/image3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Une école au service du numérique</h5>
                <p>Formez-vous dans les plus grands domaines informatique du futur</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        <div className='mt-5'>
            <Row xs={1} md={2} className="g-4">
                 

                          <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image13.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Description</Card.Title>
                                <Card.Text>
                                  Si la Data Science connaît un essor fulgurant dans tous les secteurs d'activité, c'est parce que l'humanité génère de plus en plus de données. Entre 2011 et 2013, en seulement deux ans, le volume mondial de données a été multiplié par 9. Et cette explosion du Big Data n'a pas ralenti depuis. 
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image10.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Description</Card.Title>
                                <Card.Text>
                                  L'ECOLE-IT se distingue par son approche académique multicanal combinant expérience terrain, intervention de formateurs de qualité issus des mondes académique et professionnel, et expérimentation et apprentissage par la pratique. Nous accordons une attention particulière à l'employabilité de nos diplômés et veillons à développer les relations entreprise. 
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                  
                            <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image12.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Description</Card.Title>
                                <Card.Text>
                                  La cybersécurité protège les données et l'intégrité des ressources informatiques connectées ou installées sur un réseau d'entreprise. Elle a pour mission de défendre ces ressources contre tous les pirates, et ce tout au long du cycle d'attaque.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                  
                  <Col>
                            <Card>
                              <Card.Img variant="top" src="./img/image17.jpg"  width="50px" height="360px"/>
                              <Card.Body>
                                <Card.Title>Description</Card.Title>
                                <Card.Text>
                                  Le management agile peut être vu comme une organisation de type holistique et humaniste basée essentiellement sur la motivation rationnelle des ressources humaines. Son émergence, au début des années 1990, a été portée par la vague des nouvelles technologies
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
      
    )

}
