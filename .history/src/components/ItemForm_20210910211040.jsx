import React, { useState } from 'react';
import Button from '../UI/Buttons/Button';

const ItemForm = () => {
    const [title, setTitle] = useState('')
    return (
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
    );
};

export default ItemForm;