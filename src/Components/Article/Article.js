import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.div`
display: flex;
justify-content: center;
height: 100vh;
background-size: 100% 100%;
background-position: relative;

.container{
    display: flex;
    margin: auto;    
    //background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    // width: fit-content;
    flex-flow: column wrap;
    justify-self: center;
    padding-left: 15%;

    h1 {
        color: ${pr => pr.theme.white};
        font-size: 5em;
        height: 40%;
        width: 80%;
        // margin-left: 15%;
    }
}

button{
    width: fit-content;
    padding: 1%;
    font-style: mono;
    // margin-left: 30%;
    
    color: ${pr => pr.theme.black};
    background-color: ${pr => pr.theme.white};

    transition: all 0.2s ease-in-out;
    :hover{
       transition: all 0.2 ease-in-out;
       background-color: ${pr => pr.theme.black};
       color:  ${pr => pr.theme.white}
    }
}

`



// const Stye

function Article(props) {
    const { img, title, onClick } = props;

    return(
        <StyledArticle>
            <div className='container' style={{backgroundImage: `url(${img})`}}> 
                <h1> {title} </h1>
                <button onClick={() => onClick()}> Read More </button>
            </div>
        </StyledArticle>
    );
};

export default Article;