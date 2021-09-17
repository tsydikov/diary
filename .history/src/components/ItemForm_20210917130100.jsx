import React, { useState } from 'react';
import Button from '../UI/Buttons/Button';

const ItemForm = ({ create }) => {
  const [title, setTitle] = useState('')

  const addNewItem = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      title,
      comments: []
    }
    create(newItem)
    setTitle('')
  }

  return (
    <div className="container-fluid px-0" >
      <h3 className="h3">Items</h3>
      <div className="row p-2">
        <div className="col-8 ">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="input"
            type="text"
            placeholder="Type name first..."
          />
        </div>
        <div className="col-4 p-0">
          <Button type="submit" onClick={addNewItem} >Add new</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;