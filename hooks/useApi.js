import { createContext, useContext } from "react";

const ApiContext = createContext(null)

export function ApiProvider({ children, apiData }) {
    return (
        <ApiContext.Provider value={apiData}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    return useContext(ApiContext);
}