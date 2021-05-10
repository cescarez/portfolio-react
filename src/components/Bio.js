import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import christabelPic from '../images/christabel.jpg';
import christabelPic2 from '../images/christabel.png';

const Bio = () => {

    return (
        <div className='bio__div'>
        <h2>Hi, I'm Christabel</h2>
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-4">
                    <Image src={christabelPic} roundedCircle fluid />
                </div>
                <div class="col-lg-6">
                    <h4>Before the Keyboard</h4>
                    <p>Some descriptors etc etc</p>
                    <h4>Beyond the Keyboard</h4>
                    <p>Some descriptors etc etc</p>
                    <h4>Behind the Keyboard</h4>
                    <p>Please take a look at my <Link to='/portfolio'>portfolio</Link> and <Link to='/resume'>resume</Link> for work and project history.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Bio;