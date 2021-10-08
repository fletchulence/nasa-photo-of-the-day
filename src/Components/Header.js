import React, { useState, useEffect } from 'react';

// css styles
import styled, { keyframes } from 'styled-components';

const kf = keyframes `
  100%{
    opacity: 1;
    transform: scale(2);
  }
`

const StyledHeader = styled.div`
  .container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0;

    h4{
      color: red;
      font-size: 60pt;
      margin: 0;
    }
  }
  form{
    display: flex;
    align-self: center;
  }


`


const Header = (props) => {
    const { date, submit, change, data } = props;


    // const [ dates, setDates ] = useState([])

    return(
      <StyledHeader>
        <div className='header container'> 
            <h4>{/* Header STARTS here */} {data.date}</h4>
        <form onSubmit={submit}>
             <input className='calendar' onChange={change} type='date' max={date}/> 
             <input type='submit' value='date find'/>
        </form>
            <h4>{/* Header ENDS here */}</h4>
        </div>
      </StyledHeader>
    );
};

export default Header;


// input type = date