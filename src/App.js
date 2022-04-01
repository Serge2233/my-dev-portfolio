import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";


function App() {
  //Declare variables for nav 
  const [onHome, selectedHome] = useState(true);
  const [onContact, selectedContact] = useState(false);
  const [onAbout, selectedAbout] = useState(false);
  const [onPortfolio, selecetedPortfolio] = useState(false);
  const [onResume, selectedResume] = useState(false);

  return (
    <section>
      {/* Send variables to nav */}
      <NavbarFunction  
          onHome={onHome}selectedHome={selectedHome}
          onContact={onContact}selectedContact={selectedContact}
          onAbout={onAbout}selectedAbout={selectedAbout}
          onPortfolio={onPortfolio}selecetedPortfolio={selecetedPortfolio}
          onResume={onResume}selectedResume={selectedResume}
          />
          {/* If variable == true show that component */}
          {onHome ? (<Home />):("")}
          {onContact ? (<Contact onContact={onContact}selectedContact={selectedContact}/>):("")}
          {onAbout ? (<About/>):("")}
          {onPortfolio ? (<Portfolio/>):("")}
          {onResume ? (<Resume/>):("")}
     </section>
     

  );
}

export default App;
