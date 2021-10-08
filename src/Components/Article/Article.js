import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.div`
    h1 {
        color: ${pr => pr.theme.white};
        font-size: 40pt;
    }

`

// const Stye

function Article(props) {
    const { img, title, onClick } = props;

    return(
        <StyledArticle>
            <div className='container' style={{backgroundImage: `url(${img})`}}> 
                <h1> {title} </h1>
                <button onClick={() => onClick()}>Learn More</button>
            </div>
        </StyledArticle>
    );
};

export default Article;