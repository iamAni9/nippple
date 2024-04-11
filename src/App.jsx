import React, { useState } from 'react'
import Navbar from './Navbar'
import './index.css';
import DesignOne from './DesignOne';
import DesignTwo from './DesignTwo';
import DesignThree from './DesignThree';
import ImageCard from './ImageCard';
import { Routes, Route } from "react-router-dom"

function App() {
  var [a, b] = useState(69);
  return (
    <>
      <Navbar name="Hello"/>
      <Routes>
        <Route path="/" element={<DesignOne />} />
        <Route path="/DesignTwo" element={<DesignTwo />} />
        <Route path="/DesignThree" element={<DesignThree />} />
        <Route path="/DesignFour" element={<ImageCard />} />
      </Routes>
    </>
  )
}

export default App