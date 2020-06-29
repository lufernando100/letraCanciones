import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-danger text-center p2 ">
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{mensaje}</strong> 
      </div>
     );
}
 
export default Error;