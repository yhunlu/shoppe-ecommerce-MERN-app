import React, { useEffect } from 'react';

import { LoadingBox, MessageBox, Product } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './../store/StateSlice/productsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // productsSlice -> name is "products"
  // productsSlice -> initial "productLists, loading"
  const products = useSelector((state) => state.products);
  const { loading, error, productLists } = products;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {productLists.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
