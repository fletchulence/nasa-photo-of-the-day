import React from 'react';

function Article(props) {
    const { img, title } = props;

    return(
        <div> 
            <h4>Article STARTS here</h4>
            <img src={img} href={img}/>
                <h1> {title} </h1>
            <h4>Article ENDS here</h4>
        </div>
    );
};

export default Article;