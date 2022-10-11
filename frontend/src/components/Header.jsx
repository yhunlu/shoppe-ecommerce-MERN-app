import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  let Items = 10;
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center text-purple-500 text-lg mr-40">
        <Link to="/" passhref="true">
          <div className="text-green-900 font-bold flex items-center">
            <img src={logo} alt="logo" className="w-20 cursor-pointer" />
            Shoppe
          </div>
        </Link>
      </div>
      <ul className="text-green-900 md:flex hidden list-none flex-row justify-between items-center flex-initial font-bold">
        <li className="mx-10 cursor-pointer">
          <Link to="/cart">
            <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-green-900 hover:text-green-500">
              <a href="/cart" className="relative flex">
                <svg
                  className="flex-1 w-10 h-6 fill-current"
                  viewBox="0 0 40 24"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span
                  className="absolute right-0 top-0 rounded-full bg-green-500 w-5 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"
                  data-count={Items.length > 0 ? Items.length : 0}
                >
                  {/* {Items.length > 0 ? Items.length : 0} */}
                  {Items}
                </span>
              </a>
            </li>
          </Link>
          {/* <Link to="/profile">
            <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-green-900 hover:text-green-500">
              Profile
            </li>
          </Link> */}
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-green-900 md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-green-900 md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-20 -left-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md green-glassmorphism text-green-900 animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mx-10 cursor-pointer">
              <Link to="/cart">
                <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-green-900 hover:text-green-500">
                  <a href="/cart" className="relative flex">
                    <svg
                      className="flex-1 w-10 h-6 fill-current"
                      viewBox="0 0 40 24"
                    >
                      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                    </svg>
                    <span
                      className="absolute right-0 top-0 rounded-full bg-green-500 w-5 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center"
                      data-count={Items.length > 0 ? Items.length : 0}
                    >
                      {/* {Items.length > 0 ? Items.length : 0} */}
                      {Items}
                    </span>
                  </a>
                </li>
              </Link>
              {/* <div className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle ">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div> */}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
