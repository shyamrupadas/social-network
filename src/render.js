import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
           updateNewMessage={updateNewMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

