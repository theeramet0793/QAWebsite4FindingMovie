
import UserNavBar from './UserNavBar'
import AdminNavBar from './AdminNavBar'
import VisitorNavBar from './VisitorNavBar'

const NavBars = () =>{
    var UserRole = localStorage.getItem('URole')
    if( UserRole == '1'){
        return( <UserNavBar/>  );
    }
    if( UserRole == '2'){
        return( <AdminNavBar/> );
    }
    else{
        return( <VisitorNavBar/> );
    }
}

export default NavBars;