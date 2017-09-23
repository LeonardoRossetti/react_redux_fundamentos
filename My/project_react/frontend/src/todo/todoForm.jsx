import React from 'react'

export default props => (
    <div role='form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input className="form-control" id="description"
                placeholder="Adicione uma tarefa"></input>
        </div>

        <div className="col-xs-12 col-sm-3 col-md-2">
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
)
/**
 * col-xs-12 col-sm-9 col-md-10
 * são os tamanhos que irão variar conforme o tamanho da tela
 * col-xs: celular
 * col-sm: dispositivos pequenos
 * col-md: dispositivos médios
 */