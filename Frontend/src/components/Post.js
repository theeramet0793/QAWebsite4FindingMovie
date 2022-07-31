import { useState } from "react";
import Comment from "./Comment/comment";
import AddComment from "./Comment/AddComment";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountComment from './PostFooter/CountComment'
import SortComment from "./PostFooter/SortComment";
import FollowPost from "./PostFooter/FollowPost";
import HideComment from "./PostFooter/HideComment";
import PostHeader from "./PostHeader/PostHeader"


const Post = (prop) => {

    const [post, setPost] = useState(prop.post)
    const [hideComment, setHideComment] = useState(false)

    const onHide = () => {
        setHideComment(!hideComment)
    }

    // console.log('post=',post)

    return(
        <div className="Post">
            
            <div className="post-header"> 
                <PostHeader post={post}/>
            </div>

            <div className="post-body">
                <div className='post-postdetail-container'>
                    {post.PostDetail}
                </div>
            </div>

            <div className="post-footer">

                <CountComment/>

                <SortComment/>

                <FollowPost/>

                <HideComment onHide={onHide}/>

            </div>

            <div className="post-write-comment">
                <AddComment postId={post.PostId} />
            </div>

            <div className="post-section-comment">
                { !hideComment && <Comment postId={post.PostId} />}
            </div>
        </div>
    )   
}

export default Post;