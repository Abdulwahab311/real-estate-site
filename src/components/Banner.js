import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] nb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[150px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text lg:text-[580px] font-semibold leading-none mb-10'></h1>
          <span className='text-violet-700'>Rent</span> Your Dream House With Us
        <p className='max-w-[480px] mb-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justifly-end items-end '>
        <img src={Image} alt=''/>
      </div>
    </div>
    <Search/>
  </section>
  );
};

export default Banner;
