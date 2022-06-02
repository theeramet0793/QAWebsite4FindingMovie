import { Nav,Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'bootstrap';

const NavBar = () => {
    return (
      
        <div>
           <nav class="navbar fixed-top navbar-expand-lg ">
              <img className="website-logo-image" src="/logo512.png" height="40" width="40" alt="logo"></img>
              <a class="navbar-brand" href="http://"> 
                    Find Movies
              </a>
                
              <div class="collapse navbar-collapse">

                  <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link " href="/home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="/page2">Page2</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="/page3">Page3</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/solvedPost">Solved</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/posts">Unsolved</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>

                    <form class="d-flex">
                      <input class="form-control me-2" type="text" placeholder="Search"/>
                      <button class="btn btn-primary" type="button">Search</button>
                    </form>

                    <div class="dropdown show ">
                     
                      <button class="btn btn-outline-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/image/profile.jpg" className="profile-image"/>
                      </button>
                      
                      <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Edit profile</a></li>
                        <li><a class="dropdown-item" href="#">Setting</a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                      </ul>
                    </div>
                
                  
                </div>
                
           </nav>
           
        </div>
      );

}  

export default NavBar;