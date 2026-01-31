
import CardItem from "../components/CardItem";
import { useProducts } from "../contexts/ProductsContext";
import { useBudget } from "../contexts/BudgetContext";

function Products() {

    const { products } = useProducts();
    const { budgetMode } = useBudget();
    const visibleProducts = budgetMode
        ? products.filter(p => p.price <= 30)
        : products;

    return (
        <div className="container my-4">
            <div className="row g-3">
                {visibleProducts.map((product) => (
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
