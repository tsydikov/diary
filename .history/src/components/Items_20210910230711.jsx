import React from 'react';
import Item from './Item';

const Items = ({items, remove, showComments}) => {
    
    return (
        <div>
            {items.map(item=>
                <div>
                    <Item item={item} key={item.id} remove={remove} showComments={showComments}/>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;