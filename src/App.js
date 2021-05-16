import './App.css';
import Header from "./modules/Header/Header";
import Nav from "./modules/Nav/Nav";
import Profile from "./modules/Profile/Profile";
import Dialogs from "./modules/Dialogs/Dialogs";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <div className='app-wrapper-content'>
        <Dialogs/>
        {/*<Profile />*/}
      </div>
    </div>
  );
}

export default App;
