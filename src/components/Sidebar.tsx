import React, { useEffect, useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import Dashboard from './MainMenu/Dashboard';
import SubMenu1 from './MainMenu/InboxContent/SubMenu1';
import SubMenu2 from './MainMenu/InboxContent/SubMenu2';
import InboxContent from './MainMenu/InboxContent/InboxContent';
import Link from 'next/link';
import Bookings from './MainMenu/Bookings/bookings';

const useUserAgent = () => {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return userAgent;
};

const menuItems = [
  { name: 'Overview', icon: 'dashboard', url: '#' },
  { name: 'Bookings', icon: 'inbox', url: '#' },
  { name: 'Payments', icon: 'chat', url: '#' },
  {
    name: 'Supports', icon: 'notifications', url: '#'},
  { name: 'Analytics', icon: 'task', url: '#' },
  { name: 'Definitions', icon: 'group', url: '#' },
  
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string[]>(['Overview']);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  
  const userAgent = useUserAgent();
  const isMobile = /Mobi|Android/i.test(userAgent);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
   //Function to close sidebar on mobile
    if (!isMobile) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    // };
  }, [isMobile]);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, isMobile]);



  // Function to handle menu click
  const handleMenuClick = (path: string[], isSubMenu: boolean) => {
    setActiveMenu(path);
    const pathString = path.join('/');

    if (!isSubMenu) {
      if (expandedMenus.includes(pathString)) {
        setExpandedMenus(expandedMenus.filter(item => item !== pathString));
      } else {
        setExpandedMenus([pathString]); // Only keep the current menu expanded
      }
    } else {
      setExpandedMenus([...expandedMenus, pathString]); // Keep the current menu expanded
    }
  };


  // Function to get the breadcrumbs
  const getBreadcrumbs = () => {
    return activeMenu;
  };

  const getContentComponent = () => {
    const activePath = activeMenu;
    switch (activePath[activePath.length - 1]) {
      case 'Bookings':
        return <Bookings/>
      case 'Sub Inbox 1':
        return <SubMenu1 />;
      case 'Sub Inbox 2':
        return <SubMenu2 />;
      case 'Sub Notifications 1':
        return <SubMenu1 />;
      case 'Sub Notifications 2':
        return <SubMenu2 />;
      case 'Sub Sub Notifications 1':
        return <SubMenu1 />;
      default:
        return <Dashboard />;
    }
  };


console.log(activeMenu[activeMenu.length - 1])
  const lastMenu = activeMenu[activeMenu.length - 1];

  const renderMenuItems = (items: any[], parentPath: string[] = [], isSubMenu = false) => {
    return items.map((menuItem) => {
      const currentPath = parentPath.concat(menuItem.name);
      const pathString = currentPath.join('/');
      return (
        <li key={pathString}>
          <Link
            href={menuItem.url}
            onClick={() => handleMenuClick(currentPath, isSubMenu)}
            className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 pl-5 pr-6 text-xl ${
              activeMenu.join('/') === pathString ? 'border-indigo-500 bg-gray-50 text-gray-800' : 'border-transparent'
            }`}
          >
            <span className="inline-flex justify-center items-center ml-4">
              <MaterialSymbol icon={menuItem.icon as any} fill size={20} />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">{menuItem.name}</span>
            {menuItem.subMenus && (
              <span className={`ml-auto mr-4 ${expandedMenus.includes(pathString) ? 'transform rotate-180' : ''}`}>
                <MaterialSymbol icon="keyboard_arrow_down" fill size={20} />
              </span>
            )}
          </Link>
          {expandedMenus.includes(pathString) && menuItem.subMenus && (
            <ul className="pl-5">
              {renderMenuItems(menuItem.subMenus, currentPath, true)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (



    <div className="flex flex-col m-auto relative">

{/* Second Header */}

      <div className="h-[50px] py-2 flex flex-row item-center justify-start gap-10 w-full max-w-[1800px] ml-auto mr-auto">
        <div className="relative flex flex-row justify-between items-center md:pl-1 w-full p-4  xl:mx-48 2xl:mx-40">
          <div className={` pr-10 justify-center items-center flex gap-4`}>
            <MaterialSymbol icon={isOpen? "close" : "menu"} fill size={32} color="gray" className=" cursor-pointer top-5 left-4 hover:bg-gray-200 rounded-lg" onClick={toggleSidebar} />
            <div className='font-[700] text-black text-xl border-b-2 border-indigo-500 w-max'>{lastMenu}</div>
          
          </div>
          {/* <div className="flex flex-row gap-4 w-full justify-end items-center">
            <MaterialSymbol icon="person" fill color="blue" size={28} />
            <MaterialSymbol icon="more_vert" fill color="gray" size={28} />
          </div> */}
        </div>
      </div>

      {/* Sidebar and Content */}
      <div className={`flex-grow flex flex-row bg-white ${isOpen && !isMobile ? 'xl:ml-32' : 'xl:ml-[-5rem]'} xl:mr-32 transition-all duration-500 ease-in-out`}>
        {isOpen && isMobile && (
          <div className="fixed inset-0 bg-white  bg-opacity-50 z-40" onClick={toggleSidebar}></div>
        )}
        <div className={`${isMobile ? "fixed h-full": ""} flex flex-col top-[3.25rem] left-0 w-64 bg-gray-50  mr-2 rounded-lg h-100vh transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          {/* <div className="flex items-center justify-between px-6 h-14 ">
            <div className='font-semibold text-black text-xl border-b-2 border-indigo-500'>{lastMenu}</div>
            <MaterialSymbol icon="close" fill size={28} color="gray" className="ml-2 cursor-pointer rounded-lg hover:bg-gray-200" onClick={toggleSidebar} />
          </div> */}
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col pb-4 space-y-1 text-xl">
              {renderMenuItems(menuItems)}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className={`w-full h-[calc(100vh-110px)] overflow-y-scroll custom-scrollbar border rounded-lg shadow-sm p-4 ${isOpen ? "" : "max-w-[1800px] ml-auto mr-auto"} ${isOpen && isMobile ? '' : ''}`}>
          {getContentComponent()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
