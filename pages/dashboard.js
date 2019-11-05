import React from 'react'
import Link from 'next/link'

import HttpsRedirect from 'react-https-redirect';
import axios from 'axios'
import moment from 'moment/moment.js'
import DashboardComp from '../components/Dashboard'
import Head from '../components/head'
import 'antd/dist/antd.css'





function Dashboard () {

  

  return (

    [
    

      <HttpsRedirect key="https">
        <Head key = "Head"/>,
  
        <DashboardComp key = "Login" />
      </HttpsRedirect>

      
    
    ]
    
   

  )
}

export default Dashboard