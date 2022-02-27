import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'

export default function HomePage(props) {
  
  /*
  const id = useParams(); 
  console.log("param", props?.match?.params); 
  console.log("param 2", id);

*/
    const [infosTeacher, setInfosTeacher] = useState({})
   

   // const userEns = useLocation();
   // const {id} = this.props.route.params;
   // const navigate = useNavigate()

    useEffect(() => {
        getInfosForOneTeacher()
    }, [])


    async function getInfosForOneTeacher() {
      // const data = localStorage.getItem("apiRes1")
      // let data = localStorage.getItem("apiRes1");
      //  data = JSON.parse(data);

      //  console.log("data userEns" , data)

       // const datas = await axios.get('http://localhost:3100/authcheckerEns/6218c00812faa2772c5a1dea', {param: {session: data}})
     /*   axios.get('http://localhost:3100/authchecker').then((datas) => {

        console.log(datas)
        console.log(datas.data)

        })

        */

        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log(data.nom)
        console.log(data.prenom)
        console.log(data.role)



        
     
    }


    return (
        
<Container>
  <br/>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./carnet1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./carnet2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./carnet3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </Container>

    )
}
