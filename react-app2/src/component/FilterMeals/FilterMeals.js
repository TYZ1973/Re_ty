import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {

    // const [KeyWord, setKeyWord] = useState('');

    const inputChangeHandler =(e)=>{
        const KeyWord = e.target.value.trim();
        props.onFilter(KeyWord)
    };


    return (
        <div className={classes.FilterMeals}>
            <div className={classes.inputOuter}>
                
                <input 
                onChange={inputChangeHandler}
                className={classes.SearchInput}
                type="text" placeholder={"inputxxxxxx"} />
                <FontAwesomeIcon 
                className={classes.SearchIcon}
                icon={faSearch}/>
            </div>
        </div>
    );
};

export default FilterMeals;