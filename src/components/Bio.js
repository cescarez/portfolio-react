import React from 'react';
import { Image } from 'react-bootstrap';
import bioPic from '../images/christabel.png';

const Bio = () => {

  return (
    <div className='bio__div'>
      <h2>Hi, I'm Christabel</h2>
      <Image src={bioPic} roundedCircle />
    </div>
  )
}

export default Bio;