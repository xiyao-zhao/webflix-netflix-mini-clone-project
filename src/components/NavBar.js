import classes from './NavBar.module.css';

function NavBar() {
    return (
        <div className={classes.navbar}>
            <h1 className={classes.h1}>
                <span>WEBFLIX</span>
            </h1>
        </div>
    )
};

export default NavBar;