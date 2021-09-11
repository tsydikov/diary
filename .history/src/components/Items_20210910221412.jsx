import React from 'react';
import Item from './Item';

const Items = ({items, remove}) => {
    
    return (
        <div>
            {items.map(item =>
                <div>
                    <Item item={item} key={item.id} remove={remove} />
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;