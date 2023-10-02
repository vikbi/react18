
interface Product {
    description: string, quantity: number, category: string
}

interface Props {
    items: Product[]
}

const ListGroup = ({ items }: Props) => {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">category</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => <tr>
                        <th></th>
                        <th>{item.description}</th>
                        <th>{item.quantity}</th>
                        <th>{item.quantity}</th>
                    </tr>)}
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default ListGroup;