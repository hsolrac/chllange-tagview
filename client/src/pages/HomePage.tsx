import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { getProducts } from '../services/api';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination'

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number | null>(null);
  const [headers, setHeaders] = useState<any>({});


  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const handleLimitForPage =  (limit: number) => {
    setPerPage(limit)
  }

  useEffect(() => {
    fetchProduct(page+1, perPage);
  }, [page, perPage]);

  const fetchProduct = async (page: number, perPage: number | null) => {
    try {
      const { data, headers }  = await getProducts(page, perPage);
      setHeaders(headers);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  return (
    <div style={{margin: '5%'}}>
      <ProductList products={products}  />
      {headers && 
      <Pagination page={page} 
        totalCount={headers['total-count']} 
        totalPages={headers['page-items']} 
        handlePageClick={handlePageClick} 
        handleLimitForPage={handleLimitForPage}
      />}    
    </div>
  );
}

export default HomePage;

