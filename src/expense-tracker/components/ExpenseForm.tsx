import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from 'react-hook-form';
import categories from '../categories';
const schema = z.object({
    description: z.string().min(3),
    amount: z.number({ invalid_type_error: 'Amount is required!' }),
    category: z.enum(categories)
});

type FormData = z.infer<typeof schema>

interface Expense {
    id: number,
    description: string,
    amount: number,
    category: string,
}
interface Props {
    addExpense: (expense: Expense) => void;
}
const ExpenseForm = ({ addExpense }: Props) => {

    const { register,
        handleSubmit, reset,
        formState: { errors, isValid } }
        = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        addExpense(data as Expense);
    }

    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset()
        })}>
            <div className='mb-3'>
                <label className='form-label'></label>
                <input {...register('description')} type="text" className='form-control' />
                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
            </div>
            <div className='mb-3'>
                <label className='form-label'>Amount</label>
                <input {...register('amount', { valueAsNumber: true })} type='number' className='form-control' />
                {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
            </div>
            <div className='mb-3'>
                <label className='form-label'>Category</label>
                <select {...register('category')} className='form-control'>
                    <option value=""></option>
                    {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
            </div>
            <button disabled={!isValid} type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default ExpenseForm;