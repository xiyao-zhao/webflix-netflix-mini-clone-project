import classes from './SearchBar.module.css';

function SearchBar({ keyword, setKeyword, submitHandler }) {
    // Display content after user input
    function displayHandler(event) {
        setKeyword(event.target.value);
        return event.target.value;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.searchBar}>
                <input 
                    type='text' 
                    required id='search' 
                    className={classes.input} 
                    value={keyword}
                    placeholder='Search for series or movies by title' 
                    onChange={displayHandler}
                />
                <button type='submit'>Search</button>
            </div>
        </form>
    )
};

export default SearchBar;