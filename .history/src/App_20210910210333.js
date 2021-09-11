import React, { useState } from "react";
import Button from "./UI/Buttons/Button";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Regular item', comments: [1, 2, 3, 4, 5] },
    { id: 2, title: 'Regular item', comments: [1, 2, 3, 4] },
    { id: 3, title: 'Regular item', comments: [1, 2, 3] },
    { id: 4, title: 'Regular item', comments: [1, 2] },
  ])
  const [title, setTitle] = useState('')

  const addNewItem = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      title,
      comments: []
    }
    setItems([...items, newItem])
    setTitle('')
  }
  return (
    <div className="container-fluid" >
      <div className="row " >
        <div className="col-3 px-0" >
          <Navbar />
        </div>
        <div className="col-5">
          <div className="container-fluid px-0" >
            Items
            <div className="row p-2">
              <div className="col-8 ">
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="form-control me-2"
                  type="text"
                  placeholder="Type name first..."
                />
              </div>
              <div className="col-4 p-0">
                <Button onClick={addNewItem} >Add new</Button>
              </div>
            </div>
          </div>
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
