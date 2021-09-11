import React from 'react';

const Comments = (props) => {
    console.log(props.comments);
    return (
        <div className="comments_cotainer">
            <h3 className="h3">Comments</h3>
        </div>
    );
};

export default Comments;