import React from 'react';


const Footer = (props) => {
    const { copyright, media, version, } = props;

    return(
        <div> 
            <span>{copyright}   {media}  {version}</span>
        </div>
    );
};

export default Footer;