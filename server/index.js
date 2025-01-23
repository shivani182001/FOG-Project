const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./db.json'); // Load mock data
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  let { sort, filter, page, limit } = req.query;

  let products = [...data.products];

  // Filtering
  if (filter) {
    const { brand, category, priceRange } = JSON.parse(filter);
    if (brand) products = products.filter((p) => p.brand === brand);
    if (category) products = products.filter((p) => p.category === category);
    if (priceRange) {
      const [min, max] = priceRange;
      products = products.filter((p) => p.price >= min && p.price <= max);
    }
  }

  // Sorting
  if (sort) {
    const [key, order] = sort.split(':');
    products.sort((a, b) => (order === 'asc' ? a[key] - b[key] : b[key] - a[key]));
  }

  // Pagination
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  res.json({
    total: products.length,
    page,
    limit,
    data: products.slice(start, end),
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1",
  //   "start":"run"
  // },