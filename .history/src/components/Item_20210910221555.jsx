import React from 'react';
import ButtonDelete from '../UI/Buttons/ButtonDelete';

const Item = (props) => {
    return (
        <div className="item_cotainer">
              <div>
                {props.item.title}<span>{props.item.comments.length}</span>
              </div>
              <ButtonDelete onClick={() => props.remove(props.item)}>
                Delete
                </ButtonDelete>
            </div>
    );
};

export default Item;