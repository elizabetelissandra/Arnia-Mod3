import React, { useState, useEffect } from "react";


interface Item{
    id: number;
    name: string;
}
const ItemList = () => {
    const [itens, setItens] = useState<Item[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                const fetchedItems =[
                    { id: 1, name: "Banana" },
                    { id: 2, name: "Uva" },
                    { id: 3, name: "Laranja" },
                    { id: 4, name: "Maça" },
                    { id: 5, name: "Pera" },
                    { id: 6, name: "Mamão" },
                    { id: 7, name: "Cebola" },
                    { id: 8, name: "Cenoura" },
                    { id: 9, name: "Alface" },
                    { id: 10, name: "Tomate" },

                ];
                setItens(fetchedItems)
            }, 1000);
        }

        fetchData();
    }, [])


    useEffect(() => {
        const filtered = itens.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(filtered);
    }, [searchTerm, itens]);

    return(
        <div>
            <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList