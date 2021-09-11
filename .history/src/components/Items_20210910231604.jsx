import React from 'react';
import Item from './Item';

const Items = ({items, remove, showComments}) => {
    
    return (
        <div>
            {items.map(item=>
                <div key={item.id} >
                    <Item item={item} key={item.id} remove={remove} showComments={showComments}/>
                    <hr key={item.id}  />
                </div>
            )}
        </div>
    );
};

export default Items;