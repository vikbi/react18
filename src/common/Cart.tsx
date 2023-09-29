import Button from "./Button/Button";
interface Product {
    id: number, name: string, quantity: number
  }
interface props {
    cartItems:Product[],
    onClear: () => void;
    onRemove: (item: Product) => void;
    onAddQuantity: ()=> void;
}

const Cart = ({cartItems, onClear, onRemove, onAddQuantity} : props) => {

    return (
        <div>
            <ul>
                {cartItems.map(item => 
                <li key={item.name}> 
                <span>{item.name}</span>
                <span>: {item.quantity}</span>
                <button onClick={() => onRemove(item)}>Remove</button>
                </li> )}
            </ul>
            <Button color={"danger"} onClick={onClear}>Clear</Button>
            <Button color={"primary"} onClick= {onAddQuantity}>Add Quantity </Button>
        </div>
    );
}

export default Cart;