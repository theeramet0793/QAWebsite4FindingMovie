
import axios from "axios";
import { useEffect, useState } from "react";
import '../Css/AllPost.css'
import Post from './Post'

const AllPost = () =>{

    const [posts, setPosts] = useState([])
    const [hideComment, setHideComment] = useState(false)

    const getAllPost = () =>{
        axios.get('http://127.0.0.1:5000/GetAllPost')
        .then( res => {
            console.log(res)
            setPosts(res.data)
            console.log(posts)
        })
    }

    const filterOptions = [
        { value: '1', label: 'Popular' },
        { value: '2', label: 'Latest' },
        { value: '3', label: 'Oldest' }
    ]

    const onHide = () => {
        setHideComment(!hideComment)
    }

    useEffect( ()=>{ getAllPost()}, []);
    
    return(
        <div>
            {posts.map( function(post){
                
                return(
                    <Post post={post}/>
                )      

            })}
        </div>
    )

}

export default AllPost;