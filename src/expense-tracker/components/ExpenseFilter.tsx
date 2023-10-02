import categories from "../categories";

interface Props {
    onSelection: (category: string) => void
}

const ExpenseFilter = ({ onSelection }: Props) => {

    return (
        <div>
            <select className="form-select" onChange={(event) => onSelection(event.target.value)} >
                <option value=''>All categories</option>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
        </div>
    )
}

export default ExpenseFilter;