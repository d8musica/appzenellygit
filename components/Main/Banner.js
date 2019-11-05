import React,  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Row,Col,Tabs,InputNumber } from 'antd';
import QueueAnim from 'rc-queue-anim';
import axios from 'axios'
import moment from 'moment/moment.js'
import { reject } from 'any-promise';


const { TabPane } = Tabs;



async function Initial_BTC () {

  const new_value = await axios('https://www.bitstamp.net/api/v2/ticker/btcusd/')
        .then(function (new_value) {          

          
          return new_value.data.bid     
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })

  return new_value

}





function onChangeBuyBTC(value) {  

  if (typeof value != 'number') {
    console.log("please input numeric values only for BTC")
  } else {
    
    setBuyBTC(value)
    
    return value
    
  }

}
function onChangeSellBTC(value) {  

  if (typeof value != 'number') {
    console.log("please input numeric values only for BTC")
  } else {
    
    setSellBTC(value)
    
    return value
    
  }

}


function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

function Banner({onEnterChange,initial_values}) {

  var usdcop = initial_values.usdcop
  var btcusd = initial_values.btcusd

  

  
  
  
  
  
  
  const [btc_value,update_btc_value] = useState(btcusd)
  const [usd_cop,setUsd_cop] = useState(usdcop) 
  const [inputBuyBTC,setBuyBTC]=useState(1)
  const [inputSellBTC,setSellBTC]=useState(1)
  
  
  
  var buyprice=btc_value*usdcop
  var sellprice=btc_value*usdcop  
  

  
  
  
  
  

  



  

  

  useEffect(() => {

      async function Update () {

        const new_value = await axios('https://www.bitstamp.net/api/v2/ticker/btcusd/')
        .then(function (new_value) {

          update_btc_value(new_value.data.bid)
          buyprice=btc_value*usdcop*0.91
          sellprice=btc_value*usdcop          
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
             
      }
      setInterval(Update ,60000)

  }, []);

  


  

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
              <p key="content">Zenelly llega para brindar<br></br> seguridad, respaldo y confianza <br></br> para que puedas comprar y vender <br></br>tus bitcoins de forma ágil y eficiente.</p>
              <span className=" line" key="line" />
              <div key="button1" className="start-button clearfix">
                <a href="/signup">
                  COMIENZA AHORA
                </a>
              </div>
              
            </QueueAnim>
            
          </ScrollElement>
        </section>
      </Col>

      <Col lg={12} sm={24} xs={24}>
        <div className="banner">

          <div className ="tabs">
            <Tabs className="tabs-inner" defaultActiveKey="1" size ="large">
              <TabPane tab="Compra" key="1">
                <h2>Ingresa la cantidad de BTC que deseas comprar</h2><InputNumber min={0} max={10} defaultValue={1} step={0.001} onChange={onChangeBuyBTC,setBuyBTC} /><br></br>
                <h2>Valor en COP:</h2> {Math.round((buyprice*inputBuyBTC)).toLocaleString()}
              </TabPane>
              <TabPane tab="Vende" key="2">
                <h2>Ingresa la cantidad de BTC que deseas vender</h2><InputNumber min={0} max={10} defaultValue={1} onChange={onChangeSellBTC,setSellBTC} />
                <h2>Valor en COP:</h2> {Math.round((sellprice*inputSellBTC)).toLocaleString()}              
              </TabPane>            
            </Tabs>

            
            
          </div>
        </div>
      </Col>


    </Row>
    
  );
}

Banner.propTypes = {
  onEnterChange: PropTypes.func,
  
};




export default Banner