import React from "react";
import { useForm } from "react-hook-form";
import ShowList from "./ShowList";

const InputForm = () => {
    // Form Input

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            counter: data.counter,
          };

          const url = `https://obscure-island-01542.herokuapp.com/addForm`;

          console.log(eventData);
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
          })
            .then(res => console.log('server', res))
        alert("Form Submit Successful")
    };

    //Show List
    
    return (
        <div>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="First Name" {...register("firstName")} />
                    <br />
                    <input className="my-3" placeholder="Last Name" {...register("lastName", { required: true })} />
                    <br />
                    <input placeholder="Email" type="email" {...register("email", { required: true })} />
                    <br />
                    <input className="my-3" placeholder="Counter"  {...register("counter", { required: true })} />
                    <br />
                    <input className="btn btn-info" type="submit" />
                </form>
            </div>

            <div>
                <ShowList />
            </div>
        </div>
    );
};

export default InputForm;