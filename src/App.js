import './App.css';
import Header from "./modules/Header/Header";
import Navbar from "./modules/Nav/Navbar";
import Profile from "./modules/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./modules/Dialogs/Dialogs";
import News from "./modules/News/News";
import Music from "./modules/Music/Music";
import Settings from "./modules/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
