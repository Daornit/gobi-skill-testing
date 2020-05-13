import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <header>
        <div className="header__left">
          <select name="category">
            <option value="1">цамц</option>
            <option value="2">өмд</option>
            <option value="3">эрэгтэй</option>
            <option value="4">эмэгтэй</option>
          </select>
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text"/>
        </div>

        <div className="header__middle">
          <img src="http://www.gobi.mn/imgs/icons/gobi.png" alt="logo"/>
        </div>

        <div className="header__right">
          <FontAwesomeIcon icon={faHeart}/>
          <FontAwesomeIcon icon={faShoppingBag}/>
        </div>
      </header>
    );
  }
}

export default Header;