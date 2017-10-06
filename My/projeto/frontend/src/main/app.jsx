import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

//o que está entre parenteses é uma expressao que está sendo retornada
export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)
