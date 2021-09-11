import React, { useState, useEffect } from 'react';
import ButtonDelete from '../UI/Buttons/ButtonDelete';
// import classNames from 'classnames'

const Item = (props) => {
  // const [className, setClassName] = useState('item_cotainer')


  const click = () => {
    props.showComments(props.item, props.index)
    // setClassName(className + ' active')
    props.setA(props.a+' active')
  }
  

  // setClassName('item_cotainer')
  return (
    <div className={props.a}>
      <div key={props.index} onClick={click} style={{ cursor: 'pointer' }}>
        {props.item.title}<span>{props.item.comments.length}</span>
      </div>
      <ButtonDelete onClick={() => props.remove(props.item)}>
        Delete
      </ButtonDelete>
    </div>
  );
};

export default Item;