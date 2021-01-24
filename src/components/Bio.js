import React from 'react';
import { Image } from 'react-bootstrap';
import bioPic from '../images/christabel.png';

const Bio = () => {

  return (
    <div className='bio'>
      <h2>Bio</h2>
      <Image src={bioPic} roundedCircle />
    </div>
  )
}

export default Bio;