
const CountComment = () =>{
    return(
        <div className="post-footer-countcomment">
        <button className="count-comment">
            <img className="post-img-comment-icon" src='images/comment.png'></img>
            <a>{" 2 "+"comments"}</a>
        </button>
        </div>
    )
}

export default CountComment