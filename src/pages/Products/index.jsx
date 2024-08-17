import { useEffect, useState } from "react";
import Products from "./Products";
import SearchForm from "./SearchForm";
import SortNdFilter from "./SortNdFilter";
import Pagination from "./Pagination";
import SectionHeader from "../../comps/SectionHeader";

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = import.meta.env.VITE_limit || 9

  const queryStr = `?search=${query.search || ""}&sort=${query.sort || ""}&priceMin=${query.priceMin || ""}&priceMax=${query.priceMax || ""}&brands=${query.brands?.join('+') || ""}&category=${query.category || ""}&currPage=${currentPage}&limit=${limit}`;  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseUrl}/products${queryStr}`)
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
