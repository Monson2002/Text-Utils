import NavBar from './components/NavBar';
import TextUtils from './components/TextUtils';
import React, { useState } from 'react'
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
  
    <>
      <BrowserRouter>
        <NavBar title="Text Utility" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<TextUtils mode={mode} toggleMode={toggleMode} />}/> 
          <Route path="/about" element={<About mode={mode} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
