import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

import './index.scss';

export let renderEntireTree = () =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
           <BrowserRouter>
              <Provider store={store}>
                <App dispatch={store.dispatch.bind(store)} state={store.getState()}/>
              </Provider>
           </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
