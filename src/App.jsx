import React, { useState } from 'react'
import Navbar from './Navbar'
import './index.css';
import DesignOne from './DesignOne';
import DesignTwo from './DesignTwo';
import DesignThree from './DesignThree';
import ImageCard from './ImageCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  var [a, b] = useState(69);
  return (
    <>
      <Navbar name="Hello"/>
      {/* <Router basename="/nippple"> */}
        <Routes>
          <Route path="nippple/" element={<DesignOne />} />
          <Route path="nippple/DesignTwo" element={<DesignTwo />} />
          <Route path="nippple/DesignThree" element={<DesignThree />} />
          <Route path="nippple/DesignFour" element={<ImageCard />} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App