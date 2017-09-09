import React from 'react';
import {childrenWithProps} from '../utils/reactUtils'

export default props => (
    <div>
        <h2>Família: </h2>
        { childrenWithProps(props) }
    </div>
)