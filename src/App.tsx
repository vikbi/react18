import { useState } from 'react'
import Message from './common/Message';
import Like from './common/Like';
import Alert from './common/Alert';
import Button from './common/Button/Button';
import Navbar from './common/NavBar/Navbar';
import Cart from './common/Cart';
import ExpandableText from './common/ExpandableText';
import Form from './common/Form/Form';
import ListGroup from './common/ListGroup/ListGroup';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import UserList from './common/UserList/UserList';

function App() {
  // E1.1 message, button and Alert
  // const [status, setStatus] = useState(false);
  // const [color, setColor] = useState("primary");
  //  =====E1.1====

  // E1.2 : about showing cart and navbar
  // const [cart, setCart] = useState({
  //   discount: 1,
  //   items: [
  //     { id: 1, name: 'product1', quantity: 1 },
  //     { id: 2, name: 'product2', quantity: 1 },
  //     { id: 3, name: 'product3', quantity: 1 },
  //     { id: 4, name: 'product4', quantity: 1 }
  //   ]
  // });

  // const addQuantity = () => {
  //   const updatedCart = {
  //     ...cart,
  //     items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item)
  //   }
  //   setCart(updatedCart);
  // }

  // const clear = () => {
  //   setCart({
  //     ...cart,
  //     items: []
  //   });
  // }

  // interface Product {
  //   id: number, name: string, quantity: number
  // }
  // const removeProduct = (product: Product) => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.filter(item => item.id != product.id)
  //   });
  // }
  // =====E1.2==== 
  // E1.3 : mini project with forms



  const [expenses, setExpenses] = useState([
    { id: 1, description: 'test1', amount: 10, category: 'Utilities' },
    { id: 2, description: 'test2', amount: 10, category: 'Utilities' },
    { id: 3, description: 'test3', amount: 10, category: 'Utilities' },
    { id: 4, description: 'test4', amount: 10, category: 'Utilities' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const visibleExpenses = (selectedCategory) ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return <>
    {/* E1.2 : about showing cart and navbar */}
    <Navbar cartItemsCount={1} />
    {/* <Cart cartItems={cart.items} onClear={clear} onRemove={removeProduct} onAddQuantity={addQuantity} /> */}
    {/* <ExpandableText maxLength={20}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, doloribus. Amet dolores commodi aut hic, obcaecati impedit ratione ex non minus eum mollitia vero accusamus nesciunt iste vitae tenetur, esse voluptas minima dolore labore! Maiores obcaecati, quidem voluptas quisquam dolor, rem aliquid optio velit ea, sit non et nostrum molestias voluptatibus aspernatur voluptatem dignissimos! Id eveniet placeat delectus autem? Esse facilis quasi impedit fugit ipsum, accusantium suscipit iusto saepe ducimus vel quia temporibus distinctio cumque totam modi neque quo. Veniam ducimus dicta adipisci dolore facilis maxime, quis impedit ea soluta rerum inventore necessitatibus optio quibusdam placeat odio! Vero, voluptas quasi.</ExpandableText> */}
    {/* =====E1.2==== */}

    {/* E1.1 : message, alert and button */}
    {/* <Message />
    {status && <Alert onClose={() => { setColor("primary"); setStatus(!status)}}>Hello <span>Alert!!</span></Alert>}
    <Like onClick={() => { setStatus(!status);  console.log('like clicked') }} />
    <Button color={color} onClick={() => {setStatus(!status); setColor('danger');} } >My Button</Button> */}
    {/* ====E1. =1==== */}

    {/* E1.3 : Form  */}
    {/* <Form /> */}
    {/* ===E1.3=== */}
    {/* <div className="mb-3">
      <ExpenseForm addExpense={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
    </div>
    <div className='mb-3'>
      <ExpenseFilter onSelection={(category) => setSelectedCategory(category)} />
    </div>
    <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} /> */}
    <UserList />
  </>
}

export default App
