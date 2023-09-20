import React from 'react';
import NotFoundSvg from '../assets/svg/not_found.svg';

const NotFound = () => {
  return (
    <div className="bg-gray-primary flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full w-1/2">
        <img className="max-h-full" src={NotFoundSvg} alt=""/>
      </div>
    </div>
  );
}

export default NotFound;
