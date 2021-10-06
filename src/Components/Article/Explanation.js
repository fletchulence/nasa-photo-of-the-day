import React from 'react';


const Explanation = (props) => {
    const { explanation } = props

    return(
        <div> 
            <h4>Explanation STARTS here </h4>
               <p> {explanation} </p>
            <h4>Explanation ENDS here </h4>
        </div>
    );
};

export default Explanation;