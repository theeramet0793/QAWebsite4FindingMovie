
import 'bootstrap/dist/css/bootstrap.css'
import '../../Css/VisitorNavBar.css'

const clickLogin = () =>{
  window.location = "/signIn"
}

const VisitorNavBar = () => {
    return (
      
        <div>
          <nav class="navbar fixed-top navbar-expand-lg " id="visitor-navbar">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                
            <div class="collapse navbar-collapse" id="navbarToggler">

              <ul class="nav">
                <li d="visitor-topnav-item">            
                  <img className="website-logo-image" src="/logo512.png" height="40" width="40" alt="logo"></img>
                </li>
                <li id="visitor-topnav-item" class="nav-item"><a class="nav-link text-nowrap" href="/home">Forum</a></li>
                <li id="visitor-topnav-item" class="nav-item"><a class="nav-link text-nowrap" href="/page2">Discover</a></li>
                <li id="visitor-topnav-item" class="nav-item"><a class="nav-link text-nowrap" href="#">Community</a></li>
                <li id="visitor-topnav-item" >
                  <input id="visitor-topnav-search" type="search" placeholder="Search" />
                </li>
                <li id="visitor-topnav-item"><img className="visitor-noti-topnav-image" src='/images/notification.png' height="20" width="20" alt="noti"></img></li>
                <li id="visitor-topnav-item" class="nav-item"><button id="btn-login" onClick={clickLogin}>Login</button></li>
              </ul>         
                  
            </div>
                
          </nav>
           
        </div>
      );

}  

export default VisitorNavBar;