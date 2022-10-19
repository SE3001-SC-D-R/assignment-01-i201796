import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Checkout from './Checkout'
import Thankyou from './Thankyou'

export default function RouterPages() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Checkout />}/>
        <Route path="/thankyou" element = {<Thankyou />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
