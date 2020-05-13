import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar, Form, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import './header.css';

class Header extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <>
        <div className="header__notification">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <Container>
          <Navbar className="bg-light">
            <Row style={{width: '100%'}}>
              <Col className="header__horizantal-center" xs={3} md={3} sm={3}>
                <Form inline>
                  <FontAwesomeIcon icon={faSearch}/>
                  <input type="text"/>
                </Form>
              </Col>
              <Col className="header__logo" xs={6} md={6} sm={6}>
                <img src="http://www.gobi.mn/imgs/icons/gobi.png" alt="logo"/>
              </Col>
              <Col className="header__right header__horizantal-center" xs={3} md={3} sm={3}>
                <FontAwesomeIcon icon={faHeart}/>
                <FontAwesomeIcon icon={faShoppingBag}/>
              </Col>
            </Row>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;