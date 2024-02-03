import React from 'react'
import v1 from '../assets/v1.jpg'
import Carousel from 'react-bootstrap/Carousel';
import v3 from '../assets/v3.jpg'
import v2 from '../assets/v2.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import v4 from '../assets/v4.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='pt-5 mt-2'>
         <div id='carousal'>
           <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img style={{width:'100%',height:'500px'}} className='d-block' src={v1} alt="" />
            <Carousel.Caption className='text-start' >
             <div  id='a'>
                <h1  className='text-violet-300'>India's Best Site For <br /> Real Estate</h1>
                <p className='text-violet-200 text-2xl'><br />Dream<span className='text-violet-400'>Home</span> is a best real estate site for <b className='text-orange-400'>Buy, Rent</b> <br /> and <b className='text-orange-400'>Sale</b> residential & commercial property.</p>
             </div>
            </Carousel.Caption >
          </Carousel.Item>
          <Carousel.Item>
          <img style={{width:'100%',height:'500px'}} className='d-block' src={v2} alt="" />
            <Carousel.Caption className='text-start'>
              <div id='a'>
                <h1 className='text-violet-300'>We Promise You For <br /> a Better Future</h1>
                <p className='text-violet-200 text-2xl'><br />Still searching? Your perfect home is here. <br /> Low budget and quality assured.</p>
              
              </div></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img style={{width:'100%',height:'500px'}} className='d-block' src={v3} alt="" />
            <Carousel.Caption className='text-start'>
              <div id='a'>
                <h1 className='text-orange-800'><b>Dream Homes Are <br />Now Real</b></h1>
                <p className='text-orange-300 text-2xl'>
                  Praesent commodo cursus magna, vel <br />scelerisque   nisl consectetur. Lorem <br /> ipsum dolor sit.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
         </div>
         <div className='p-4'>
          <h5>Recent Places For Rent</h5>
          <a href="">Show more..</a>

          <Link to='/listing/1' className='text-decoration-none'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={v4} />
        <Card.Body>
          <Card.Title>ABCD Villa</Card.Title>
          <Card.Text>
          <p><i className="fa-solid fa-location-dot fa-sm" style={{color: '#058703'}}></i><span className='ms-2'>Rfg JK Lane, Thrissur</span></p>
  
          This cozy 2-bedroom, 1-bathroom cottage is the perfect place to call home. Ideal for couples or small families.
          
          <p><b>2 bed   2 bathroom</b></p>
          </Card.Text>
        </Card.Body>
      </Card>
          </Link>
         </div>
         <div className='p-4'>
         <h5>Recent Places For Sale</h5>
         <a href="">Show more..</a>
          <Link to='/listing/1' className='text-decoration-none'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={v4} />
        <Card.Body>
          <Card.Title>ABCD Villa</Card.Title>
          <Card.Text>
          <p><i className="fa-solid fa-location-dot fa-sm" style={{color: '#058703'}}></i><span className='ms-2'>Rfg JK Lane, Thrissur</span></p>
  
          This cozy 2-bedroom, 1-bathroom cottage is the perfect place to call home. Ideal for couples or small families.
          
          <p><b>2 bed   2 bathroom</b></p>
          </Card.Text>
        </Card.Body>
      </Card>
          </Link>
         </div>

         
    </div>
  )
}

export default Home