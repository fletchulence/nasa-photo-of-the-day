import React, { useState, useEffect } from 'react';


const Header = (props) => {
    const { date } = props;

    const [ dates, setDates ] = useState([])

    const openDropdown = evt =>{
        evt.target.className.add('drop')
    }

    useEffect(() => {}, [])

    return(
        <div className='header container'> 
            <h4>Header STARTS here</h4>
            <button className='dropdown' onClick={() => openDropdown(date)}> {date} </button>
        
            <h4>Header ENDS here</h4>
        </div>
    );
};

export default Header;