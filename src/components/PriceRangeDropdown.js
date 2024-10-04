import React, { useState, useEffect, useContext } from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowDownUpLine, RiHome5Line } from 'react-icons/ri';

import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
const PriceRangDropdown = ()=>{
  const [isOpen, setIsOpen] = useState(false);
 const prices = [{
    value:'Price range (any)',
  },
  {
    value: '100000 -130000 ',
  },
  {
    value: '130000 -160000 ',
  },
  {
    value: '160000 -190000 ',
  },
  {
    value: '190000 -220000 ',
  },
  {
    value: '10000 -30000 ',
  },
  {
    value: '30000 -40000 ',
  },
]
  return (
  <Menu as = 'div' className='dropdown realative'>
   <Menu.Button 
   onClick = {()=> setIsOpen(!isOpen)} 
   className='dropdown-btn w-full text-left'>
    <RiHome5Line className='dropdown-icon-primary'/>
    <div>
      <div className='text-[15px] font-medium Leading-tight'>
      Price 
      </div>
      <div className='text-[13px]'>Select your place</div>
      </div>
      {
        isOpen ? (
          <RiArrowDownSLine className='dropdown-icon-secondary'/>
        ) :(
          <RiArrowDownSLine className='dropdown-icon-secondary'/>
        )   
      }

   </Menu.Button>
   </Menu>
  );
};
 
export default PriceRangDropdown;
