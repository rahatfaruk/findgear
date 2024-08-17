import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <section className="px-4 pt-4 pb-10">
      <div className="max-w-screen-xl mx-auto flex justify-center space-x-1 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <button onClick={() => setCurrentPage(currentPage - 1)} className="flex justify-center items-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-100 disabled:text-gray-400 dark:disabled:border-gray-500" disabled={currentPage === 1}><ChevronLeft /></button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-800 dark:text-white ${index + 1 === currentPage ? 'font-bold text-primary border-primary' : 'dark:border-gray-100'}`}
            onClick={() => setCurrentPage(index + 1)}
          >{index + 1}</button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)} className="flex justify-center items-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-100 disabled:text-gray-400 dark:disabled:border-gray-500" disabled={currentPage === totalPages}><ChevronRight /></button>
      </div>
    </section>
  );
}

export default Pagination;