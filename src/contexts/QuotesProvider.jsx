import { createContext, useState } from "react";

export const QuotesContext = createContext();

export const QuotesProvider = ({children}) => {
  const [clientQuotes, setClientQuotes] = useState([]);
  
  return (
    <QuotesContext.Provider value={{ clientQuotes, setClientQuotes }}>
      {children}
    </QuotesContext.Provider>
  );
};
