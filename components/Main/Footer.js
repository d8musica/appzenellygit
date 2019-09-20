
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Zenelly</h2>
              <div>
                <a target="_blank " href="/index">
                  Inicio
                </a>
              </div>
              <div>
                <a href="">Quienes somos</a>
              </div>
              <div>
                <a href="">Políticas</a>
              </div>
              <div>
                <a href="">Términos y condiciones</a>
              </div>
              
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Aprende</h2>
              <div>
                <a href="">¿Qué es el Bitcoin?</a>                
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">Ayuda y soporte</a> 
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">Trabaja con nosotros</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">Quejas y reclamos</a>                
              </div>
              
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Social</h2>
              <div>
                <a href="/changelog">
                  Instagram
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">
                  Facebook
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">
                  Twitter
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="">
                  WhatsApp
                </a>
              </div>
              
            </div>
          </Col>
          
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          
          <span style={{ marginRight: 12 }}>Zenith Software </span>
          <span style={{ marginRight: 12 }}>Copyright © 2019</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
