import React, { useEffect } from 'react';

import { LoadingBox, MessageBox, ProductDetail } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../store/StateSlice/productDetailSlice';
import { useParams } from 'react-router-dom';



const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // productsSlice -> name is "productDetail"
  // productsSlice -> initial "product, loading"
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  if (!loading && product?.length === 0) {
    return (
      <MessageBox variant="warning">
        Oh Sorry, We couldn't find any product.
      </MessageBox>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <ProductDetail key={product.id} product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductScreen;
