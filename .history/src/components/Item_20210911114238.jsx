import React, { useState, useEffect } from 'react';
import ButtonDelete from '../UI/Buttons/ButtonDelete';
// import classNames from 'classnames'

const Item = (props) => {
  
  return (
    <div className='item_cotainer'>
      <div onClick={() => props.showComments(props.item, props.index)} style={{ cursor: 'pointer' }}>
        {props.item.title}<span>{props.item.comments.length}</span>
      </div>
      <ButtonDelete onClick={() => props.remove(props.item)}>
        Delete
      </ButtonDelete>
    </div>
  );
};

export default Item;