import classes from './ItemList.module.css';

const ItemList = ({ items }) => {
    
    return (
        <div className={classes.grid}>
            <ul>
                {/* Map through the results array and display and content */}
                {items.map((item, index) => (
                    <li key={item.imdbID + index} >
                        <img src={item.Poster} alt={item.Title} />
                        <p>{ item.Title }</p>
                        <p>{ item.Year }</p>
                    </li>       
                ))}
            </ul>
        </div>
    );
}

export default ItemList;