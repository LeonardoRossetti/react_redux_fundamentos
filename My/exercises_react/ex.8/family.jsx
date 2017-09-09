import React from 'react';

export default props => (
    <div>
        <h2>Família: </h2>
        {/*para quando chamamos o componente com mais de um filho*/}
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) }
    </div>
)