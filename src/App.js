import './App.css';
import Header from "./modules/Header/Header";
import Profile from "./modules/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./modules/News/News";
import Music from "./modules/Music/Music";
import Settings from "./modules/Settings/Settings";
import Sidebar from "./modules/Sidebar/Sidebar";
import DialogsContainer from "./modules/Dialogs/DialogsContainer";

const App = (props) => {

  return (
       <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile />}/>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
  );
};

export default App;