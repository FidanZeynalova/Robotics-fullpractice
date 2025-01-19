import React, { createContext, useEffect, useState } from 'react'

export const RobotContext = createContext()

function FavoritesContextProvider({ children }) {
    let local = JSON.parse(localStorage.getItem("favorites"))
    let [fav, setFav] = useState(local ? local : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(fav))
    }, [fav])

    const value = {
        fav, setFav
    }

    return (
        <RobotContext.Provider value={value}>
            {children}
        </RobotContext.Provider>
    )
}

export default FavoritesContextProvider
