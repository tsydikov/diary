import React, { useState } from 'react';

const Comments = (props) => {
    const [comment, setComment] = useState('') 
   const press = (e) => {
        if (e.keyCode === 13) {
            if(e.ctrlKey) {
                props.create(comment)
                setComment('')
            }
    }}
    return (
        <div className="comments_cotainer">
            <h3 className="h3">Comments #{props.index}</h3>
            {props.comments && props.comments.map((com, index) =>
                <div key={index}>
                    <div className="container px-3" >
                        <div className="row p-2">
                            <div className="col-2" >
                                <div className="avatar" />
                            </div>
                            <div className="col-10 px-2" >
                                <p>{com}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            )}
            <div>
                {props.comments && <div className="container px-3" >
                    <div className="row p-2">
                        <div className="col-2" >
                            <div style={{ height: 50, width: 50, background: 'gray', marging: 20 }}></div>
                        </div>
                        <div className="col-10 px-2" >
                            <textarea 
                            className="comment_input" 
                            type="text" placeholder="Add comment..." 
                            onKeyDown={press}
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                }
            </div>

        </div>
    );
};

export default Comments;

// style={{ background: 'red' }}