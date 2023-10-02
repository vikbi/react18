

import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    description: z.string().min(3),
    category: z.string(),
    quantity: z.number({ invalid_type_error: 'Quantity is required!' }).min(1, { message: 'Quantity must be atleast 1!' }).max(50)
});

type FormData = z.infer<typeof schema>
interface Product {
    description: string, quantity: number, category: string
}
interface Props {
    addProduct: (d: Product) => void;
}
const Form = ({ addProduct }: Props) => {
    const { register,
        handleSubmit,
        formState: { errors, isValid } }
        = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        console.log(data)
        addProduct(data as Product);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Description</label>
                <input {...register('description')}
                    type="text" className="form-control" />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Quantity</label>
                <input {...register('quantity', { valueAsNumber: true })}
                    type="number" className="form-control" />
                {errors.quantity && <p className="text-danger">{errors.quantity.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Category</label>
                <input {...register('category')}
                    type="text" className="form-control" />
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;