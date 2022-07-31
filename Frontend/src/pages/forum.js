
import RightComponent from '../components/RightComponent'
import UnsolvedPost from '../components/unsolvedPosts'
import SolvedPost from '../components/solvedPost'
import AllPost from '../components/AllPost'
import FilterPost from '../components/filterPost'
import PostForm from '../components/postForm'
import Hilight from '../components/Hilight'

import { useState, useEffect } from 'react'

const Forum = () => {
    const [filter, setFilter] = useState(0)
    return(
        <div className="main-container">

            <div className="forum-top-trending-container">
                    <Hilight/>
            </div>

            <div>
                <div className="forum-filter-container">
                    <FilterPost setFilter={setFilter} />
                </div>
            </div>

            <div className="forum-main-content-container">
                <div className="forum-post-container">{selectedFilter(filter)}</div>
                <div className="forum-sidebar-container">
                    <RightComponent/>
                </div>
            </div>

        </div>
    )
}

function selectedFilter (filter){
    console.log('filter=',filter)
    if(filter==1)
        return(<UnsolvedPost/>)
    
    if(filter==2)
        return(<SolvedPost/>)
    
    if(filter==3)
        return(<AllPost/>)
    
    if(filter==4)
        return(<PostForm/>)
    
}

export default Forum;