import React from "react";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  return (
    <div class="container-fluid" >
      <div class="row " style={{background:'red'}}>
        <div class="col">
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
