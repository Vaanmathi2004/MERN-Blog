import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}
