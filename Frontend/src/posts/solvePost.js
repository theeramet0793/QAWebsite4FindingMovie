import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

const SolvedPosts = () =>{

         
         async function somePost(){

            // GET request using axios with async/await
            async function displayMovieName(pid){
                     const res = await fetch('http://127.0.0.1:5000/GetMovieName/'+pid)
                    res.json().then(function(response){
                       return response.map(function(data){
                            var name = data['movieName'] 
                            var moviesName = document.getElementById('btnMovieName'+pid);
                                moviesName.innerHTML = name          
                        })
                    })
                    
                
            }

            function resizeComArea(index){
              var commentArea = document.querySelector(".comment-area")
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

             const res = await fetch("http://127.0.0.1:5000/GetAllPostSolve")
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
                        var divInputMovieName = document.createElement('div')
                        var btnMovieName = document.createElement('button')
                        

                        divPost.className = 'post' 
                        divDetail.className = 'post-detail'
                        divPoster.className = 'poster'
                        divCoveSpan.className = "dtail-poster"
                        divDetail.id = "postDetailID"+data.id
                        divPost.id = "postID"+data.id
                        btnEdt.id = "btnEdit"
                        divInputMovieName.className = "div-input-movie-name"
                        divInputMovieName.id = "inputName"+data.id
                        btnMovieName.id = "btnMovieName"+data.id
                        btnMovieName.className = "btn-movie-name"

                        
                        
                        divDetail.innerHTML = `${data.post}`
                        divPoster.innerHTML = `User: ${data.poster}&nbsp&nbsp&nbsp&nbsp date: ${data.date}`
                        btnEdt.innerHTML = `Edit`
                        btnDel.innerHTML = `Delete`
                        btnDel.onclick = function() {deletePost(data.id)}
                        btnEdt.onclick = function() {editPost(data.id)}
                        
                        
                        

                        const allPost = document.getElementsByClassName("allPost")[0]
                        allPost.appendChild(divPost)
                        const thisPost = document.getElementsByClassName("post")[index]
                        thisPost.appendChild(btnMovieName)
                        if(data.poster=="mike"){
                            thisPost.appendChild(btnEdt)
                            thisPost.appendChild(btnDel)
                            }
                        displayMovieName(data.id)
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
            <div className="allPost"></div>
        </div>
    )
  
}

export default  SolvedPosts ;