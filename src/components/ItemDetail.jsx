import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ItemDetail() {

  const endPointItems = "https://fakestoreapi.com/products";
  const { id } = useParams();
  const [detailProducts, setDetailProducts] = useState([]);

  useEffect(() => {
    axios.get(`${endPointItems}/${id}`)
      .then(res => { setDetailProducts(res.data); })
      .catch(err => {
        console.log(err);
      });
  }, [id])

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

           {/* Link per tornare ai prodotti */}

            <Link
              to="/products"
              className="btn btn-outline-secondary btn-sm mb-3"
            >
              ← Torna ai prodotti
            </Link>

          <div className="card shadow-sm p-4">


            {/* Immagine */}
            <div className="text-center mb-4">
              <img
                src={detailProducts.image}
                alt={detailProducts.title}
                className="img-fluid"
                style={{ maxHeight: "420px", objectFit: "contain" }}
              />
            </div>

            {/* Titolo */}
            <h2 className="fw-bold mb-3 text-dark">
              {detailProducts.title}
            </h2>

            {/* Prezzo */}
            <h4 className="fw-semibold text-primary mb-4">
              € {detailProducts.price}
            </h4>

            {/* Descrizione */}
            <p className="text-muted mb-4">
              {detailProducts.description}
            </p>

            {/* CTA */}
            <button className="btn btn-dark btn-lg w-100">
              Aggiungi al carrello
            </button>

          </div>

        </div>
      </div>
    </div>


  )
}

export default ItemDetail
