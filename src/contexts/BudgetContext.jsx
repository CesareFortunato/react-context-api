import { createContext, useContext, useState } from "react";

//vars
const BudgetContext = createContext();

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);
    return (
        <BudgetContext.Provider
            value={{ budgetMode, setBudgetMode, }}
        >
            {children}
        </BudgetContext.Provider>
    )

}

function useBudget() {

    const context = useContext(BudgetContext);

    return context;

}





export {BudgetProvider, useBudget};