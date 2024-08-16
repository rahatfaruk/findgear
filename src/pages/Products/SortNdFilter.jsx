import { Play, PlayFill } from "react-bootstrap-icons";

function SortNdFilter() {
  return (  
    <aside className="px-4">
      {/* unit: sort */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Sort</h3>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="sort" value="price-asc" />
          <span>price - low to high</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="sort" value="price-desc" />
          <span>price - high to low</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="radio" name="sort" value="date" />
          <span>date added</span>
        </label>
      </div>

      {/* unit: brand name */}
      <div className="bg-gray-100 shadow p-3 rounded mb-3">
        <h3 className="text-lg font-semibold mb-1.5 text-primary">Brand Name</h3>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="brand" value="apple" />
          <span>apple</span>
        </label>
        <label className="flex gap-2 mb-1">
          <input type="checkbox" name="brand" value="samsung" />
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
        <form className="flex gap-2">
          <input type="number" className="min-w-0 px-2 py-1 border rounded" placeholder="min" /> 
          <span> - </span>
          <input type="number" className="min-w-0 px-2 py-1 border rounded" placeholder="max" />
          <button className="inline-block px-3 py-1 rounded-md text-white bg-primary hover:opacity-90"> <PlayFill/> </button>
        </form>
      </div>
    </aside>
  );
}

export default SortNdFilter;