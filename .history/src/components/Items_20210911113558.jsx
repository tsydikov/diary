import React from 'react';
import Item from './Item';

const Items = ({items, remove, showComments, a, setA}) => {
    

    return (
        <div>
            {items.map((item,index)=>
                <div key={item.id}>
                    <Item item={item}  remove={remove} showComments={showComments} index={index+1} a={a} setA={setA} />
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;