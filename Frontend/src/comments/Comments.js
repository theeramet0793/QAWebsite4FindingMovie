import { addComment } from "@babel/types";
import { useEffect, useState } from "react";
import {getComments as getCommentsApi, 
        createComment as createCommentApi, 
        deleteComment as deleteCommentApi} from '../Api';
import Comment from "./Comment" ;
import CommentForm from "./CommentForm";

const Comments = ({currentUserId}) =>{
    const [backendComments, setBackendComments] = useState([])
    const [activeComment ,setActiveComment ] = useState(null)
    const rootComment = backendComments.filter((backendComment)=> backendComment.parentId === null);
    console.log("backendComments",backendComments);
    const getReplies = (commendId) => {
        return backendComments.filter((backendComment) =>backendComment.parentId === commendId).sort(
            (a,b)=> new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId)
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null)
        })
    }
    const deleteComment = (commentId) =>{
        if(window.confirm('Are you sure to delete this comment?')){
            deleteCommentApi(commentId).then(()=>{
                const updateBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId)
                setBackendComments(updateBackendComments)
            })
        }
    }

    useEffect(()=>{
        getCommentsApi().then(data => {
            setBackendComments(data);
        });
    }, [])
    return (
        <div className="Comments">
            <h3 className="Comments-title"></h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="Comments-container">
                {rootComment.map((rootComment)=>(
                <Comment key={rootComment.id} 
                 comment={rootComment} 
                 replies={getReplies(rootComment.id)}
                 currentUserId={currentUserId}
                 deleteComment={deleteComment}
                 activeComment={activeComment}
                 setActiveComment={setActiveComment}
                 addComment ={addComment}
                 />
                ))}
            </div>
        </div>
    );
};

export default Comments;