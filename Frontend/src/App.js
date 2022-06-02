import './Css/App.css'
import './Css/Postform.css'
import './Css/Navbar.css'
import './Css/SignUp.css'
import './Css/Login.css'
import './Css/Posts.css'
import './Css/SolvedPost.css'
import './Css/Page2.css'
import './Css/Page3.css'
import NavBar from './navbar/NavBar'
import Home from './home/home'
import Page2 from './page2/page2'
import Page3 from './page3/page3'
import SolvedPost from './posts/solvePost'
import Posts from './posts/posts'
import SignUp from './signUp/signUp'
import Login from './login/login'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/page2" element={<SignUp/>} />
        <Route exact path="/page3" element={<Login/>} />
        <Route exact path="/solvedPost" element={<SolvedPost/>} />
        <Route exact path="/posts" element={<Posts/>} />
      </Routes>
    </div>
  );
};



export default App;
