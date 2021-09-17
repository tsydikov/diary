import React from 'react';
import Item from './Item';

const Items = ({ items, remove, showComments }) => {

    return (
        <div>
            {items.map((item, index) =>
                <div key={item.id}>
                    <Item item={item} remove={remove} showComments={showComments} index={index + 1} />
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Items;