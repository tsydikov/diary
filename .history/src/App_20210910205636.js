import React, { useState } from "react";
import Button from "./UI/Buttons/Button";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Regular item', comments: [1, 2, 3, 4, 5] },
    { id: 1, title: 'Regular item', comments: [1, 2, 3, 4] },
    { id: 1, title: 'Regular item', comments: [1, 2, 3] },
    { id: 1, title: 'Regular item', comments: [1, 2] },
  ])
  const [title, setTitle] = useState('')

  const addNewItem = (e) => {
    e.preventDefault()
    const newItem = {
      id:Date.now(),
      title,
      comments:[]
    }
    setItems([...items, newItem])
  }
  return (
    <div class="container-fluid" >
      <div class="row " >
        <div class="col-3 px-0" >
          <Navbar />
        </div>
        <div class="col-5">

          <div class="container-fluid px-0" >
            Items
            <div class="row p-2">
              <div class="col-8 ">
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  class="form-control me-2"
                  type="text"
                  placeholder="Type name first..."
                />
              </div>
              <div class="col-4 p-0">
                <Button onClick={addNewItem} >Add new</Button>
              </div>
            </div>
          </div>
          <Items items={items} />
        </div>
        <div class="col-4">
          Column
    </div>
      </div>
    </div>
  );
}

export default App;
