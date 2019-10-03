import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Main from '../components/Main'
import Head from '../components/head'
import 'antd/dist/antd.css'



function Index (props) {
  return (

    [
    
      <Head key = "Head"/>,

      <Main key = "Main" btc_initial_value = {props.btc_initial}/>

      
    
    ]
    
   

  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://www.bitstamp.net/api/v2/ticker_hour/btcusd')
  const json = await res.json() // better use it inside try .. catch
  return { btc_initial: json.bid }
}

export default Index
