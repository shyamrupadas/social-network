import './App.css';
import Header from "./modules/Header";
import Nav from "./modules/Nav";
import Profile from "./modules/Profile";

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
