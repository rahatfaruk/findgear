import { Search } from "react-bootstrap-icons";

function SearchForm({ query, setQuery }) {
  const handleSearch = e => {
    e.preventDefault()

    const search = e.target.searchInp.value
    setQuery({ ...query, search })
  }

  return (
    <div className="">
      <form onSubmit={handleSearch} className="flex border border-gray-300 rounded-md shadow">
        <input type="text" name="searchInp" placeholder="Search" className="flex-1 px-2 py-2 m-1 min-w-0 text-gray-700 dark:text-gray-200" />

        <button type="submit" className="px-3 py-2 m-1 text-white bg-primary rounded-md hover:bg-teal-400 transition-colors focus:outline-none focus:bg-teal-400">
          <Search />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;