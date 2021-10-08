import React from 'react';


const Footer = (props) => {
    const { copyright, media, version, } = props;

    return(
        <div> 
            {/* <h4>Footer STARTS here </h4>  */}
            <span>{copyright}   {media}  {version}</span>
            {/* <h4>Footer ENDS here </h4>     */}
        </div>
    );
};

export default Footer;