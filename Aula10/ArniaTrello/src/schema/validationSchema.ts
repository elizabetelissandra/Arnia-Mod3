import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Obrigatório'),
    email: Yup.string().email('Email ou senha inválidos, tente novamente.').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
})

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email('Email ou senha inválidos, tente novamente.').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
})

export const validationSchemaCard = Yup.object().shape({
    title: Yup.string().required('Obrigatório'),
    content: Yup.string().required('Obrigatório'),
})
