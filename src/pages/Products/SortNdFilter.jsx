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

    setQuery(prevQuery => {
      const {brands} = prevQuery
      let updatedBrands;

      // create or update brands array
      if (checked) {
        updatedBrands = brands ? [...brands, name] : [name]
      } else {
        updatedBrands = brands ? brands.filter(brand => brand !== name) : []
      }

      return {...prevQuery, brands: updatedBrands}
    })
  }

  // update query onChange category
  const handleChangeCategory = e => {
    setQuery( {...query, category: e.target.value} )
  }
  

  return (  
    <aside>
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
          <input type="checkbox" name="apple" checked={query.brands?.includes('apple') || false} onChange={handleChangeBrand} />
          <span>apple</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="samsung" checked={query.brands?.includes('samsung') || false} onChange={handleChangeBrand} />
          <span>samsung</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="xiaomi" checked={query.brands?.includes('xiaomi') || false} onChange={handleChangeBrand} />
          <span>xiaomi</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="hp" checked={query.brands?.includes('hp') || false} onChange={handleChangeBrand} />
          <span>hp</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="lenovo" checked={query.brands?.includes('lenovo') || false} onChange={handleChangeBrand} />
          <span>lenovo</span>
        </label>
      </div>

      {/* unit: category name */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Category Name</h3>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="category" value="laptop" checked={query.category==="laptop"} onChange={handleChangeCategory} />
          <span>laptop</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="category" value="phone" checked={query.category==="phone"} onChange={handleChangeCategory} />
          <span>phone</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="category" value="gadget" checked={query.category==="gadget"} onChange={handleChangeCategory} />
          <span>gadget</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="category" value="monitor" checked={query.category==="monitor"} onChange={handleChangeCategory} />
          <span>monitor</span>
        </label>
      </div>

      {/* unit: price range */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Price range</h3>
        <form onSubmit={handlePriceRange} className="flex gap-2">
          <div>
            <input type="number" name="priceMin" className="w-full px-2 py-1 border rounded" placeholder="min" /> 
          </div>
          <span> - </span>
          <div>
            <input type="number" name="priceMax" className="w-full px-2 py-1 border rounded" placeholder="max" />
          </div>
          <button className="inline-block px-3 py-1 rounded-md text-white bg-primary hover:opacity-90"> <PlayFill/> </button>
        </form>
      </div>
    </aside>
  );
}

export default SortNdFilter;