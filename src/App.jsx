import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";

//Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ItemDetail from "./components/ItemDetail";

function App() {

  return (

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


  )
}

export default App
