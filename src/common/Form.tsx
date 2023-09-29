import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    console.log(errors)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name', { required: true, minLength: 3 })}
                    type="text" className="form-control" />
                {errors.name?.type === 'required' && <p>Name is required</p>}
                {errors.name?.type === 'minLength' && <p>Name should be of min length 3!</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age', { required: true, min: 18, max: 80 })}
                    type="number" className="form-control" />
                {errors.age?.type === 'required' && <p>Age is required</p>}
                {errors.age?.type === 'min' && <p>Age should be more than 18</p>}
                {errors.age?.type === 'max' && <p>Age should not be more than 80</p>}
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;