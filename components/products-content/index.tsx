import { useState, useEffect } from 'react';
import List from './list';
// import { products } from './../../utils/data/products';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  const [length, setLength] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://soleauthenticity.azurewebsites.net/api/products/cus/ver-pagination/count');
      const dataRes = await res.json();

      setLength(dataRes.data);
    }

    fetchData();
  }, [])
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Sneaker Tops <span>({length})</span></h2>
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};
  
export default ProductsContent
  