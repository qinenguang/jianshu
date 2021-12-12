import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyleOne } from './style';
import { GlobalStyleTwo } from './statics/iconfont/iconfont.js';

ReactDOM.render(
    <Fragment>
        <GlobalStyleOne />
        <GlobalStyleTwo />
        <App />
    </Fragment>,
    document.getElementById('root')
);
