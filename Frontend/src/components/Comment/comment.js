
import axios from "axios";
import { useEffect, useState } from "react";
import '../../Css/Comment.css'

const Comment = (prop) =>{

    console.log("Prop",prop)
    const [comments, setComments] = useState([])

    const getComment = () =>{
        axios.get('http://127.0.0.1:5000/GetComment/'+prop.postId)
        .then( res => {
            console.log(res)
            setComments(res.data)
            console.log(comments)
        })
    }

    useEffect( ()=>{ getComment()}, []);

    return(
        <div>
            {comments.map( function(comment){
                return(
                    <div className="comment-container">
                        <div className="commenter-profile">
                            <img className="post-img-commenter-icon" src='images/profile-picture.png'></img>
                        </div>
                        <div className="comment-detail-container">
                            <div className="commenter-detail">
                                {comment.CommenterName}
                            </div>
                            <div className="comment-detail">
                                {comment.CommentDetail}
                            </div>

                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default Comment;