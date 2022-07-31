
// อย่าลบบรรทัดนี้ มันจำเป็นต้องใช้ => import { Dropdown } from 'bootstrap'; 
import { Dropdown } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../../Css/UserNavBar.css'

const deleteLocalStorage= async () =>{
  localStorage.removeItem('UID')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('UName')
  localStorage.removeItem('URole')
  window.location = "/home"
}

const UserNavBar = () => {
    return (
      <div className="topbar">
        <nav class="navbar fixed-top navbar-expand-md border-buttom " id="user-navbar">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggle-text"> Menu </span>
            <span class="navbar-toggler-icon"></span>
          </button>
           
          <div class="collapse navbar-collapse" id="navbarToggler">

            <ul class="nav">

              <li id="user-topnav-item">
                <img className="website-logo-image" src="/logo512.png" height="40" width="40" alt="logo"></img>
              </li>
              <li id="user-topnav-item" class="nav-item"><a class="nav-link text-nowrap" href="/forum">Forum</a></li>
              <li id="user-topnav-item" class="nav-item"><a class="nav-link text-nowrap" href="/solvedPost">Discovery</a></li>
              <li id="user-topnav-item" class="nav-item"><a class="nav-link text-nowrap" href="/posts">Community</a></li>
              <li id="user-topnav-item">
                  <input id="user-topnav-search" type="search" placeholder="Search" />
              </li>
              <li id="user-topnav-item"><img className="user-noti-topnav-image" src="/images/notification.png" height="20" width="20" alt="noti"></img></li>
              <li id="user-topnav-item" class="nav-item">

                <div class="dropdown">

                  <button class="btn  dropdown-toggle " type="button" id="user-navbar-dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded="true">
                      <img src="/images/profile-picture.png" className="profile-image" id="user-profile-image" height="35" width="35"/>
                  </button>

                  <ul class="dropdown-menu " id="user-dropdown" aria-labelledby="user-navbar-dropdownMenuButton">
                    <li><a class="dropdown-item" href="#"> {localStorage.getItem('UName')} </a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Edit profile</a></li>
                    <li><a class="dropdown-item" href="#">Setting</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#" onClick={deleteLocalStorage}>Sign out</a></li>
                  </ul>
                  

                </div>

              </li>

            </ul>      
             
          </div>  

        </nav> 
      </div>
      );

}  

export default UserNavBar;