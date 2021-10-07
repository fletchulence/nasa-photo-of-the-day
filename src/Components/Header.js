import React, { useState, useEffect } from 'react';


const Header = (props) => {
    const { date, submit, change, data } = props;


    // const [ dates, setDates ] = useState([])

    return(
      <StyledHeader>
        <div className='header container'> 
            <h4>Header STARTS here {data.date}</h4>
        <form onSubmit={submit}>
             <input onChange={change} type='date' max={date}/> 
             <input type='submit' value='date find'/>
        </form>
            <h4>Header ENDS here</h4>
        </div>
      </StyledHeader>
    );
};

export default Header;


// input type = date