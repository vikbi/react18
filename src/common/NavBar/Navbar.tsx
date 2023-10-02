import styles from './Navbar.module.css';


interface props {
    cartItemsCount: number
}

const Navbar = ({ cartItemsCount }: props) => {
    return (
        <div className={styles['navbar-head']}>
            {cartItemsCount}
        </div>
    )
}

export default Navbar;