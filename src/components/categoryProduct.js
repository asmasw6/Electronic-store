import React from "react";
import { Link , useNavigate} from "react-router-dom";

const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {

  const navigate = useNavigate();
  return (
    <article>
      <div className="category-product-title">
        <Link to={`products/${id}`}>{title}</Link>
      </div>
      <figure>
        <div className="category-product-image-container">
          <img src={`/images/${image}`} alt={title} />
        </div>
      </figure>
      <aside>
        <div className="category-product-info-dimensions">
          <h3>Deimensions</h3>
          <label htmlFor="">{specs.dimension}</label>
        </div>
        {specs.capacity && (
          <div className="category-product-info-capacity">
            <h3>Capacities</h3>
            <label htmlFor="">{specs.capacity}</label>
          </div>
        )}
         {specs.resolution && (
          <div className="category-product-info-resolution">
            <h3>Resolution</h3>
            <label>{specs.resolution}</label>
          </div>
        )}

        <div className="category-product-info-features">
          <h3>Features</h3>
          <ul>
            {features?.map((f, index) => {
              return <li key={index}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className="category-product-finance">
        <div className="category-product-finance-price">&pound;{price}</div>
        <div className="category-product-info-stock">
          <label htmlFor="">stock level: {stock}</label>
          <label htmlFor="">Free Delivery</label>
        </div>
        <div className="category-product-action">
          <button onClick={() =>navigate(`products/${id}`)}>View Product</button>
          <button>Add to Basket</button>
        </div>
        
      </aside>
    </article>
  );
};

export default CategoryProduct;
