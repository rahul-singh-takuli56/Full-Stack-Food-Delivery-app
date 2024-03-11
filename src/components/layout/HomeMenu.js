import Image from 'next/image'
import React from 'react'
import MenuItem from '../Menu/MenuItem'
import SectionHeader from './SectionHeader'

const HomeMenu = () => {
  return (
    <section className='pt-4'>
      <div className='absolute  left-0  right-0 w-full justify-start'>

        <div className='h-48 absolute left-3 -top-[70px] text-left -z-10'>
          <Image src={'/sallad1.png'} width={109} height={189} alt='sallad1' />
        </div>

        <div className='absolute  right-3 -top-[100px] -z-10'>
          <Image src={'/sallad2.png'} width={107} height={195} alt='sallad2' />
        </div>
      </div>

      <div className='text-center mb-4'>
        <SectionHeader
          subHeader={'check out'}
          mainHeader={'Menu'}
        />
      </div>

      {/* for menu items  */}
      <div className='grid grid-cols-4 gap-4 pt-4'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu
