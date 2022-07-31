import '../Css/FilterPost.css'
import { useEffect,useState } from "react";

const FilterPost = ({setFilter}) => {

    function handleCheckbox (){
        let solvedCheckBox = document.getElementById('filter-checkbox-solved')
        let unsolvedCheckBox = document.getElementById('filter-checkbox-unsolved')
        if( solvedCheckBox.checked && unsolvedCheckBox.checked){
            setFilter(3)
        }
        else if( solvedCheckBox.checked){ setFilter(2)}
        else if( unsolvedCheckBox.checked){ setFilter(1)}
    }
    
    return(
        <div className="filter-btn-group">
            <input type="checkbox" id="filter-checkbox-solved" name="solved" onClick={() =>handleCheckbox()}/>
            <label for="filter-checkbox-solved" id="solved-label">Solved</label>
            <input type="checkbox" id="filter-checkbox-unsolved" name="unsolved" onClick={() =>handleCheckbox()}/>
            <label for="filter-checkbox-unsolved" id="unsolved-label">Unsolved</label>
            <button onClick={() =>setFilter(4)} id="filter-btn-mypost">Create New Thread</button>
        </div>
    )
}

export default FilterPost;