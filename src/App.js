import React from "react";
import "./App.css"
import Main from "./pages/Main";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import LoginApplicant from "./pages/LoginApplicant";
import RegisterApplicant from "./pages/RegisterApllicant";
import Layout from "./Layout/Layout";
function App() {

  return (
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/applicantregister" element={<RegisterApplicant />} />
      <Route exact path="/applicantlogin" element={<LoginApplicant />} />
      <Route exact path="/layout" element={<Layout />} />
     

    
  </Routes>
  </Router>
  </>
  );
}

export default App;
