import React,  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Row,Col,Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import fetch from 'isomorphic-unfetch';
import axios from 'axios'








function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

function Banner({onEnterChange,btc_initial_value}) {

 
  
  const [btc_value,update_btc_value] = useState(btc_initial_value.btc_initial_value)

  
  const [usd_cop,setUsd_cop] = useState(0)

  const new_USD = axios('https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciadesde=2019-10-3T00:00:00.000')
        .then(function (new_USD) {                  
          setUsd_cop(new_USD.data[0].valor)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  
  

  
  

  useEffect(() => {

      async function Update () {

        const new_value = await axios('https://www.bitstamp.net/api/v2/ticker/btcusd/')
        .then(function (new_value) {

          update_btc_value(new_value.data.bid)          
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
        console.log(btc_value)        

      }

      



      setInterval(Update ,60000)
      
      
      

  }, []);

  var u = btc_value*usd_cop*0.9

  

  return (
    
    

    <Row className="page banner-wrapper">
      <Col lg={12} sm={24} xs={24} >
        <section >
          <ScrollElement
            className="page"
            id="banner"
            onChange={({ mode }) => onEnterChange(mode)}
            playScale={0.9}
          >
            <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
              <h2 key="h2">Compra y vende tus <br></br> Bitcoin <p>AQUÍ</p></h2>
              <p key="content">Zenelly llega para brindar<br></br> seguridad, respaldo y confianza <br></br> para que puedas para comprar y vender <br></br>tus bitcoins de forma ágil y eficiente.</p>
              <span className=" line" key="line" />
              <div key="button1" className="start-button clearfix">
                <a>
                  COMIENZA AHORA
                </a>
              </div>
              
            </QueueAnim>
            
          </ScrollElement>
        </section>
      </Col>

      <Col lg={12} sm={24} xs={24}>
        <section>
          BTC/USD: {btc_value}<br></br>USD/COP: {usd_cop}<br></br>BTC/COP: {u}
        </section>
      </Col>


    </Row>
    
  );
}

Banner.propTypes = {
  onEnterChange: PropTypes.func,
  
};




export default Banner