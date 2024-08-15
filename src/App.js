import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  const [switchMode, setSwitchMode] = useState('light');

  function handleDarkMode() {
    if (switchMode === "light") {
      setSwitchMode("dark");
      document.body.style.backgroundColor = "rgb(22 22 69)"
      showAlert("Enabled Dark Mode🌛", "info")
      document.title = "TextUtils - Dark Mode"
    } else {
      setSwitchMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("TextUtils - Enabled Light Mode🔆", "info")
      document.title = "TextUtils -  Light Mode"


    }
  }

  const [alert, setAlert] = useState("");
  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert("null")
    }, 3500);
  }

  return (
    <>
      <Router>

        <Navbar title="TextUtils" mode={switchMode} EnableDarkMode={handleDarkMode} />
        <Alert alert={alert} />
        <div className="container">

        <Routes>
            <Route exact path="/" element={<TextArea heading="Text To Manipulate" mode={switchMode} EnableDarkMode={handleDarkMode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About heading2="Example TextArea" heading1="E-mail" mode={switchMode} EnableDarkMode={handleDarkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Default route */}
          </Routes>


        </div>
      </Router>

    </>
  );
}

export default App;