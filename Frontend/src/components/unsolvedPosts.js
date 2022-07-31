import { useEffect,useState } from "react";
import React from "react";
import PostForm from "./postForm";
import axios from "axios";
import jwt from 'jwt-decode'
import UserSidebar from './userSidebar'
import UserRightSidebar from './userRightSideBar'
import UserBRSidebar from './userBRSidebar'

const Posts = () =>{

        async function addBrTag(string){
            return string.replace(/\n/g,"</br>")
        }

        useEffect(() =>{
            //const UID = localStorage.getItem('UID');
            const accessToken = localStorage.getItem('accessToken');
            if( accessToken == null){
                //window.alert('Please sign in')
                window.location.assign("http://localhost:3000/signIn")
            }
            const currentUser = jwt(accessToken);
            var dateNow = new Date();
            var dateExp = new Date(currentUser['expiration']);
            dateExp.setHours( dateExp.getHours()+7)
            console.log(currentUser)
            console.log( 'exp = '+dateExp.toUTCString() )
            console.log( 'now = '+dateNow.toUTCString() )
            console.log( 'now ='+dateNow.getTime() )
            console.log( 'exp ='+dateExp.getTime() )

            if( dateNow.getTime() > dateExp.getTime() ){
                window.alert('Time out')
                localStorage.removeItem('UID')
                localStorage.removeItem('UName')
                localStorage.removeItem('URole')
                localStorage.removeItem('accessToken')
                window.location = "/signIn"
            }
        })     

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
                        
                            btnOk.onclick = function() {updatePost(data['id'], newText.value, data['posterId']);}
                        })
                  })
            }

             const res = await fetch("http://127.0.0.1:5000/GetAllPostUnsolve")
             res.json().then(function(data){
                console.log(data);
                let index = 0
                return data.map(async function(data){
                        var divPost = document.createElement('div')
                        var divDetail = document.createElement('div')
                        var divCoveSpan = document.createElement('div')
                        var divPoster = document.createElement('span')
                        var btnDel = document.createElement('button')
                        var btnEdt = document.createElement('button')
                        var btnIsfound = document.createElement('button')
                        var divInputMovieName = document.createElement('div')
                        var posterProfile = document.createElement("img")
                        var btnGroup = document.createElement('div')
                       
                        

                        btnDel.className = 'btn-delete'
                        divPost.className = 'post' 
                        divDetail.className = 'post-detail'
                        divPoster.className = 'poster'
                        divCoveSpan.className = "dtail-poster"
                        divDetail.id = "postDetailID"+data.pid
                        divPost.id = "postID"+data.pid
                        btnEdt.id = "btnEdit"
                        btnIsfound.className = "btn-is-found"
                        divInputMovieName.className = "div-input-movie-name"
                        divInputMovieName.id = "inputName"+data.pid
                        posterProfile.id = "poster-profile"
                        btnGroup.id = "btn-Group"
                        

                        
                        
                        divDetail.innerHTML = await addBrTag( data.post)
                        //console.log(divDetail.innerHTML)
                        divPoster.innerHTML = `User: ${data.posterName}&nbsp&nbsp&nbsp&nbsp date: ${data.date}`
                        btnEdt.innerHTML = `Edit`
                        btnDel.innerHTML = `Delete`
                        btnIsfound.innerHTML = `I have found this movie name`
                        btnDel.onclick = function() {deletePost(data.pid)}
                        btnEdt.onclick = function() {editPost(data.pid)}
                        btnIsfound.onclick = function() {foundMovieName(data.pid)}
                        posterProfile.src = "/image/profile-picture.png";
                       


                        const allPost = document.getElementsByClassName("allPost")[0]
                        allPost.appendChild(divPost)
                        const thisPost = document.getElementsByClassName("post")[index]
                        thisPost.appendChild(divCoveSpan)
                        divCoveSpan.appendChild(posterProfile)
                        divCoveSpan.appendChild(divPoster)
                        //thisPost.appendChild(document.createElement('hr'))
                        thisPost.appendChild(divDetail)
                        if(data.posterId==localStorage.getItem("UID")){
                            thisPost.appendChild(btnGroup)
                           // btnGroup.appendChild(btnIsfound)
                            btnGroup.appendChild(btnEdt)
                            btnGroup.appendChild(btnDel)
                            btnGroup.appendChild(divInputMovieName)
                            thisPost.appendChild(document.createElement('hr'))}
                        
                        //Add comment for each post
                        var divAddcom = document.createElement('div')
                        var comArea = document.createElement('textarea')
                        var btnCom = document.createElement('button')
                        var footcom = document.createElement('div')

                        btnCom.id = "btn-Comment"
                        divAddcom.className = "add-comment"
                        comArea.className =" comment-area"
                        comArea.id = "comAreaID"+data.pid
                        
                        comArea.setAttribute("type","text")
                        comArea.placeholder = "comment here"
                        btnCom.innerHTML = "Comment Now"

                        thisPost.appendChild(divAddcom)
                        divAddcom.appendChild(comArea)
                        divAddcom.appendChild(footcom)
                        footcom.appendChild(btnCom)

                        btnCom.onclick = function() { createComment(data.pid,comArea.value,localStorage.getItem('UID'),localStorage.getItem('UName'))}

                        
                        comArea.onclick = function() {resizeComArea(index)}

                        //increase index for loop post 
                        index += 1
                        
                        //Retrieve comment for each post
                        async function someComment(){
                            console.log(data.pid)
                            const res = await fetch("http://127.0.0.1:5000/GetSomeComment/"+data.pid)
                            res.json().then(function(CData){
                                
                                return CData.map(function(CData){
                                    var divCom = document.createElement('span')
                                    var divCoverSpan2 = document.createElement('div')
                                    var divCommenter = document.createElement('span')
                                    var divCoverSpan = document.createElement('div')
                                    var btnDelCom = document.createElement('button')
                                   

                                    divCom.className = 'comment'
                                    divCoverSpan.className = 'dtail-commenter'
                                    divCoverSpan2.className = "cover-span2"
                                    divCommenter.className = 'commenter'
                                    btnDelCom.className = 'btn-del-com'
                                    


                                    divCom.innerHTML = `${CData.body}`
                                    divCommenter.innerHTML = `User: ${CData.userName}&nbsp&nbsp&nbsp&nbsp date: ${CData.createdAt}`
                                    btnDelCom.innerHTML = "X"


                                    console.log("PID"+CData.PID)
                                    if(CData.PID==data.pid){
                                        const thisPost = document.getElementById("postID"+CData.PID)
                                        thisPost.appendChild(divCoverSpan2)
                                        divCoverSpan2.appendChild(divCom)
                                            if(CData.userID == localStorage.getItem("UID"))
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
            
                <div className="allPost">
                </div>
            
    )
  
}

export default  Posts ;
