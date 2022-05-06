import './App.css'
import NavBar from './navbar/NavBar'
import Page1 from './page1/page1'
import Page2 from './page2/page2'
import Page3 from './page3/page3'
import SolvedPost from './posts/solvePost'
import Posts from './posts/posts'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/page1" element={<Page1/>} />
        <Route exact path="/page2" element={<Page2/>} />
        <Route exact path="/page3" element={<Page3/>} />
        <Route exact path="/solvedPost" element={<SolvedPost/>} />
        <Route exact path="/posts" element={<Posts/>} />
      </Routes>
    </div>
  );
};



export default App;
