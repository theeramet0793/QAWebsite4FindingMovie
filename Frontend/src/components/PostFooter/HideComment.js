

const HideComment = (prop) => {
    return(
        <div className="post-footer-hide">
            <button className="btn-hide-comment" onClick={prop.onHide}>
                <img className="post-img-hide-icon" src='images/hide.png'></img>
                <a>{" Hide comment"}</a>
            </button>
        </div>
    )
}

export default HideComment