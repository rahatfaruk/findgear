import { useState } from "react";
import Products from "./Products";
import SearchForm from "./SearchForm";
import SortNdFilter from "./SortNdFilter";

function ProductsPage() {
  const [query, setQuery] = useState({})
  console.log('query', query);
  

  return (  
    <div>
      <SectionHeader title={"All Products"} />
      <SortNdFilter query={query} setQuery={setQuery} />
      <SearchForm query={query} setQuery={setQuery} />
      <Products />
    </div>
  );
}

export default ProductsPage;

function SectionHeader({title}) {
  return (  
    <div className="max-w-lg mx-auto mt-8 text-center">
      <h2 className="text-3xl md:text-4xl">
        <span className="inline-block border-t-4 border-primary">{title}</span>
      </h2>
    </div>
  );
}