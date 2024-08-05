// import React from 'react'
// import { MaterialSymbol } from 'react-material-symbols'

// const Sidebar = () => {
// const [isOpen, setIsOpen] = React.useState(true)

// const toggleSidebar = () => {
//     setIsOpen(!isOpen)
// }

//   return (

// <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800  ">



// {/* Side BAR */}
    
// <div className={`fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
//     <div className="flex items-center justify-between px-6 h-14 border-b">
//       <div>Sidebar Navigation</div>
//     <MaterialSymbol icon="close" fill size={28} color='gray' className="ml-2 cursor-pointer" onClick={toggleSidebar}/>
//     </div>
//     <div className="overflow-y-auto overflow-x-hidden flex-grow">
//       <ul className="flex flex-col py-4 space-y-1">
//         <li className="px-5">
//           <div className="flex flex-row items-center h-8">
//             <div className="text-base font-light tracking-wide text-gray-500">Menu</div>
//           </div>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Dashboard</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Inbox</span>
//             <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Messages</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Notifications</span>
//             <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
//           </a>
//         </li>
//         <li className="px-5">
//           <div className="flex flex-row items-center h-8">
//             <div className="text-base font-light tracking-wide text-gray-500">Tasks</div>
//           </div>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Available Tasks</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Clients</span>
//             <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
//           </a>
//         </li>
//         <li className="px-5">
//           <div className="flex flex-row items-center h-8">
//             <div className="text-base font-light tracking-wide text-gray-500">Settings</div>
//           </div>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Profile</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//               </svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Settings</span>
//           </a>
//         </li>
//         <li>
//           <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
//             <span className="inline-flex justify-center items-center ml-4">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
//             </span>
//             <span className="ml-2 text-base tracking-wide truncate">Logout</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>


// <div className={`relative ${isOpen ? 'hidden' : 'block'}`}>
//     <div>
//     <MaterialSymbol icon='menu' fill size={28} color='gray' className={`cursor-pointer absolute top-4 left-4  `} onClick={toggleSidebar}/>
//     </div>

// </div>




// </div>
//   )
// }

// export default Sidebar

import React, { Children, useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import Dashboard from './MainMenu/Dashboard';
import SubMenu1 from './MainMenu/InboxContent/SubMenu1';
import SubMenu2 from './MainMenu/InboxContent/SubMenu2';
import InboxContent from './MainMenu/InboxContent/InboxContent';
import Breadcrumbs from './Breadcrumbs';




const menuItems = [
  { name: 'Dashboard', icon: 'dashboard' },
  { name: 'Inbox', icon: 'inbox', subMenus: [{ name: 'Sub Inbox 1', icon: 'inbox' }, { name: 'Sub Inbox 2', icon: 'inbox' }] },
  { name: 'Messages', icon: 'chat' },
  { name: 'Notifications', icon: 'notifications', subMenus: [{ name: 'Sub Notifications 1', icon: 'notifications', Children:[{ name: 'Sub Notifications 1', icon: 'notifications' }] }, { name: 'Sub Notifications 2', icon: 'notifications' }] },
  { name: 'Available Tasks', icon: 'task' },
  { name: 'Clients', icon: 'group' },
  { name: 'Profile', icon: 'person' },
  { name: 'Settings', icon: 'settings' },
  { name: 'Logout', icon: 'logout' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // setExpandedMenus([]);
    //   setActiveSubMenu("");
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setActiveSubMenu("");
    if (menuItems.find(item => item.name === menu)?.subMenus) {
      setExpandedMenus(prev =>
        prev.includes(menu) ? prev.filter(item => item !== menu) : [...prev, menu]
      );
    }
  };

  const handleSubMenuClick = (menu: string, subMenu: string) => {
    setActiveMenu(menu);
    setActiveSubMenu(subMenu);
  };



  const getBreadcrumbs = () => {
    const breadcrumbs = [activeMenu];
    if (activeSubMenu) {
      breadcrumbs.push(activeSubMenu);
    }
    return breadcrumbs;
  };


  const getContentComponent = () => {
    if (activeSubMenu) {
      switch (activeSubMenu) {
        case 'Sub Inbox 1':
          return <SubMenu1/>;
        case 'Sub Inbox 2':
          return <SubMenu2/>;
        case 'Sub Notifications 1':
          return <SubMenu1/>;
        case 'Sub Notifications 2':
          return <SubMenu2 />;
        default:
          return <Dashboard />;
      }
    } else {
      switch (activeMenu) {
        case 'Dashboard':
          return <Dashboard />;
       
        case 'Messages':
          return  <Dashboard />;
        case 'Notifications':
          return <InboxContent />;
        case 'Available Tasks':
          return  <Dashboard />
        case 'Clients':
          return <InboxContent />;
        case 'Profile':
          return  <Dashboard />;
        case 'Settings':
          return  <InboxContent />;
        case 'Logout':
          return  <Dashboard />;
        default:
          return <Dashboard />;
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Side BAR */}
      <div className={`fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between px-6 h-14 border-b">
          <div>Sidebar Navigation</div>
          <MaterialSymbol icon="close" fill size={28} color='gray' className="ml-2 cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {menuItems.map((menuItem) => (
              <li key={menuItem.name}>
                <a
                  href="#"
                  onClick={() => handleMenuClick(menuItem.name)}
                  className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 pl-2 pr-6 ${activeMenu === menuItem.name && !activeSubMenu ? 'border-indigo-500 bg-gray-50 text-gray-800' : 'border-transparent'}`}
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <MaterialSymbol icon={menuItem.icon}  fill size={20} />
                  </span>
                  <span className="ml-2  text-base tracking-wide truncate">{menuItem.name}</span>
                  {menuItem.subMenus && (
                    <span className={`ml-auto mr-4 ${expandedMenus.includes(menuItem.name) ? 'transform rotate-180' : ''}`}>
                      <MaterialSymbol icon="keyboard_arrow_down" fill size={20} />
                    </span>
                  )}
                </a>
                {expandedMenus.includes(menuItem.name) && menuItem.subMenus && (
                  <ul className="pl-5">
                    {menuItem.subMenus.map(subMenuItem => (
                      <li key={subMenuItem.name}>
                        <a
                          href="#"
                          onClick={() => handleSubMenuClick(menuItem.name, subMenuItem.name)}
                          className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 pr-6 ${activeSubMenu === subMenuItem.name ? 'border-indigo-500 bg-gray-50 text-gray-800' : 'border-transparent'}`}
                        >
                          <span className="inline-flex justify-center items-center ml-4">
                            <MaterialSymbol icon={subMenuItem.icon} fill size={20} />
                          </span>
                          <span className="ml-2 text-base tracking-wide truncate">{subMenuItem.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main Content */}

      <div className={`flex-grow bg-gray-100   ${isOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
        <div  className='h-[56px] border-b-2  py-2 flex flex-row item-center justify-start  gap-10 '>
            <div  className= " relative  flex flex-row justify-between items-center md:pl-10 w-full">

           
            <div className={`${isOpen ? "hidden" : "block"} pr-10` }>
            <MaterialSymbol icon="menu" fill size={28} color='gray' className="ml-2 cursor-pointer top-4 left-4" onClick={toggleSidebar} />
            </div>
            <Breadcrumbs breadcrumbs={getBreadcrumbs()} />



            <div className='flex flex-row gap-4 w-full justify-end items-center'>
            <MaterialSymbol  icon="person" fill color='blue' size={28}/>
                <MaterialSymbol  icon="more_vert" fill color='gray' size={28}/></div>
            </div>

       
        </div>
        <div className='p-10'>
        {getContentComponent()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
