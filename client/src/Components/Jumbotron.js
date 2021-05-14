import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Silicon_Valley from '../Common/Silicon_Valley.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${Silicon_Valley}) no-repeat fixed bottom;
    background-size: cover;
    color: White;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Network Project</h1>
        <p>
          LOOGGGLLLOOGGGLLLOOGGGLLLOOGGGLLLOOGGGLLLOOGLOOGGG LLLOOGGGLLLOOGGGLLLOOGGGLLLO
          OGGGLLLOOGGGLLLOOGGGLLLOOGGGLLLOOGGGLLGGLLLOOGGGLLL OOGGGLLLOOGGGLLL OOGGGLLLOOGGGLLLOOGGGLLLOOGGGLL
        </p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
