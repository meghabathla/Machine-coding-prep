import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProduct = async () => {
    const result = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await result.json();
    console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  const handlePagination = (pageNo) => {
    if (pageNo >= 1 && pageNo <= products.length / 10 && pageNo !== page)
      setPage(pageNo);
  };
  return (
    <>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <div className="product" key={product.id}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="product-img"
                />
                <span className="product-title">{product.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "paginationDisable"}
            onClick={() => handlePagination(page - 1)}
          >
            ◀
          </span>

          {[...Array(products.length / 10)].map((_, index) => {
            return (
              <span
                className={page === index + 1 ? "selectedPage" : ""}
                onClick={() => handlePagination(index + 1)}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}

          <span
            className={page < products.length / 10 ? "" : "paginationDisable"}
            onClick={() => handlePagination(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
}

export default App;
