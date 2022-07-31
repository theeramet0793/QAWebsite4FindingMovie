
import 'bootstrap/dist/css/bootstrap.css'
import '../Css/UserNavBar.css'
import '../Css/UserSidebar.css'

const UserSidebar = () =>{
    return (
        <div className="Sidebar-page">
        <div id="sidebar-container">
            <ul id="unlist-left-sidebar">
                <li id="list-left-sidebar">
                    <a href="#" >
                             Home
                    </a>
                </li>
                <li id="list-left-sidebar">
                    <a href="#" >
                            Dashboard
                    </a>
                </li>
                <li id="list-left-sidebar">
                    <a href="#" >
                            Profile
                    </a>
                </li>
                <li id="list-left-sidebar">
                    <a href="#" >
                            Friends
                    </a>
                </li>
                <li id="list-left-sidebar">
                    <a href="#">
                            Rank
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )

}

export default UserSidebar;