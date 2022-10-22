import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from './Layout'
import Top from './Top'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Top />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
