import React from 'react'
import { MaterialSymbol } from 'react-material-symbols';
import Breadcrumbs from '../Breadcrumbs';
import Image from 'next/image';
import Input from '../ui/Input';

const Header = () => {
  return (
    <div className="  w-full z-[1000] h-[52px] border-b py-2 flex flex-row item-center justify-start gap-10">
    <div className="relative flex flex-row justify-between items-center  w-full xl:pl-[10rem]  xl:pr-[11.1rem] ml-auto mr-auto p-4">
        <Image src="/app-logo.svg" alt="logo" width={28} height={28}/>
      {/* <div className={`${isOpen ? "hidden" : "block"} pr-10 justify-center items-center`}>
        <MaterialSymbol icon="menu" fill size={32} color="gray" className="ml-2 cursor-pointer top-5 left-4" onClick={toggleSidebar} />
      </div> */}
      {/* <Breadcrumbs breadcrumbs={getBreadcrumbs()} /> */}
      <div className="flex flex-row gap-4 w-full justify-end items-center">
        <Input type='search' placeholder="Search" className='w-[200px] md:w-[300px] text-sm ' />

        <MaterialSymbol icon="person" fill color="blue" size={28} />
        <MaterialSymbol icon="more_vert" fill color="gray" size={28} />
      </div>
    </div>
  </div>
  )
}

export default Header;