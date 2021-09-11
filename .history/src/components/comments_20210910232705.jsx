import React from 'react';

const Comments = (props) => {
    return (
        <div className="comments_cotainer">
            <h3 className="h3">Comments</h3>
            {props.comments.map((com,index)=>
                <div key={index}>
                    <div className="container-fluid px-0" >
            <div className="row p-2">
              <div className="col-2 ">
                <div style={{height:50,width:50, background:'orange',marging:20}}/>
              <div className="col-8 p-0">
              <p>{com}</p>
              </div> 
              </div>
            </div>
          </div>
                    
                    <hr/>
                </div>    
            )}
        </div>
    );
};

export default Comments;