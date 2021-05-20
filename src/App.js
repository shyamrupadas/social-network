import './App.css';
import Header from "./modules/Header/Header";
import Navbar from "./modules/Nav/Navbar";
import Profile from "./modules/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./modules/Dialogs/Dialogs";
import News from "./modules/News/News";
import Music from "./modules/Music/Music";
import Settings from "./modules/Settings/Settings";
import {updateNewMessage} from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                        addPost={props.addPost}
                                                        updateNewPostText={props.updateNewPostText}/>}/>
          <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                        addMessage={props.addMessage}
                                                        updateNewMessage={props.updateNewMessage}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
