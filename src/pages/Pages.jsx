import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import React from 'react'

function Pages() {
  return (
    
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/cuisine" element = {<Cuisine/>}/>
    </Routes>
  )
}

export default Pages