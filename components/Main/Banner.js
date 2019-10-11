import React,  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Row,Col,Tabs,InputNumber } from 'antd';
import QueueAnim from 'rc-queue-anim';
import axios from 'axios'
import moment from 'moment/moment.js'


const { TabPane } = Tabs;



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

function Banner({onEnterChange,btc_initial_value}) {

  
  
  
  var date = moment().format();
  date = date.slice(0,10)
  var url = 'https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciadesde=' 
  var url = url + date + 'T00:00:00.000'

  const [btc_value,update_btc_value] = useState(btc_initial_value.btc_initial_value)
  const [usd_cop,setUsd_cop] = useState(0) 
  const [inputBuyBTC,setBuyBTC]=useState(1)
  const [inputSellBTC,setSellBTC]=useState(1)
  
  
  var lastTRM = 3300
  

  var buyprice = btc_value*usd_cop*0.9 
  var sellprice = btc_value*usd_cop 

  const new_USD = axios(url)
        .then(function (new_USD) {
          
          if((new_USD.length > 0) == true){
            console.log('entro')
            setUsd_cop(new_USD.data[0].valor)
            lastTRM = (new_USD.data[0].valor)
          }else{
            setUsd_cop(lastTRM)
          }

          
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
                <a>
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
                <h2>Valor en COP:</h2> {Math.round(buyprice*inputBuyBTC)}
              </TabPane>
              <TabPane tab="Vende" key="2">
                <h2>Ingresa la cantidad de BTC que deseas vender</h2><InputNumber min={0} max={10} defaultValue={1} onChange={onChangeSellBTC,setSellBTC} />
                <h2>Valor en COP:</h2> {Math.round(sellprice*inputSellBTC)}              
              </TabPane>            
            </Tabs>

            {console.log(usd_cop)}
            
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