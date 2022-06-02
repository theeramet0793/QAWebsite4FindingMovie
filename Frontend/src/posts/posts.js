import { useEffect,useState } from "react";
import React from "react";
import PostForm from "./postForm";
import axios from "axios";

const Posts = () =>{

         
         async function somePost(){

            function inputMovieNameComfirm(pid){
                var name = document.getElementById("inputMovieName"+pid)
                if(window.confirm("Confirm the movie name?"))
                axios.post('http://127.0.0.1:5000/foundMovieName ',
                    { 
                        PID: pid,
                        movieName: name.value
                    })
                window.location.reload()

            }

            function foundMovieName(pid){
                var inputName = document.createElement('input')
                    inputName.setAttribute('name','inputMovieName')
                    inputName.className = 'input-Movie-Name'
                    inputName.placeholder = 'Type the movie name here'
                    inputName.id = "inputMovieName"+pid
                    inputName.type = 'text'
                var btnok = document.createElement('button')
                    btnok.innerHTML = 'Enter'
                var div = document.getElementById("inputName"+pid)
                div.appendChild(inputName)
                div.appendChild(btnok)

                btnok.onclick = function() {inputMovieNameComfirm(pid)}
                
                


            }

            function resizeComArea(index){
              //comAreaID
            
              var   commentArea = document.querySelectorAll(".comment-area")
                    commentArea.forEach(element => 
                        {
                            element.addEventListener('input', autoResize, false);
                        });
              commentArea.addEventListener('input', autoResize, false);

            }

            function deleteComment(cid){
                if(window.confirm("R U sure to delete comment"))
                 axios.post('http://127.0.0.1:5000/deleteComment',{cid: cid});
                 window.location.reload()
            }

            function createComment(pid,text,userID,userName){
                var d = new Date();
                axios.post('http://127.0.0.1:5000/commentByUser ',
                        {pid: pid, 
                        body: text,
                        userID: userID,
                        userName: userName,
                        date: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds())
                        } );
                window.location.reload()
            }

            function updatePost(pid,post,poster){
                var d = new Date();
                if(window.confirm("R U sure to update post"))
                axios.post('http://127.0.0.1:5000/updatePost ',
                    {
                        pid: pid, 
                        post: post,
                        poster: poster,
                        date: d.toDateString()+"  "+String(d.getHours())+":"+String(d.getMinutes())+":"+String(d.getSeconds())
                    } );
                window.location.reload()
            }

            function autoResize() {
                this.style.height = 'auto';
                this.style.height = this.scrollHeight + 'px';
            }

            function deletePost(pid){
                if(window.confirm("R U sure to delete post"))
                 axios.post('http://127.0.0.1:5000/deletePost',{Pid: pid});
                 window.location.reload()
            }

            async function editPost(pid){
                

                  const resText = await fetch("http://127.0.0.1:5000/GetSomePost/"+pid)
                  resText.json().then(function(data){
                      return data.map(function(data){
                           
                        var newDiv = document.createElement("div")
                        var newText = document.createElement('textarea')
                        var oldtext = document.getElementById("postDetailID"+pid)
                        var btnOk = document.createElement("button")

                            newText.setAttribute("type", "text");
                            btnOk.innerHTML = "OK"
                            newDiv.appendChild(newText)
                            newDiv.appendChild(btnOk)

                            newDiv.className = "edit-post-detail"
                            newText.className = "input-edit-post"
                            btnOk.id = "btnOk-Edit-Post"

                            oldtext.parentNode.replaceChild(newDiv, oldtext)

                        var textarea = document.querySelector(".input-edit-post");

                            textarea.addEventListener('click', autoResize, false);
                            textarea.addEventListener('input', autoResize, false);
                            newText.value = data['post']
                        
                            btnOk.onclick = function() {updatePost(data['id'], newText.value, data['poster']);}
                        })
                  })
            }

             const res = await fetch("http://127.0.0.1:5000/GetAllPostUnsolve")
             res.json().then(function(data){
                console.log(data);
                let index = 0
                return data.map(function(data){
                        var divPost = document.createElement('div')
                        var divDetail = document.createElement('div')
                        var divCoveSpan = document.createElement('div')
                        var divPoster = document.createElement('span')
                        var btnDel = document.createElement('button')
                        var btnEdt = document.createElement('button')
                        var btnIsfound = document.createElement('button')
                        var divInputMovieName = document.createElement('div')
                        var btnInputNameComfirm = document.createElement('button')
                        

                        btnDel.className = 'btn-delete'
                        divPost.className = 'post' 
                        divDetail.className = 'post-detail'
                        divPoster.className = 'poster'
                        divCoveSpan.className = "dtail-poster"
                        divDetail.id = "postDetailID"+data.id
                        divPost.id = "postID"+data.id
                        btnEdt.id = "btnEdit"
                        btnIsfound.className = "btn-is-found"
                        divInputMovieName.className = "div-input-movie-name"
                        divInputMovieName.id = "inputName"+data.id
                    

                        
                        
                        divDetail.innerHTML = `${data.post}`
                        divPoster.innerHTML = `User: ${data.poster}&nbsp&nbsp&nbsp&nbsp date: ${data.date}`
                        btnEdt.innerHTML = `Edit`
                        btnDel.innerHTML = `Delete`
                        btnIsfound.innerHTML = `I have found this movie name`
                        btnDel.onclick = function() {deletePost(data.id)}
                        btnEdt.onclick = function() {editPost(data.id)}
                        btnIsfound.onclick = function() {foundMovieName(data.id)}
                        
                        

                        const allPost = document.getElementsByClassName("allPost")[0]
                        allPost.appendChild(divPost)
                        const thisPost = document.getElementsByClassName("post")[index]
                        if(data.poster=="mike"){
                            thisPost.appendChild(btnEdt)
                            thisPost.appendChild(btnDel)
                            thisPost.appendChild(btnIsfound)
                            thisPost.appendChild(divInputMovieName)}
                        thisPost.appendChild(divDetail)
                        thisPost.appendChild(divCoveSpan)
                        divCoveSpan.appendChild(divPoster)
                        
                        //Add comment for each post
                        var divAddcom = document.createElement('div')
                        var comArea = document.createElement('textarea')
                        var btnCom = document.createElement('button')
                        var footcom = document.createElement('div')

                        btnCom.id = "btn-Comment"
                        divAddcom.className = "add-comment"
                        comArea.className =" comment-area"
                        comArea.id = "comAreaID"+data.id
                        
                        comArea.setAttribute("type","text")
                        comArea.placeholder = "comment here"
                        btnCom.innerHTML = "Comment Now"

                        thisPost.appendChild(divAddcom)
                        divAddcom.appendChild(comArea)
                        divAddcom.appendChild(footcom)
                        footcom.appendChild(btnCom)

                        btnCom.onclick = function() { createComment(data.id,comArea.value,3,"mike")}

                        
                        comArea.onclick = function() {resizeComArea(index)}

                        //increase index for loop post 
                        index += 1
                        
                        //Retrieve comment for each post
                        async function someComment(){
                            console.log(data.id)
                            const res = await fetch("http://127.0.0.1:5000/GetSomeComment/"+data.id)
                            res.json().then(function(CData){
                                
                                return CData.map(function(CData){
                                    var divCom = document.createElement('span')
                                    var divCommenter = document.createElement('span')
                                    var divCoverSpan = document.createElement('div')
                                    var btnDelCom = document.createElement('button')
                                   

                                    divCom.className = 'comment'
                                    divCoverSpan.className = 'dtail-commenter'
                                    divCommenter.className = 'commenter'
                                    btnDelCom.className = 'btn-del-com'
                                    


                                    divCom.innerHTML = `${CData.body}`
                                    divCommenter.innerHTML = `User: ${CData.userName}&nbsp&nbsp&nbsp&nbsp date: ${CData.createdAt}`
                                    btnDelCom.innerHTML = "X"


                                    console.log("PID"+CData.PID)
                                    if(CData.PID==data.id){
                                        const thisPost = document.getElementById("postID"+CData.PID)
                                        thisPost.appendChild(divCom)
                                            divCom.appendChild(btnDelCom)
                                        thisPost.appendChild(divCoverSpan)
                                            divCoverSpan.appendChild(divCommenter)
                                        
                                    }
                                    
                                    btnDelCom.onclick = function() {deleteComment(CData.CID)}


                                })
                                
                            })
                            
                        }
                        someComment();
                })
             })
             
            
         }
         //call
        somePost();


    return(
        <div className="post-page">
            <div className="postform-area">
                <PostForm />
            </div>
            <div className="allPost"></div>
        </div>
    )
  
}

export default  Posts ;