import { createContext, useContext, useState, type ReactNode } from "react";
interface FilterProviderProps { children: ReactNode; }


    interface TeamContextType {
        theme: "Light" | "Dark" | "Normal";
        setTheme: React.Dispatch<React.SetStateAction<"Light" | "Dark" | "Normal">>;
    }

    //1- Crear el contexto, este es el que se consume    
    // eslint-disable-next-line react-refresh/only-export-components
    export const TeamContext = createContext<TeamContextType | undefined>(undefined);



//2- Crear el Provedier, para proveer el contexto
export function TeamProvider({children} : FilterProviderProps){

    const[theme, setTheme] = useState<"Light" | "Dark" | "Normal">('Normal');

    return(
        <TeamContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </TeamContext.Provider>
    );
};

// Custom Hook para consumir el contexto 
// eslint-disable-next-line react-refresh/only-export-components
export function useTeam() { 
    const context = useContext(TeamContext); 
    if (!context) { 
        throw new Error("useTeam debe usarse dentro de un CartProvider"); 
    } 
    return context;
}