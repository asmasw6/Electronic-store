import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Layout = ({ categories }) => {

  const renderCategories = () => {
    return categories.data.map((c) => (
      <li key={c.id}>
        <Link to={`/categories/${c.id}`}>{c.title}</Link>
      </li>
    ));

  };
  
  return (
    <Fragment>
      <header>My Store</header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div> Error: {categories.errorMessage}</div>
          )}
          <ul>{categories && renderCategories()}</ul>
        </nav>

        <main>
          <Outlet />
        </main>
      </section>

      <footer>
        <Link to="/">Home </Link> | <Link to="/basket">Basket </Link>
      </footer>
    </Fragment>
  );
};

export default Layout;
