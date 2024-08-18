import { useEffect, useState } from "react";
import Products from "./Products";
import SearchForm from "./SearchForm";
import SortNdFilter from "./SortNdFilter";
import Pagination from "./Pagination";
import SectionHeader from "../../comps/SectionHeader";
import Loading from "../../comps/Loading";

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(null)
  const [query, setQuery] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = import.meta.env.VITE_limit || 9

  const queryStr = `?search=${query.search || ""}&sort=${query.sort || ""}&priceMin=${query.priceMin || ""}&priceMax=${query.priceMax || ""}&brands=${query.brands?.join('+') || ""}&category=${query.category || ""}&currPage=${currentPage}&limit=${limit}`;  

  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.VITE_baseUrl}/products${queryStr}`)
    .then(res => res.json())
    .then(data => {
      const newTotalPages = Math.ceil(data.total / limit)
      setProducts(data.products)
      setTotalPages(newTotalPages);
      if (newTotalPages < currentPage) {
        setCurrentPage(1)
      }
      setLoading(false)
    })
    .catch(err => {
      alert('data loading failed');
      console.log(err.message);
      setLoading(false)
    })
  }, [queryStr])

  return (  
    <div>
      <SectionHeader title={"All Products"} />

      <section className="px-4 py-8">
        
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[300px_1fr] gap-6">
          <SortNdFilter query={query} setQuery={setQuery} />
          <main>
            <SearchForm query={query} setQuery={setQuery} />

            {loading 
            ? 
              <Loading /> 
            :
              <>
                <Products products={products} />
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
              </>
            }
          </main>
        </div>
      </section>    

    </div>
  );
}

export default ProductsPage;
