import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function DefaultLayout() {
  return (
    <>
      <MainNav />

      <main className="container-fluid p-0">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
