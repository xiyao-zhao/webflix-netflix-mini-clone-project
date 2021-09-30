// import classes from './Sort.module.css';
// import { useState, useEffect } from 'react';

// function Sort({items}) {
//     const [data, setData] = useState([]);
//     const [sortType, setSortType] = useState('Year');

//     useEffect(() => {
//         const sortYear = (() => {
//             // const option = {
//             //     new: 'Year',
//             // };
//             // const sortKey = option[0];
//             console.log(items);
//             const sorted = [...items].sort((a, b) => b.Year - a.Year);
//             console.log(sorted);
//             setData(sorted);
//         })
//         sortYear()
//     }, [sortType]);
    

//     return(
//         <div className={classes.sort}> 
//             <label htmlFor="sort">Sort by:</label>
//             <select id="sort" name="sortlist" form="sortform" onChange={setSortType('Year')}>
//                 <option value="default"></option>
//                 <option value="new">year(newest first)</option>
//                 <option value="old">year(oldest first)</option>
//                 <option value="atoz">alphabet(A - Z)</option>
//                 <option value="ztoa">alphabet(Z - A)</option>
//             </select>
//         </div>
//     )
// }

// export default Sort;