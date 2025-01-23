const FilterAndSort = ({ setFilters, setSort }) => {
    return (
      <div id="shop" className="container mx-auto px-4 py-4 bg-white shadow rounded-lg flex justify-between items-center">
        <div className="flex space-x-4">
          <select 
            className="bg-gray-200 px-4 py-2 rounded-lg"
            onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="">All Categories</option>
            <option value="Furniture">Furniture</option>
            <option value="Decor">Decor</option>
            <option value="Lighting">Lighting</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
        <div className="flex space-x-4 items-center">
          <select 
            className="bg-gray-200 px-4 py-2 rounded-lg"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    );
  };
  export default FilterAndSort