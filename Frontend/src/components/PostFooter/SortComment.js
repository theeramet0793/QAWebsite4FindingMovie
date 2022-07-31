
import Select from 'react-select';

const SortComment = () => {

    const filterOptions = [
        { value: '1', label: 'Popular' },
        { value: '2', label: 'Latest' },
        { value: '3', label: 'Oldest' }
    ]

    return(
        <div className="post-footer-sortby" lg='auto'>                             
            <Select           
                className="basic-single"
                classNamePrefix="select"
                name="color"
                options={filterOptions}
                placeholder={"sort by"}>
            </Select>                              
        </div>
    )
}

export default SortComment