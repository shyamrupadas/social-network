import './App.css';
import Header from "./modules/Header/Header";
import Navbar from "./modules/Nav/Navbar";
import Profile from "./modules/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./modules/Dialogs/Dialogs";
import News from "./modules/News/News";
import Music from "./modules/Music/Music";
import Settings from "./modules/Settings/Settings";

const App = (props) => {

  return (
       <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile profilePage={props.store.getState().profilePage}
                                                        dispatch={props.store.dispatch.bind(props.store)} />}/>
          <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                                        dispatch={props.store.dispatch.bind(props.store)} />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
  );
};

export default App;
