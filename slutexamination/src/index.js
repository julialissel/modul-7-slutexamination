import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Landing from './view/Landing';
import Menu from './view/Menu';
import Status from './view/Status';
import menuReducers from './reducers/menuReducers';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const store = createStore(
  //Inne här matar man in reduser
  menuReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //Denna är till för Redux devtools i chrome
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/status" element={<Status />} /> */}
            
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
                }
            />
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
