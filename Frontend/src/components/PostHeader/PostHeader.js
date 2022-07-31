import { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Css/PostHeader.css'
import Menu from "../Menu";


const PostHeader = (prop) =>{

    const [post, setPost] = useState(prop.post)

    return(
        <div className="post-header-component">
            <div className="post-header-img">
                <img src='/images/profile-picture.png' className="post-img-poster-profile"></img>  
            </div>

            <div className="post-header-name">
                <Row className="post-user-name">{post.UserName}</Row>
                <Row className='post-date'>{post.LastUpdate}</Row>
            </div>

            <div className="post-header-icon">
                <Menu/>
            </div>
        </div>
    )
}

export default PostHeader