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
          axios.post('http://127.0.0.1:5000/postByUser ',
          {text: value.text, 
           poster:"mike",
           date: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds())
          } );
    }

    return (
        <div className="postForm">
           
                <form className="form-post" >
                    <div className="area-space">
                        <textarea value={value.text} className="inputForm"  type="text" name="postform" onChange={handleTextInputChange}    />
                    </div>
                    <button className="btn-inputForm" type="submit" onClick={btnClick} >POST NOW</button>
                </form>
            
        </div>
    )
}

export default PostForm;