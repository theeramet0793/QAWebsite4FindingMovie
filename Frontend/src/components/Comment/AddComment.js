
import {useState} from "react";
import axios from "axios";
import '../../Css/AddComment.css'

const AddComment = (prop) => {

    const [value,setValue] = useState({text:""})

    const handleTextInputChange = (event) =>{
        setValue({...value, text: event.target.value})
    }

    const btnClick = () =>{
        var d = new Date();
        axios.post('http://127.0.0.1:5000/CommentByUser ',
        {
            commentDetail: value.text, 
            postId: prop.postId,
            commenterId: localStorage.getItem("UID"),
            createdAt: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            lastUpdate: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
            isDeleted: false,
        } );
  }

    return(
        <div className="write-comment-container">
            <form className="form-comment" >
                <div className="text-area-comment">
                    <textarea value={value.text} className="write-comment"  type="text" placeholder="  Write your comment here..." name="postform" onChange={handleTextInputChange}    />
                </div>
                <div id="cover-button1">
                    <button id="btn-inputForm" type="submit" onClick={btnClick}>Comment</button>
                </div> 
            </form>
        </div>
    )
}
export default AddComment;