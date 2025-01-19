import React from 'react'
import { Helmet } from 'react-helmet'
import Home from '../companents/Home'
import Robotics from '../companents/Robotics'
import Features from '../companents/Features'
import Blog from '../companents/Blog'

function Main() {
  return (
    <>
    <Helmet>
    <link rel="icon" type="image/svg+xml" href="https://is.gd/eNUvT8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Main</title>
    </Helmet>
    <Home />
    <Robotics/>
    <Features/>
    <Blog/>
  </>
  )
}

export default Main
