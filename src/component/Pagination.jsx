export const Pagination = ({ total, limit, page, setPage }) => {
    const totalPages = Math.ceil(total / limit);
    
    return (
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <nav className="flex space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                page === i + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  export default  Pagination