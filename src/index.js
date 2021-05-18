import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, message: 'Привет, мир!', likesCount: 5},
  {id: 2, message: 'Ом намо бхагавате васудевайа!', likesCount: 108},
  {id: 3, message: 'Какой-нибудь еще пост', likesCount: 1108},
];

let dialogs = [
  {id: 1, name: 'Shyam Rupa'},
  {id: 2, name: 'Vasliy'},
  {id: 3, name: 'Uncle Gena'},
  {id: 4, name: 'Валера'},
  {id: 5, name: 'Иван Викторович'},
];

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'What\' s up?'},
  {id: 3, message: 'Merhaba'},
  {id: 4, message: 'Namaste!'},
  {id: 5, message: 'Hari-bol!'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
