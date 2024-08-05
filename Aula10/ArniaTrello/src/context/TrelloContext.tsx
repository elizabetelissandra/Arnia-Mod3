import React, { createContext, useContext, useState } from "react"
import { defaultValueDoContexto, TrelloContextType } from "../types/TrelloContextProps"

const TrelloContext = createContext<TrelloContextType>(defaultValueDoContexto)

export const useTrello = () => useContext(TrelloContext)

export const TrelloProvider = ( children?: React.ReactNode) => {
    const [data, setData] = useState<TrelloContextType['data']>([])

    const updateData = (newData: Partial<TrelloContextType['data']>) => {
        setData(prevData => ({ ...prevData, ...newData }))
    }
    return (
        <TrelloContext.Provider value={{ data, updateData }}>
            {children}
        </TrelloContext.Provider>
    )
}



export default TrelloContext