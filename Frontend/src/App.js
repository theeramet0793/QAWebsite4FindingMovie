import './Css/App.css'
import './Css/Postform.css'
import './Css/SignUp.css'
import './Css/SignIn.css'
import './Css/UnsolvedPosts.css'
import './Css/SolvedPosts.css'
import './Css/UserSidebar.css'
import './Css/Forum.css'
import SolvedPosts from './components/solvedPost'
import UnsolvedPosts from './components/unsolvedPosts'
import SignUp from './components/signUp'
import SignIn from './components/signIn'
import Forum from './pages/forum'
import { Route, Routes } from 'react-router-dom';
import NavBars from './components/NavBar/NavBars'


const App = () => {

    return (
      <div className="App">
        <NavBars/>
        <Routes>
            <Route exact path="/forum" element={<Forum/>} />
            <Route exact path="/signUp" element={<SignUp/>} />
            <Route exact path="/signIn" element={<SignIn/>} />
            <Route exact path="/solvedPost" element={<SolvedPosts/>} />
            <Route exact path="/posts" element={<UnsolvedPosts/>} />
        </Routes>
      </div>
    );
  
};



export default App;
