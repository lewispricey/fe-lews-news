import React from 'react';
import '../styles/loading-spinner.css'

const Loading = ({layoutClass = ""}) => {
    return (
             <div className={`loading ${layoutClass}`}></div> 
    );
};

export default Loading;