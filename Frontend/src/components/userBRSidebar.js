
import 'bootstrap/dist/css/bootstrap.css'
import '../Css/UserNavBar.css'
import '../Css/UserBRSidebar.css'

const UserBRSidebar = () =>{
    return (
        <div className="BRSidebar-page">
        <div class="d-flex flex-column flex-shrink-0 p-3 " id="BRsidebar-container">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32"></svg>
                <span class="fs-4">BR-Sidebar</span>
            </a>
            <hr></hr>
            
        </div>
    </div>
    )

}

export default UserBRSidebar;