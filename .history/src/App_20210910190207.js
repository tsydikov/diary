import React from "react";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  return (
    <div class="container-fluid" >
      <div class="row " >
        <div class="col px-0" >
          <Navbar />
    </div>
        <div class="col-5">
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
