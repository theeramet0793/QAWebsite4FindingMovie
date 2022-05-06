import {Nav,Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = () => {
    return (
        <div>
           <Navbar className="navBar"  fixed="top"  expand="lg" bg="light" variant="light">
             <Navbar.Brand>
               <img src="/logo512.png" height="40" width="40"></img>
              Logo
             </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                <Nav className="nav">
                <NavDropdown title="page0">
                  <NavDropdown.Item href="/page1/something1">sth 1</NavDropdown.Item>
                  <NavDropdown.Item href="/page1/something2">sth 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/page1/something3">sth 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/page1">Page1</Nav.Link>
                <Nav.Link href="/page2">Page2</Nav.Link>
                <Nav.Link href="/page3">Page3</Nav.Link>
                <Nav.Link href="/solvedPost">SolvedPost</Nav.Link>
                <Nav.Link href="/posts">Posts</Nav.Link>
                <form class="d-flex">
                  <input class="form-control me-2" type="text" placeholder="Search"/>
                  <button class="btn btn-success" type="button">Search</button>
                </form>
              </Nav>
              </Navbar.Collapse>
           </Navbar>
           
        </div>
      );

}  

export default NavBar;