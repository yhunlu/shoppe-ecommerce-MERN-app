import React from 'react';
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/solid';
import { SelectMenu } from './common';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../store/StateSlice/cartSlice';
import { useDispatch } from 'react-redux';

const ShoppingCarts = ({ products }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">
        Shopping Cart
      </h1>
      <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>

          <ul
            role="list"
            className="border-t border-b border-gray-100 divide-y divide-gray-300 shadow-md"
          >
            {products.map((product, productIdx) => (
              <li key={product.product} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    key={product.images[0]._id}
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link
                            className="font-medium text-gray-700 hover:text-gray-800"
                            to={`/products/${product.product}`}
                          >
                            {product.name}
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {product.price}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label
                        htmlFor={`quantity-${productIdx}`}
                        className="sr-only"
                      >
                        Quantity, {product.name}
                      </label>

                      <div className="flex justify-between items-center mt-5 mr-auto">
                        <span className="font-bold text-sm">
                          Select Quantity
                        </span>
                        <select
                          className="flex z-10 mt-1 w-auto bg-white shadow-md max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm focus:ring-1 focus:ring-green-500 focus:border-green-500"
                          value={product.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(product.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option
                              className="cursor-default select-none relative py-2 pl-8 pr-4 text-green-600 font-bold"
                              key={x + 1}
                              value={x + 1}
                            >
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="absolute -top-8 right-2">
                        <button
                          type="button"
                          className="-m-1 p-1 inline-flex text-gray-400 hover:text-amber-300"
                          onClick={() => removeFromCartHandler(product.product)}
                        >
                          <span className="sr-only">Remove</span>
                          <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                    {product.countInStock > 0 ? (
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ClockIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-300"
                        aria-hidden="true"
                      />
                    )}

                    <span>
                      {product.countInStock > 0 ? 'In stock' : `Out OF Stock`}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 shadow-lg"
        >
          <h2
            id="summary-heading"
            className="text-lg font-medium text-gray-900"
          >
            Order summary
          </h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-600">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">
                $
                {products
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}{' '}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <dt className="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <a
                  href="#"
                  className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">
                    Learn more about how shipping is calculated
                  </span>
                  <QuestionMarkCircleIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </dt>
              <dd className="text-sm font-medium text-gray-900">
                $
                {products
                  .reduce((acc, item) => (acc + item.qty * item.price) * 0.1, 0)
                  .toFixed(2)}{' '}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <dt className="flex text-sm text-gray-600">
                <span>Tax estimate</span>
                <a
                  href="#"
                  className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">
                    Learn more about how tax is calculated
                  </span>
                  <QuestionMarkCircleIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </dt>
              <dd className="text-sm font-medium text-gray-900">
                $
                {products
                  .reduce(
                    (acc, item) => (acc + item.qty * item.price) * 0.05,
                    0
                  )
                  .toFixed(2)}{' '}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
              <dt className="text-base font-medium text-gray-900">
                Order total
              </dt>
              <dd className="text-base font-medium text-gray-900">
                $
                {products
                  .reduce(
                    (acc, item) =>
                      acc +
                      item.qty * item.price +
                      (acc + item.qty * item.price) * 0.1 +
                      (acc + item.qty * item.price) * 0.05,
                    0
                  )
                  .toFixed(2)}{' '}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Checkout
            </button>
          </div>
          <div className="mt-6 text-sm text-center text-gray-500">
            <p>
              or{' '}
              <Link
                to="/"
                className="text-green-700 font-medium hover:text-green-400"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </section>
      </form>
    </>
  );
};

export default ShoppingCarts;
