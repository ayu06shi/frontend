import React from 'react';
import './App.css';
import UnderlineExample from "./components/navBar/navBar";
import Footer from "./components/Footer/Footer";
import Documentation from "./components/Documentation/Documentation";

function App() {
    return (
      <div>    
        <body>
          
        <div class="back_circle"></div>
        <UnderlineExample/>
        <div class="content">
        <h1>Build your business with our API</h1>
        <p>This is api home page.</p>
        </div>
        <Documentation/>
        <Footer/>
        </body>

      </div>
    );
  }

export default App;