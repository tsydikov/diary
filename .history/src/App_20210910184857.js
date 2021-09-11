import React from "react";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  return (
    <div class="container-fluid" >
      <div class="row " >
        <div class="col"style={{background:'red'}}>
          <Navbar />
    </div>
        <div class="col">
          Column
    </div>
        <div class="col">
          Column
    </div>
      </div>
    </div>
  );
}

export default App;
