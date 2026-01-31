import heroVideo from "../assets/10677739-hd_1920_1080_30fps.mp4";
import { Link } from "react-router-dom";


function HomePage() {
    
    return (
    <section className="position-relative vh-100 overflow-hidden">
      
      {/* Video background  */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", filter: "blur(6px)" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay scuro per contrasto testo */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.55)" }}
      />

      {/* Contenuto */}
      <div className="position-relative h-100 d-flex align-items-center">
        <div className="container text-light">
          <h1 className="display-4 fw-bold">Benvenuto su MiniShop</h1>
          <p className="lead text-secondary text-light">
            Vestiti, elettronica e gioielli: scegli il tuo prossimo acquisto.
          </p>

          <Link to="/products" className="btn btn-primary btn-lg">
            Vai ai prodotti
          </Link>
        </div>
      </div>
    </section>
  );
}


export default HomePage
