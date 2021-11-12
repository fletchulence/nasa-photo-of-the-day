import React from 'react';

// css styles
import styled/*  { keyframes } */ from 'styled-components';

// const kf = keyframes `
//   100%{
//     opacity: 1;
//     transform: scale(2);
//   }
// `

const StyledFind = styled.div`
  display:flex;
  flex-flow: column wrap;
  margin: 3%;
  justify-content: center;
`

const StyledHeader = styled.div`
  .container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0;

    h4 {
      color: red;
      font-size: 60pt;
      margin: 0;
    }
  }
  form{
    display: flex;
    align-self: center;
  }

  @media (max-width: 400px) {
    .header{
      flex-direction: column;
      
      h4 {
        font-size: 30pt;
      }
    }
    
  }

`


const Header = (props) => {
    const { date, submit, change, data } = props;

    return(
      <StyledHeader>
        <div className='header container'> 
          <h4>{data.date}</h4>
          <StyledFind>
            <p> Try searching another date: </p>
            <form onSubmit={submit}>
              <input className='calendar' onChange={change} type='date' max={date}/> 
              <input type='submit' value='Find'/>
            </form>
          </StyledFind>
        </div>
      </StyledHeader>
    );
};

export default Header;


// input type = date