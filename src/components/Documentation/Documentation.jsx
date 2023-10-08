import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Documentation.css';
// import Footer from "../components/Footer/Footer";
// import UnderlineExample from "../components/navBar/navBar";

const Documentation = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <h4>Table of Contents</h4>
              <ul>
                <li><a href="#section-1">Section 1</a></li>
                <li><a href="#section-2">Section 2</a></li>
                <li><a href="#section-3">Section 3</a></li>
                <li><a href="#section-4">Section 4</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <section id="section-1">
            <h2>Section 1</h2>
            <p>Lorem ipsum dolor sit amet. Ab quia sunt At doloribus porro eum blanditiis officia id mollitia 
                ducimus id voluptatem eaque. Et ducimus dolore aut odio facere id iste officia.
                Non libero unde sed sint velit ea nesciunt soluta. Est odit saepe ut voluptas iste sit similique 
                exercitationem ut enim veritatis et sunt galisum et earum quaerat. Et accusantium odio qui exercitationem 
                dolor id rerum inventore eum aliquam minima ea placeat possimus a culpa dolores ut dolor voluptates. 
                Sit molestias accusantiuibero sed dolorum perspiciatis qui dolorem omnis est animi veritatis sit vitae dolores.</p>
          </section>

          <section id="section-2">
            <h2>Section 2</h2>
            <p>Lorem ipsum dolor sit amet. Ab quia sunt At doloribus porro eum blanditiis officia id mollitia 
                ducimus id voluptatem eaque. Et ducimus dolore aut odio facere id iste officia.
                Non libero unde sed sint velit ea nesciunt soluta. Est odit saepe ut voluptas iste sit similique 
                exercitationem ut enim veritatis et sunt galisum et earum quaerat. Et accusantium odio qui exercitationem 
                dolor id rerum inventore eum aliquam minima ea placeat possimus a culpa dolores ut dolor voluptates. 
                Sit molestias accusantiuibero sed dolorum perspiciatis qui dolorem omnis est animi veritatis sit vitae dolores.</p>
          </section>

          <section id="section-3">
            <h2>Section 3</h2>
            <p>Lorem ipsum dolor sit amet. Ab quia sunt At doloribus porro eum blanditiis officia id mollitia 
                ducimus id voluptatem eaque. Et ducimus dolore aut odio facere id iste officia.
                Non libero unde sed sint velit ea nesciunt soluta. Est odit saepe ut voluptas iste sit similique 
                exercitationem ut enim veritatis et sunt galisum et earum quaerat. Et accusantium odio qui exercitationem 
                dolor id rerum inventore eum aliquam minima ea placeat possimus a culpa dolores ut dolor voluptates. 
                Sit molestias accusantiuibero sed dolorum perspiciatis qui dolorem omnis est animi veritatis sit vitae dolores.</p>
          </section>

          <section id="section-4">
            <h2>Section 4</h2>
            <p>Lorem ipsum dolor sit amet. Ab quia sunt At doloribus porro eum blanditiis officia id mollitia 
                ducimus id voluptatem eaque. Et ducimus dolore aut odio facere id iste officia.
                Non libero unde sed sint velit ea nesciunt soluta. Est odit saepe ut voluptas iste sit similique 
                exercitationem ut enim veritatis et sunt galisum et earum quaerat. Et accusantium odio qui exercitationem 
                dolor id rerum inventore eum aliquam minima ea placeat possimus a culpa dolores ut dolor voluptates. 
                Sit molestias accusantiuibero sed dolorum perspiciatis qui dolorem omnis est animi veritatis sit vitae dolores.</p>
          </section>
        </Col>
      </Row>
    </Container>
   
  );
};

export default Documentation;
