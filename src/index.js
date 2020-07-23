import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, /*applyMiddleware*/ } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer'


  const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));