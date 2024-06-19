import { useEffect, useState } from "react";

interface IState{
    name: string;
    email: string;
}

const UserName = () => {
    const [nome, setNome] = useState('Elizabete')

    useEffect(() =>{
        const fetchUser = async () => {
            const response = await fetch(
                "link"
            );
            const data = await response.json();
            setNome(data)
        };
        fetchUser()
    }, [])

    return (
        <div>
               <h2> {nome?.email}</h2>
               <h3>{nome?.name}</h3>
               <button></button>
        </div>
    )
}

export default UserName