import React from 'react'
import Link from 'next/link'

import HttpsRedirect from 'react-https-redirect';
import axios from 'axios'
import moment from 'moment/moment.js'
import Login from '../components/Login'
import Head from '../components/head'
import 'antd/dist/antd.css'





function LoginApp () {

  

  return (

    [
    

      <HttpsRedirect key="https">
        <Head key = "Head"/>,
  
        <Login key = "Login" />
      </HttpsRedirect>

      
    
    ]
    
   

  )
}

export default LoginApp