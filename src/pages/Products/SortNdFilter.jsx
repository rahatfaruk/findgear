import { PlayFill } from "react-bootstrap-icons";

function SortNdFilter({ query, setQuery }) {
  // update query onChange sort
  const handleChangeSort = e => {
    setQuery( {...query, sort: e.target.value} )
  }

  // update query onSubmit new price
  const handlePriceRange = e => {
    e.preventDefault()

    const priceMin = e.target.priceMin.value
    const priceMax = e.target.priceMax.value

    setQuery( {...query, priceMin, priceMax} )
  }

  // update query onChange brand
  const handleChangeBrand = e => {
    const {name, checked} = e.target    
    setQuery({...query, brands: {...query.brands, [name]:checked}})
  }
  

  return (  
    <aside className="px-4">
      {/* unit: sort */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Sort By</h3>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="sort" value="price-asc" checked={query.sort==="price-asc"} onChange={handleChangeSort} />
          <span>price - low to high</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="sort" value="price-desc" checked={query.sort==="price-desc"} onChange={handleChangeSort} />
          <span>price - high to low</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="sort" value="date" checked={query.sort==="date"} onChange={handleChangeSort} />
          <span>date added</span>
        </label>
      </div>

      {/* unit: brand name */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Brand Name</h3>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="apple" checked={query.brands?.apple || false} onChange={handleChangeBrand} />
          <span>apple</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="samsung" checked={query.brands?.samsung || false} onChange={handleChangeBrand} />
          <span>samsung</span>
        </label>
      </div>

      {/* unit: category name */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Category Name</h3>
        
      </div>

      {/* unit: price range */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Price range</h3>
        <form onSubmit={handlePriceRange} className="flex gap-2">
          <input type="number" name="priceMin" className="min-w-0 px-2 py-1 border rounded" placeholder="min" /> 
          <span> - </span>
          <input type="number" name="priceMax" className="min-w-0 px-2 py-1 border rounded" placeholder="max" />
          <button className="inline-block px-3 py-1 rounded-md text-white bg-primary hover:opacity-90"> <PlayFill/> </button>
        </form>
      </div>
    </aside>
  );
}

export default SortNdFilter;