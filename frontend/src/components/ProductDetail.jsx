import React from 'react';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import { SelectMenu } from './common';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductDetail = ({ product, selected, setSelected }) => {
  const navigate = useNavigate();

  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=${selected}`);
  };

  return (
    <div
      key={product._id}
      className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start"
    >
      {/* Image gallery */}
      <Tab.Group as="div" className="flex flex-col-reverse">
        {/* Image selector */}
        <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-4 gap-4">
            {product?.images.map((image) => (
              <Tab
                key={image.id}
                className="shadow-xl relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
              >
                {({ selected }) => (
                  <>
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 rounded-md overflow-hidden">
                      <img
                        src={image.src}
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                    <span
                      className={classNames(
                        selected ? 'ring-green-500' : 'ring-transparent',
                        'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="w-full aspect-w-1 aspect-h-1 shadow-md">
          {product?.images.map((image) => (
            <Tab.Panel key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-center object-cover shadow-md sm:rounded-lg"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      {/* Product info */}
      <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          {product.name}
        </h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">{`${'$' + product.price}`}</p>
        </div>

        {/* Reviews */}
        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{product.rating} out of 5 stars</p>
            <div className="ml-4 flex">
              <a
                href="/reviews"
                className="text-sm font-medium text-green-600 hover:text-green-500"
              >
                See all {product.numReviews} reviews
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>

          <div
            className="text-base text-gray-700 space-y-6"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>

        <form className="mt-6">
          <div className="flex items-center space-x-3">
            {product.countInStock > 0 ? (
              <>
                <p className="sr-only">Choose Quantity</p>
                <SelectMenu
                  values={product.countInStock}
                  selected={selected}
                  setSelected={setSelected}
                />
              </>
            ) : (
              <p className="mt-2 ml-24 justify-center font-bold text-amber-600 hover:bg-red-100">
                OUT OF STOCK
              </p>
            )}
          </div>
          <div className="mt-10 flex sm:flex-col1">
            <button
              type="submit"
              className={classNames(
                product.countInStock > 0
                  ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                  : 'bg-gray-300',
                'max-w-xs flex-1 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
              )}
              disabled={product.countInStock === 0}
              onClick={addToCartHandler}
            >
              Add to bag
            </button>

            <button
              type="button"
              className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <span className="sr-only">Add to favorites</span>
              <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
