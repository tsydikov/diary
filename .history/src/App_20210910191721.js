import React from "react";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  return (
    <div class="container-fluid" >
      <div class="row " >
        <div class="col-3 px-0" >
          <Navbar />
    </div>
        <div class="col-5">
          Items
          Form
          <div>
            <div>
              POST<span class="badge rounded-pill bg-info text-dark">Info</span>
            </div>
          </div>
    </div>
        <div class="col-4">
          Column
    </div>
      </div>
    </div>
  );
}

export default App;
