import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import christabelPic from '../images/christabel.jpg';
import christabelPic2 from '../images/christabel.png';

const Bio = () => {

    return (
        <div className='bio__div mt-2'>
            <h2>Hi, I'm Christabel</h2>
            <div class="container-fluid">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-4">
                        <Image src={christabelPic} roundedCircle fluid className='mw-750'/>
                    </div>
                    <div class="col-lg-6">
                        <h4>Beyond the Keyboard</h4>
                        <p>I live in Portland, OR with my partner and dog. In my off hours, I like to repair old laptops, pet my dog, and play table top RPG games (currently looking for a Pathfinder 2e table!)</p>
                        <h4>Behind the Keyboard</h4>
                        <p>Please take a look at my <Link to='/portfolio'>portfolio</Link> and <Link to='/resume'>resume</Link> for work and project history.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;