import React from 'react';
import Item from './Item';

const Items = ({items, remove}) => {
    
    return (
        <div>
            {items.map((item, index) =>
                <div>
                    <Item number={index+1} item={item} key={item.id} remove={remove} />
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;