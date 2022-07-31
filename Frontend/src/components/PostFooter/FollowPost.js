
const FollowPost = () => {
    return(
        <div className="post-footer-followpost">
            <button className="btn-follow-post">
                <img className="post-img-follow-icon" src='images/notification.png'></img>
                <a>{" Follow this post"}</a>
            </button>
        </div>
    )
}

export default FollowPost