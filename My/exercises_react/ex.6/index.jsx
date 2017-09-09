import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <div>
        <Family>
            <Member name='Guilherme' lastName='Silva'/>
        </Family>
        </div>
,document.getElementById('app'));