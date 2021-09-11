import React from 'react';
import Item from './Item';

const Items = ({items}) => {
    
    return (
        <div>
            {items.map(item =>
                <div>
                    {item.id}
                    <Item item={item} key={item.id} />
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;