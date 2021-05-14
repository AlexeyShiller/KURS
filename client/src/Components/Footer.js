import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container fluid style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <p>Network Project</p>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
