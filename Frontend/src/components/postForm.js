import React,{Component} from 'react'
import {useState} from "react";
import axios from "axios";

const PostForm = () => {

    var d = new Date();
    const [value,setValue] = useState({text:""})
    
    const handleTextInputChange = (event) =>{
        setValue({...value, text: event.target.value})
    
    }
    const btnClick = (event) =>{
          axios.post('http://127.0.0.1:5000/PostByUser ',
          {postDetail: value.text, 
           posterId: localStorage.getItem("UID"),
           postType: 2,
           movie: '',
           createdAt: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
           lastUpdate: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds()),
           isDeleted: false,
          } );
    }

    return (
        <div className="postForm">
           
                <form className="form-post" >
                    <div className="area-space">
                        <textarea value={value.text} className="inputForm"  type="text" placeholder="Type your post here..." name="postform" onChange={handleTextInputChange}    />
                    </div>
                    <div id="cover-button">
                        <button id="btn-inputForm" type="submit" onClick={btnClick} >Post now</button>
                    </div>
                    
                </form>
            
        </div>
    )
}

export default PostForm;