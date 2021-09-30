import classes from './ItemList.module.css';

const ItemList = ({ items, Poster }) => {
    return (
        <div className={classes.grid}>
            <ul>
                {/* Map through the results array and display and content */}
                {items.map((item) => (
                    <li key={item.Poster} >
                        <img src={item.Poster} alt={Poster} />
                        <p>{ item.Title }</p>
                        <p>{ item.Year }</p>
                    </li>       
                ))}
            </ul>
        </div>
    );
}

export default ItemList;