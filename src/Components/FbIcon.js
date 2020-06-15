import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';


const FbIcon = ( props) =>{
    return (
        <a href={'http://www.facebook.com'} target={'_blank'}>
        <FacebookIcon className={props.className}/>
        </a>
    )
}
export default FbIcon;