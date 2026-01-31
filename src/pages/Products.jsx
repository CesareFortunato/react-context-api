import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";

function Products() {

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
        <div className="container my-4">
        <div className="row g-3">
            {products.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-lg-3 d-flex">
                    <CardItem
                        title={product.title}
                        desc={product.description}
                        price={product.price}
                        image={product.image}
                        id={product.id}
                    />
                </div>
            ))}
        </div>
        </div>
    );

}



    export default Products
