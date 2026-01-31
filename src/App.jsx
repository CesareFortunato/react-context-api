import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";

//import contexts
import { BudgetProvider } from "./contexts/BudgetContext";
import { ProductsProvider } from "./contexts/ProductsContext";

//Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ItemDetail from "./components/ItemDetail";

function App() {

  return (
    <ProductsProvider>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ItemDetail />} />
            </Route>

          </Routes>
        </BrowserRouter >
      </BudgetProvider>
    </ProductsProvider>


  )
}

export default App
