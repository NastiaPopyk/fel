import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logoWhite from "../assets/logo.svg";

import i8next from "i18next"
import "../i18n"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LOCALS } from '../i18n/constant.js';

const Footer = () => {
  
  const{t}=useTranslation();
  return (
    <div className="footer py-5">
      <Container fluid="sm">
        <Row>
          <Col className="text-center py-3" md>
            <img src="src/assets/h1.jpg" width="100px" alt="" />
            <p className="mt-3" style={{ fontSize: "1vw" }}>
              {t('foot.f1')}
              <span className="footer-developer">Mohsin</span>
            </p>
            <p>© Beauti Cartel Dustribution</p>
          </Col>
          <Col className="text-center py-3 " md>
            <h6> {t('foot.f2')}</h6>
            <p className="mt-5">
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com" target="_blank">
                Instagram
              </a>
            </p>
            <p>
              <a href="https://www.twitter.com" target="_blank">
                Twitter
              </a>
            </p>
          </Col>
          <Col className="text-center py-3" md>
            <h6>Help</h6>
            <p className="mt-5">
              <Link to="/profile">Profile</Link>
            </p>
            <p>
              <Link to="/register">Sign Up</Link>
            </p>
            <p>
              <Link to="/login">Sign In</Link>
            </p>
          </Col>
          <Col className="text-center py-3" md>
            <h6>{t('foot.f3')} </h6>
            <p className="mt-5">+34 681 907 280</p>
            <h6>{t('foot.f4')} </h6>
            <p>+34 639 54 54 69</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
