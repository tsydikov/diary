import React from 'react';
import Item from './Item';

const Items = () => {
    return (
        <div>
            {items.map(item =>
                <div>
                    <Item item={item} key={item.id} />
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;