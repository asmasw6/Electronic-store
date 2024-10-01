import "./App.css";
import React, { useState } from "react";
import { getCategories } from "./featcher";
import { Fragment } from "react";

import Layout from "./components/layout";
import ProductDetails from "./components/productDetails";
import Basket from "./components/basket";
import CheckOut from "./components/ckeckoute";
import Category from "./components/category";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });

  React.useEffect(() => {
    const feachData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    feachData();
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="categories/:categoryId" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;

/*
  const products = [
    {
      imageSrc: "logo192.png",
      title: "Iphon 15 pro",
      specification: ["fast CPU", "Safe Power", "Enhance Camera"],
      price: 499,
      stockCount:10,
    },
    {
      imageSrc: "logo192.png",
      title: "Iphon 15 pro",
      specification: ["fast CPU >>>", "Safe Power", "Enhance Camera"],
      price: 9988,
      stockCount:15,
    },
    {
      imageSrc: "logo192.png",
      title: "Iphon 15 pro",
      specification: ["fast CPU", "Safe Power", "Enhance Camera"],
      price: 988,
      stockCount:21,
    },
  ];

  function handelClick(product) {
    return alert(`hello ${product.price}`);
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            onPurches={handelClick}
          />
        ))}
      </ProductList>
      <h2>Produc Which cost up to $500</h2>
      <ul>
        {products
          .filter(({ price }) => price < 500)
          .map(({ title, price }) => (
            <Fragment key={title}>
              <li>
                {title} -${price}
              </li>
            </Fragment>
          ))}
      </ul>
    </div>
  );
  */
