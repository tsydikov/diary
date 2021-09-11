import React from 'react';
import Item from './Item';

const Items = ({items, remove, showComments}) => {
    
    return (
        <div>
            {items.map(item=>
                <div key={item.id}>
                    <Item item={item}  remove={remove} showComments={showComments}/>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;