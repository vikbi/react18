
interface props {
    cartItemsCount: number
}

const Navbar = ({cartItemsCount} : props) => {
    return (
        <div>
            {cartItemsCount}
        </div>
    )
}

export default Navbar;