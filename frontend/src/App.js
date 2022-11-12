import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Checkout from './Pages/Checkout';
import Thankyou from './Pages/Thankyou'

function App() {
  return (
    <div data-testid = "AppDiv" className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Checkout />}/>
        <Route path="/thankyou" element = {<Thankyou />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;