import React from 'react';
import Slider from './Slider';
import Jumbotron from './Jumbotron';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Silicon_Valley from '../Common/Silicon_Valley.jpg';

export const Home = () => (
  <main>
    <Slider />
    <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Silicon_Valley} />
            <Card.Body>
              <Card.Title>Network Project</Card.Title>
              <Card.Text>Clown Paradise</Card.Text>
              <Button variant="primary">Laern more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Silicon_Valley} />
            <Card.Body>
              <Card.Title>Network Project</Card.Title>
              <Card.Text>Clown Paradise</Card.Text>
              <Button variant="primary">Laern more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Silicon_Valley} />
            <Card.Body>
              <Card.Title>Network Project</Card.Title>
              <Card.Text>Clown Paradise</Card.Text>
              <Button variant="primary">Laern more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Button href="./AboutCom" style={{ height: '70px', width: '120px' }}>
          Create Your Сompany
        </Button>
      </Row>
    </Container>

    <Jumbotron />

    <Container style={{ marginBottom: '30px' }}>
      <Row>
        <Col md={7}>
          <img src={Silicon_Valley} height={400} />
        </Col>
        <Col md={5}>
          <h2>Network Project</h2>
          <p>qweqweqweqweqweqweqweqewqew</p>
        </Col>
      </Row>
    </Container>
  </main>
);
