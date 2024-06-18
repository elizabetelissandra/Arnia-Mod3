import React from 'react'
import './forms.css'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;

}

function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='divForm'>
                <label>Nome Completo</label>
                <input {...register("fullName", { required: true })} />
                {errors.fullName && <p role='alert'>Nome Completo é obrigatório</p>}
            </div>

            <div className='divForm'>
                <label>E-mail</label>
                <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
                {errors.email && <p role='alert'>E-mail é obrigatório</p>}
            </div>

            <div className='divForm'>
                <label>Senha</label>
                <input {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/ })} />
                {errors.password && <p role='alert'>Senha é obrigatória</p>}
            </div>

            <div className='divForm'>
                <label>Confirmação de Senha</label>
                <input {...register("confirmPassword", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/ })} />
                {errors.confirmPassword && <p role='alert'>Confirmação de Senha é obrigatória</p>}
            </div>

            <button type="submit">Cadastrar</button> 

        </form>
    )
}


export default Forms