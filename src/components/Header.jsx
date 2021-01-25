import React from 'react';
import h_Header from'./Header.html';
var v_header={__html:h_Header};


const Header=()=>
{
    return(
        <div dangerouslySetInnerHTML={v_header}></div>


    )
}

export default Header;