import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Rate = ({ value, starRange, color }) => {
  return (
    <StarIcon
      className={classNames(
        value >= starRange
          ? 'text-yellow-400'
          : value >= starRange - 0.5
          ? 'flex-shrink-0 h-5 w-5'
          : 'text-gray-200'
      )}
      aria-hidden="true"
    />
    // <span>
    //   <i
    //     style={{ color }}
    //     className={
    //       value >= starRange
    //         ? 'fas fa-star'
    //         : value >= starRange - 0.5
    //         ? 'fas fa-star-half-alt'
    //         : 'far fa-star'
    //     }
    //   ></i>
    // </span>
  );
};

Rate.defaultProps = {
  color: '#ffa600',
};

export default Rate;
