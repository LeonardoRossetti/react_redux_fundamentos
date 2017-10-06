import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render () {
        //se o cols não foi setado, assume 12 colunas
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}

/**
 * col-xs-12 col-sm-9 col-md-10
 * são os tamanhos que irão variar conforme o tamanho da tela
 * col-xs: celular
 * col-sm: dispositivos pequenos
 * col-md: dispositivos médios
 */