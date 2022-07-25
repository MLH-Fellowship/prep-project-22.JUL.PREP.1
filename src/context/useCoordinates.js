import { useState, useContext, createContext } from "react";

const PositionContext = createContext();

export const usePosition = () => useContext(PositionContext);

export const PositionProvider = ({ children }) => {

    const [position, setPosition] = useState({
        latitude: 0.32,
        longitude: 9.22,
    });

    return (
        <PositionContext.Provider value={{ position, setPosition }}>
        {children}
        </PositionContext.Provider>
    );
}
