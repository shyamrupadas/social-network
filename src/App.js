import './App.css';
import Header from "./modules/Header/Header";
import Nav from "./modules/Nav/Nav";
import Profile from "./modules/Profile/Profile";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile />
    </div>
  );
}

export default App;
