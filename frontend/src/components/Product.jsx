import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
const Product = ({ product }) => {
  return (
    <div
      key={product._id}
      className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-xl"
    >
      <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <Link to={`/product/${product._id}`}>
          <img
            className="w-full h-full object-center object-cover sm:w-full sm:h-full"
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={product.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="mt-3 flex flex-col items-center">
          <p className="mb-2 text-amber-600 font-bold shadow-md">
            {product.rating} out of 5 stars
          </p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                  'flex-shrink-0 h-5 w-5'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.numReviews} reviews
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-end items-center">
          <p className="font-medium text-gray-900 text-2xl">{`${product.price} $`}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
