import React from 'react';

function childrenWithProps(props){
    return React.Children.map(props.children,
            child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }