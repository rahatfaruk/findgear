import ProductCard from "./ProductCard";

function Products({products}) {
  return (
    <div className={`max-w-screen-xl mx-auto my-8`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;