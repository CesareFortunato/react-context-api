import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


//vars
const ProductsContext = createContext();

function ProductsProvider({ children }) {

    const productsUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(productsUrl)
            .then(res => { setProducts(res.data); })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <ProductsContext.Provider
            value={{ products, setProducts, }}
        >
            {children}
        </ProductsContext.Provider>
    )

}

function useProducts() {

    const context = useContext(ProductsContext);

    return context;

}





export {ProductsProvider, useProducts};