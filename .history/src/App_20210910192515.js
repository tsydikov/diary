import React from "react";
import Button from "./UI/Buttons/Button";
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
              POST<span>123</span><Button>Add new</Button>
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
