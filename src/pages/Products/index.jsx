import { useEffect, useState } from "react";
import Products from "./Products";
import SearchForm from "./SearchForm";
import SortNdFilter from "./SortNdFilter";
import Pagination from "./Pagination";

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 3

  const queryStr = `?search=${query.search || ""}&sort=${query.sort || ""}&priceMin=${query.priceMin || ""}&priceMax=${query.priceMax || ""}&brands=${query.brands?.join('+') || ""}&category=${query.category || ""}&currPage=${currentPage}&limit=${limit}`;
  console.log(queryStr);
  

  useEffect(() => {
    fetch('http://localhost:3000/products'+queryStr)
    .then(res => res.json())
    .then(data => {
      const newTotalPages = Math.ceil(data.total / limit)
      setProducts(data.products)
      setTotalPages(newTotalPages);
      if (newTotalPages < currentPage) {
        setCurrentPage(1)
      }
    })
  }, [queryStr])

  return (  
    <div>
      <SectionHeader title={"All Products"} />
      <SortNdFilter query={query} setQuery={setQuery} />
      <SearchForm query={query} setQuery={setQuery} />
      <Products products={products} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
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