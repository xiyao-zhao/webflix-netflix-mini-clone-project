import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
//import Sort from './components/Sort';
import ItemList from './components/ItemList';
import { useState } from 'react';

function App() {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [items, setData] = useState([]);
    const input = keyword.replace(' ', '+');
    const url = `//www.omdbapi.com/?apikey=f0e4ff4&s=${input}`;

    // Handle event when user clicks the search bar submit button
    const submitHandler = (event) => {
        // Prevent browser from submitting, but to submit asynchronously with Fetch API
        event.preventDefault();
        // Set a loading state, when data is fetched, update the data
        setIsLoading(true);
        // Fetch API
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.Search);
                setIsLoading(false);
            });
    };

    return (
        <div className="App">
            <NavBar />
            <SearchBar keyword={keyword} setKeyword={setKeyword} submitHandler={submitHandler}/>
            {/* <Sort items={items} /> */}
            {/* Conditional rendering only after getting back the data */}
            {items && <ItemList items={items} />}
        </div>
    );
}

export default App;
