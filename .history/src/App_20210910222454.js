import React, { useState } from "react";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Items from "./components/Items";
import ItemForm from "./components/ItemForm";
import Comments from "./components/Comments";

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
  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="container-fluid" >
      <div className="row " >
        <div className="col-2 px-0" >
          <Navbar />
        </div>
        <div className="col-6">
          <div className="items_cotainer">
            <ItemForm create={createItem} />
            <Items items={items} remove={removeItem} />
          </div>
        </div>
        <div className="col-4">
          <Comments />
    </div>
      </div>
    </div>
  );
}

export default App;
