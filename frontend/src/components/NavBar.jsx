import React, { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  MenuIcon,
  ShoppingBagIcon,
  XIcon,
  UserIcon,
} from '@heroicons/react/outline';

import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../store/StateSlice/userSlice';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
];

const adminNavigation = [
  { name: 'Users', href: '/admin/users' },
  { name: 'Products', href: '/admin/products' },
  { name: 'Orders', href: '/admin/orders' },
];

const sellerNavigation = [
  { name: 'Products', href: '/seller/products' },
  { name: 'Orders', href: '/seller/orders' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const dispatch = useDispatch();
  // cartSlice -> name is "cartItem"
  // cartSlice -> initial "items"
  const cartItem = useSelector((state) => state.cartItem);
  const { Items } = cartItem;

  // cartSlice -> name is "user"
  // cartSlice -> initial "userInfo"
  const user = useSelector((state) => state.users);
  const { userInfo } = user;

  const signoutHandler = () => {
    dispatch(signout());
  };

  const userNavigation = [
    {
      name: 'Your Profile',
      href: '/myprofile',
      onClick: () => {
        console.log('my profile');
      },
    },
    {
      name: 'Sign out',
      href: '/signin',
      onClick: () => {
        signoutHandler();
      },
    },
  ];

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-white lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block h-14 w-auto"
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <Link
                    to="/cart"
                    className="group -m-2 p-2 flex items-center bg-white rounded-full hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <ShoppingBagIcon
                      className={classNames(
                        Items?.length > 0
                          ? 'text-green-600 hover:text-green-400'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        Items?.length > 0
                          ? '-mt-5 -ml-1 inline-flex items-center px-2.5 py-1 rounded-full bg-green-600 text-white'
                          : 'text-gray-700 group-hover:text-gray-800',
                        'font-bold  text-sm'
                      )}
                    >
                      {Items?.length > 0 ? Items.length : ''}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                  {/* Profile dropdown */}
                  {userInfo.email ? (
                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={userInfo.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.href}
                                  onClick={item.onClick}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      to="/signin"
                      className="group flex items-center mx-5 bg-white rounded-full hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      <UserIcon
                        className="flex-shrink-0 mx-5 w-6 h-6 text-gray-400 hover:text-gray-600"
                        aria-hidden="true"
                      />
                    </Link>
                  )}

                  {/* <a
                    href="#"
                    className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    New Project
                  </a> */}
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  {userInfo.email ? (
                    <>
                      {' '}
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={userInfo.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {userInfo.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {userInfo.email}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to="/signin"
                      className="group flex items-center mx-5 bg-white rounded-full hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      <UserIcon
                        className="flex-shrink-0 mx-7 w-6 h-6 text-gray-400 hover:text-gray-600"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                  <Link
                    to="/cart"
                    className="group -m-2 p-2 ml-10 flex items-center bg-white rounded-full hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <ShoppingBagIcon
                      className={classNames(
                        Items?.length > 0
                          ? 'text-green-600 hover:text-green-400'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        Items?.length > 0
                          ? '-mt-5 -ml-1 inline-flex items-center px-2.5 py-1 rounded-full bg-green-600 text-white'
                          : 'text-gray-700 group-hover:text-gray-800',
                        'font-bold  text-sm'
                      )}
                    >
                      {Items?.length > 0 ? Items.length : ''}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
                {userInfo.email ? (
                  <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={item.onClick}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
};

export default NavBar;
