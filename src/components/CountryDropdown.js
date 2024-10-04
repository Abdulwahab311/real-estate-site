import React, { useState, useEffect, useContext } from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowDownUpLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
const CountryDropdown = ()=>{
  const [isOpen, setIsOpen] = useState(false);
  return (
  <Menu as = 'div' className='dropdown realative'>
   <Menu.Button 
   onClick = {()=> setIsOpen(!isOpen)} 
   className='dropdown-btn w-full text-left'>
    <RiMapPinLine className='dropdown-icon-primary'/>
    <div>
      <div className='text-[15px] font-medium Leading-tight'>
        country
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
 
export default CountryDropdown;
