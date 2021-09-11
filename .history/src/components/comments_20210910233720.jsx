import React from 'react';

const Comments = (props) => {
    return (
        <div className="comments_cotainer">
            <h3 className="h3">Comments</h3>
            {props.comments.map((com, index) =>
                <div key={index}>
                    <div className="container px-0" >
                        <div className="row p-2">
                            <div className="col-2" >
                                <div style={{ height: 50, width: 50, background: 'orange', marging: 20 }}></div>
                            </div>
                            <div className="col-10 p-0" >
                                <p>{com}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default Comments;

// style={{ background: 'red' }}