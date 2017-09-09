import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <div>
        <Family lastName='Silva'>
            <Member name='Maria' />
            <Member name='Jose' />
            <Member name='Joao' />
        </Family>
    </div>
,document.getElementById('app'));