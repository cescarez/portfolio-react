import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import christabelPic from '../images/christabel.jpg';
import christabelPic2 from '../images/christabel.png';

const Bio = () => {
    const bioCarousel = () => {
        return (
        <Carousel pause='hover'>
            <Carousel.Item>
            <img
                className="center d-block w-50"
                src={christabelPic}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Pothos <em> - Rover for Plants!</em></h3>
                <a href="" class="build">App</a>
                <p>Full stack web app: Javascript/React front end, Python/Flask back end. External APIs: Google Firebase for cloud storage and authentication, Google Maps Geocoding, and USPS Address Verification.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-50"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                src={christabelPic2}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        )
    }

    return (
        <div className='bio__div'>
        <h2>Hi, I'm Christabel</h2>
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-6">
                <Image src={christabelPic} roundedCircle fluid />
            </div>
            <div class="col-lg-6">
                <h4>Bio description</h4>
                <p>Some descriptors etc etc</p>
                <h4><a href='#/resume'>Resume</a></h4>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Bio;