import React, { useState } from "react";
import Button from "./UI/Buttons/Button";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([
    {id:1, title: 'regular item', comments:[]},
    {id:1, title: 'regular item', comments:[]},
    {id:1, title: 'regular item', comments:[]},
    {id:1, title: 'regular item', comments:[]},

  ])
  return (
    <div class="container-fluid" >
      <div class="row " >
        <div class="col-3 px-0" >
          <Navbar />
        </div>
        <div class="col-5">
          Items
          <div><Button>Add new</Button></div>Form
         <Item />
         <Item />
         <Item />
        </div>
        <div class="col-4">
          Column
    </div>
      </div>
    </div>
  );
}

export default App;
