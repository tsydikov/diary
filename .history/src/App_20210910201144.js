import React, { useState } from "react";
import Button from "./UI/Buttons/Button";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([
    {id:1, title: 'Regular item', comments:[1,2,3,4,5]},
    {id:1, title: 'Regular item', comments:[1,2,3,4]},
    {id:1, title: 'Regular item', comments:[1,2,3]},
    {id:1, title: 'Regular item', comments:[1,2]},

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
         {items.map(item =>
          <Item item={item} />
          <hr/>
          )}
        </div>
        <div class="col-4">
          Column
    </div>
      </div>
    </div>
  );
}

export default App;
