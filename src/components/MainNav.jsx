import { NavLink } from "react-router-dom";
import { useEffect } from "react"
import { useBudget } from "../contexts/BudgetContext"

export default function MainNav() {

  const { budgetMode, setBudgetMode } = useBudget();

  useEffect(() => {
    console.log(budgetMode);
  }, [budgetMode]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="../public/logoipsum-408.png" alt="logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>




          <div className="collapse navbar-collapse" id="mainNavbar">

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Prodotti
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Chi siamo
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className={`btn ${budgetMode ? "btn-light text-dark" : "btn-outline-light"} ms-3`}
              onClick={() => setBudgetMode(prev => !prev)}
            >
              {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
