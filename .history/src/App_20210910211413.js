import React, { useState } from "react";
import Button from "./UI/Buttons/Button";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Items from "./components/Items";
import ItemForm from "./components/ItemForm";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Regular item', comments: [1, 2, 3, 4, 5] },
    { id: 2, title: 'Regular item', comments: [1, 2, 3, 4] },
    { id: 3, title: 'Regular item', comments: [1, 2, 3] },
    { id: 4, title: 'Regular item', comments: [1, 2] },
  ])
  const createItem = (newItem) => {
    setItems([...items, newItem])
  }

  
  return (
    <div className="container-fluid" >
      <div className="row " >
        <div className="col-3 px-0" >
          <Navbar />
        </div>
        <div className="col-5">
          <ItemForm create={createItem}/>
          <Items items={items} />
        </div>
        <div className="col-4">
          Column
    </div>
      </div>
    </div>
  );
}

export default App;
