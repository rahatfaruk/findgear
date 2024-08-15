import Products from "./Products";

function ProductsPage() {
  return (  
    <div>
      <SectionHeader title={"All Products"} />
      <Products />
    </div>
  );
}

export default ProductsPage;

function SectionHeader({title}) {
  return (  
    <div className="max-w-lg mx-auto mt-8 text-center">
      <h2 className="text-3xl md:text-4xl">
        <span className="border-t-4 border-orange-600">{title}</span>
      </h2>
    </div>
  );
}