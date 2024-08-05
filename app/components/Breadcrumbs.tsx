// components/Breadcrumbs.tsx
import React from 'react';
import { MaterialSymbol } from 'react-material-symbols';

interface BreadcrumbsProps {
  breadcrumbs: string[];
}

const Breadcrumbs= ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 px-4 p-[3px] border border-gray-300 rounded-md">
          <span className='flex flex-row justify-center items-center text-gray-400 gap-1'><MaterialSymbol icon='home' size={24} color='gray' className='pb-1'/> &gt; </span>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          
          <span className="text-gray-600 text-nowrap">{breadcrumb}</span>
          {index < breadcrumbs.length - 1 && <span className="text-gray-400"> &gt;</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
