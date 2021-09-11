import React from 'react';

const Comments = (props) => {
    return (
        <div className="comments_cotainer">
            <h3 className="h3">Comments</h3>
            {props.comments.map((com,index)=>
                <div key={index}>
                    <p>{com}</p>
                    <hr/>
                </div>    
            )}
        </div>
    );
};

export default Comments;