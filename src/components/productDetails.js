import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../featcher";

const ProductDetails = () => {
  const [product, setProduct] = React.useState({ errorMessage: "", data: {} });
  const { productId } = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [productId]);

  const { data } = product;

  const craeteMarkup = () =>{
    return {__html: data.description}
  }

  return (
    <article>
      <div className="category-product-title">{data.title}</div>
      <figure>
        <div className="category-product-image-container">
          <img src={`./images/${data.image}`} alt={data.title} />
        </div>
      </figure>
      <aside>
        <div className="category-product-info-dimensions">
          <h3>Deimensions</h3>
          <label htmlFor="">{data?.specs?.dimension}</label>
        </div>

        {data?.specs?.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{data?.specs?.capacity}</label>
          </div>
        )}

        {data?.specs?.resolution && (
          <div className="category-product-info-resolution">
            <h3>Resolution</h3>
            <label>{data?.specs?.resolution}</label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {data.features?.map((f, index) => {
              return <li key={index}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-finance-price">
          &pound;{data.price}
        </div>
        <div className="category-product-info-stock">
          <label htmlFor="">stock level: {data.stock}</label>
          <label htmlFor="">Free Delivery</label>
        </div>
        <div className="category-product-action">
          <button>Add to Basket</button>
        </div>
      </aside>
      <div className="category-product-description" dangerouslySetInnerHTML={craeteMarkup()}>
       {data.description}
      </div>
    </article>
  );
};
export default ProductDetails;
