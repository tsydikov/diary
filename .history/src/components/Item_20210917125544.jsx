import React from 'react';
import ButtonDelete from '../UI/Buttons/ButtonDelete';

const Item = (props) => {
  // props.showComments(props.index)
  return (
    <div className='item_cotainer'>
      <div onClick={() => props.showComments(props.index)} style={{ cursor: 'pointer' }}>
        {props.item.title}<span>{props.item.comments.length}</span>
      </div>
      <ButtonDelete onClick={() => props.remove(props.item)}>
        Delete
      </ButtonDelete>
    </div>
  );
};

export default Item;