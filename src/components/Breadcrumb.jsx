import React from 'react';
import BreadcrumbImage from '../assets/two-birds-branch.jpg';

const Breadcrumb = ({title, desc}) => {
  return (
<div
  className="relative h-[400px] w-full mb-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${BreadcrumbImage})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-sky-900/60 via-black/30 to-sky-900/60"></div>
  <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
    <h1 className="text-4xl font-bold drop-shadow-lg">{title}</h1>
    <p className="text-sm mt-2 text-gray-200 drop-shadow">{desc}</p>
  </div>
</div>

  );
};

export default Breadcrumb;
