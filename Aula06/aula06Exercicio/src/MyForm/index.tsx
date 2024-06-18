import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


const MyForm = () => {
    const {register, handleSubmit, formState} = useForm();
  return (
    <form>
        <label>
            Nome
            <input type="text" {...register("name", {required: true})}/>
        </label>
        
        <label>
            Email
            <input type="text" {...register("email", {required: true})}/>
        
        </label>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default MyForm