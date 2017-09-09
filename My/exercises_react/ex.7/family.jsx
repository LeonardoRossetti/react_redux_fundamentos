import React from 'react';

export default props => (
    <div>
        <h2>Família: </h2>
        {/* com isso podemos  passar as propriedaes para o props.children*/}
        {/*uma boa prática é passar o clone das propriedades para o filho, por isso podemos usar o operador spread "..."*/}
        {/*para podermos usar é preciso instalar o spread: npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0*/}
        {React.cloneElement(props.children, {...props})}
    </div>
)