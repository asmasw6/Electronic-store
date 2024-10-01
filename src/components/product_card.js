export function ProductCard({ product, background = "pink", onPurches }) {
  function getProductTitle() {
    return product.title;
  }

  return (
    <article
      style={{
        background: background,
      }}
    >
      <h2>{getProductTitle()}</h2>
      <img src={product.imageSrc} />
      <h3>Specification:</h3>
      <ul>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount}></Status>
      <buttun onClick={() => onPurches(product)}>
        Buy from ${product.price}
      </buttun>
    </article>
  );
}
function Status({stockCount}){
  if(stockCount ===0){
    return <p>Not Available</p>;
  }

  return <p>{stockCount} items Available</p>;

}
