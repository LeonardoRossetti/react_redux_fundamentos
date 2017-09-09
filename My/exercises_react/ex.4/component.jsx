import React from 'react';

//quando possui um export default em um arquivo, sempre que ele
//for instanciado, ele retornará o componente default.
export default props => (
    <h1>Primeiro Componente!</h1>
)

const Segundo = props => <h1>Segundo Componente!</h1>

//para importar outros componentes desse mesmo componente (que não o default) é preciso
//é preciso chama-los dentro de chaves {}. Ex.: import Primeiro, {Segundo} from './component';
export { Segundo }
