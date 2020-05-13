import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Collapsible from 'react-collapsible';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Navbar, Form, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import './footer.css';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function Footer() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };  
    return (
      <>
      <div className="expandFooter">
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="Title">
            <Col xs={12} md={12} sm={12}>
            <Row>
              <Col xs={12} md={2} sm={6}>
            <p className="expandTitle"><strong>Бидний тухай</strong></p>
            </Col>
            <Col xs={12} md={2} sm={6}>
            <p className="expandTitle"><strong>Үйлчилгээ</strong></p>
            </Col>
            <Col xs={12} md={2} sm={6}>
            <p className="expandTitle"><strong>Сошиал медиа</strong></p>
            </Col>
            <Col xs={12} md={2} sm={6}>
            <p className="expandTitle"><strong>Туслалцаа</strong></p>
            </Col>
            <Col xs={12} md={4} sm={12}>
            <p className="contactUs"><strong>Бидэнтэй холбогдох</strong></p>
            </Col>
            </Row>
            </Col>
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="Title">
            <Row>
            <div className="mdList">
            <Col xs={12} md={2} sm={6}>
          <ul>
              <li>
                <a>footer1</a>
              </li>
              <li>
                <a>footer2</a>
              </li>
              <li>
                <a>footer3</a>
              </li>
            </ul>
            </Col>
            </div>
            <div className="mdList">
            <Col xs={12} md={2} sm={6}>
          <ul>
              <li>
                <a>footer1</a>
              </li>
              <li>
                <a>footer2</a>
              </li>
              <li>
                <a>footer3</a>
              </li>
            </ul>
            </Col>
            </div>
            <Col xs={12} md={2} sm={6}>
            <ul>
              <li>
              <FontAwesomeIcon className="icons-facebook" icon={faFacebook} />
                <a>Facebook</a>
              </li>
              <li>
                <FontAwesomeIcon className="icons-insta" icon={faInstagram}/>
                <a>Instagram</a>
              </li>
              <li>
                <FontAwesomeIcon className="icons-facebook" icon={faTwitter}/>
                <a>Twitter</a>
              </li>
            </ul>
            </Col>
            <div className="mdList">
            <Col xs={12} md={2} sm={6}>
            <ul>
              <li>
                <a>footer1</a>
              </li>
              <li>
                <a>footer2</a>
              </li>
              <li>
                <a>footer3</a>
              </li>
            </ul>
            </Col>
            </div>
            <div>
              <Col xs={12} md={4} sm={12}>
              <Row>
              <Col xs={12} md={12} sm={12}>
                <Row>
                <Col xs={12} md={8} sm={12}>
                  <p>Name:</p>
                </Col>
                
                <Col xs={12} md={4} sm={12}>
                  <Form inline>
                    <input type="text"/>
                  </Form>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={8} sm={12}>
                  <p>Email:</p>
                </Col>
                
                <Col xs={12} md={4} sm={12}>
                  <Form>
                    <input type="text"/>
                  </Form>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={8} sm={12}>
                  <p>Message:</p>
                </Col>
                
                <Col xs={12} md={2} sm={12}>
                  <Form>
                    <input type="text"/>
                  </Form>
                </Col>
                <Col xs={12} md={2} sm={12}>
                  <Button>Илгээх</Button>
                </Col>
                </Row>
              </Col>
                
              </Row>
              </Col>
            </div>
            </Row>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      <div className="Container">
        <Col xs={12} md={12} sm={12}>
          <Row>
          
          <Col className="column" xs={12} md={3} sm={6}>
            <div className="list">
            <Collapsible trigger="Бидний тухай">
            <ul>
              <li>
                <a>footer1</a>
              </li>
              <li>
                <a>footer2</a>
              </li>
              <li>
                <a>footer3</a>
              </li>
            </ul>
            </Collapsible>
            </div>
          </Col>
          <Col xs={12} md={3} sm={6}>
          <div className="list">
          <Collapsible trigger="Үйлчилгээ">
            <ul>
              <li>
                <a>footer2.1</a>
              </li>
              <li>
                <a>footer2.2</a>
              </li>
              <li>
                <a>footer2.3</a>
              </li>
            </ul>
            </Collapsible>
            </div>
          </Col>
          <Col xs={12} md={3} sm={6}>
          <div className="list">
          <Collapsible trigger="Сошиал медиа">
            <ul>
              <li>
                <FontAwesomeIcon className="icons-facebook" icon={faFacebook}/>
                <a>Facebook</a>
              </li>
              <li>
                <FontAwesomeIcon className="icons-insta" icon={faInstagram}/>
                <a>Instagram</a>
              </li>
              <li>
                <FontAwesomeIcon className="icons-facebook" icon={faTwitter}/>
                <a>Twitter</a>
              </li>
            </ul>
            </Collapsible>
            </div>
          </Col>
          <Col xs={12} md={3} sm={6}>
          <div className="list">
          <Collapsible trigger="Туслалцаа">
            <ul>
              <li>
                <a>footer4.1</a>
              </li>
              <li>
                <a>footer4.2</a>
              </li>
              <li>
                <a>footer4.3</a>
              </li>
            </ul>
            </Collapsible>
            </div>
          </Col>
          </Row>
        </Col>
      </div>
      <div className="Copyrigth">
        <Col xs={12} md={12} sm={12}>
          <p>2020 @Gobi cashmere</p>
        </Col>
      </div>
    </>
    );
  }
