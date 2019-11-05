import React from 'react'
import Link from 'next/link'

import HttpsRedirect from 'react-https-redirect';
import axios from 'axios'
import moment from 'moment/moment.js'
import Main from '../components/Main'
import Head from '../components/head'
import 'antd/dist/antd.css'





function Index (props) {

  

  return (

    [
    

      <HttpsRedirect key="https">
        <Head key = "Head"/>,
  
        <Main key = "Main" props = {props}/>
      </HttpsRedirect>

      
    
    ]
    
   

  )
}

Index.getInitialProps = async function() {


  if (moment().format('dddd') == 'Saturday'){

    var date = moment().subtract(1, 'days').format();
    console.log("saturday")

  } else if (moment().format('dddd')=='Sunday'){

    var date = moment().subtract(2, 'days').format();
    console.log("sunday")

  } else if (moment().format('dddd') =='Monday'){

    var date = moment().subtract(3, 'days').format();

    console.log("monday")

  } else {

    var date = moment().format();

  }

  date = date.slice(0,10)
  var url = 'https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciadesde=' 
  url = url + date + 'T00:00:00.000'

console.log(url)
  

  
  const initial_usdcop = await axios(url).then(function (new_value) {
          
        return new_value.data[0].valor  
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  
      

  
  const initial_btc = await axios('https://www.bitstamp.net/api/ticker/').then(function (new_value) {
          
    
        return new_value.data.bid
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

   

        

  
  return {
    
    usdcop: initial_usdcop,
    btcusd: initial_btc   

  };
};



export default Index
