/*********************************************************************************
*  WEB422 – Assignment 5
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Manoj Dhami____________________ Student ID: ___121613202_______________ Date: ___7/21/2023_________________
*
********************************************************************************/ 

import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art, colloquially known as "The Met," is located in New York City's Central Park. It is one of the world's largest and most comprehensive art museums, with collections spanning thousands of years and various cultures.
          </p>
        </Col>
        <Col md={6}>
          <p>
            The museum's collection includes works of art from ancient Egypt, classical antiquity, European paintings and sculptures, American art, modern and contemporary art, and much more. The Met is a must-visit destination for art enthusiasts from around the globe.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">
            Learn more about The Met on Wikipedia
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Home;
