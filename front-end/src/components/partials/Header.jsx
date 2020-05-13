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
          <Row style={{width: '100%'}}>
            <Col className="header__horizantal-center" xs={3} md={3} sm={3}>
              <Form inline>
                <div className="header__search">
                  <FontAwesomeIcon icon={faSearch}/>
                </div>
                <input type="text" placeholder="хайлт хийх"/>
              </Form>
            </Col>
            <Col className="header__logo" xs={6} md={6} sm={6}>
              <a href="/">
                <img src="http://www.gobi.mn/imgs/icons/gobi.png" alt="logo"/>
              </a>
            </Col>
            <Col className="header__right header__horizantal-center" xs={3} md={3} sm={3}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHeart}/>
                </li>
                <li>
                  <FontAwesomeIcon icon={faShoppingBag}/>
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{width: '100%'}}>
              <Col className="header__menu" xs={12} md={12} sm={12}>
                <ul>
                  <li>
                    <a href="#" className="active">Эмэгтэй</a>
                  </li>
                  <li>
                    <a href="#">Эрэгтэй</a>
                  </li>
                  <li>
                    <a href="#">Гэр ахуй</a>
                  </li>
                  <li>
                    <a href="#">Аксессуар</a>
                  </li>
                  <li>
                    <a href="#">Коллекци</a>
                  </li>
                  <li>
                    <a href="#">Хямдрал</a>
                  </li>
                </ul>
              </Col>
            </Row>
        </Container>
      </>
    );
  }
}

export default Header;