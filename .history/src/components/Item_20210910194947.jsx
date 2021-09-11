import React from 'react';
import ButtonDelete from '../UI/Buttons/ButtonDelete';

const Item = () => {
    return (
        <div className="item_cotainer">
              <div>
                POST<span>123</span>
              </div>
              <ButtonDelete>
                Delete
                </ButtonDelete>
            </div>
    );
};

export default Item;