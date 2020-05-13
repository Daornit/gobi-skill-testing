import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import './header.css';

class Header extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <Container>
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch}/>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>

          <div className="header__middle">
            <img src="http://www.gobi.mn/imgs/icons/gobi.png" alt="logo"/>
          </div>

          <div className="header__right">
            <FontAwesomeIcon icon={faHeart}/>
            <FontAwesomeIcon icon={faShoppingBag}/>
          </div>
        </Navbar>
      </Container>
    );
  }
}

export default Header;