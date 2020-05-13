import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBag, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import './header1.css';

/* 
<FontAwesomeIcon icon={faSearch}/>
<FontAwesomeIcon icon={faShoppingBag}/>
<FontAwesomeIcon icon={faHeart}/>
 */

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <nav className={(this.state.open ? 'open' : '')}>
        <div className="header__container">
          <Container className="header__main">
            <div className="header__left">
              <div className="header__search">
                <ul> 
                  <li><FontAwesomeIcon icon={faSearch}/></li>
                  {this.state.open ? <li className="togglebar" onClick={this.toggle}><FontAwesomeIcon icon={faTimes}/></li>:<li className="togglebar" onClick={this.toggle}><FontAwesomeIcon icon={faBars}/></li>}
                </ul>
                <input type="text" placeholder={" хайлт хийх"}/>
              </div>
            </div>
            <div className="header__center">
              <a href="/">
                <img src="http://www.gobi.mn/imgs/icons/gobi.png" alt="logo"/>
              </a>
            </div>
            <div className="header__right">
              <ul>
                <li>
                  <a href="#shopping">
                    <FontAwesomeIcon icon={faShoppingBag}/>
                  </a>
                </li>
                <li>
                  <a href="#favorates" style={{color: 'red'}}>
                    <FontAwesomeIcon icon={faHeart}/>
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <div className="header__menu-container">
          <Container className="header__menu"> 
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
            <hr/>
          </Container>
        </div>
        
      </nav>
    );
  }
}

export default Header;