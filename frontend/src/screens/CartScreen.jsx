import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MessageBox, ShoppingCarts } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/StateSlice/cartSlice';

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const qty = searchParams.has('qty') ? Number(searchParams.get('qty')) : 1;

  const dispatch = useDispatch();
  // cartSlice -> name is "cartItem"
  // cartSlice -> initial "items"
  const cartItem = useSelector((state) => state.cartItem);
  const { Items: products } = cartItem;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  if (products?.length === 0) {
    return (
      <div className="mx-auto mt-20">
        <MessageBox variant="info">
          Oh Sorry, We couldn't find any product in bag.{' '}
          <Link
            to="/"
            className="font-bold underline text-blue-800 hover:text-blue-300"
          >
            Start shopping...
          </Link>
        </MessageBox>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <ShoppingCarts
          products={products}
        />
      </div>
    </div>
  );
};

export default CartScreen;
