import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        
        <Grid cols='12 9 10'>
            <input className="form-control" id="description"
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.handleChange}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd} />
            <IconButton style='info' icon='search'
                onClick={props.handleSearch} />
            <IconButton style='default' icon='close'
                onClick={props.handleClear} />
        </Grid>
    </div>
)
