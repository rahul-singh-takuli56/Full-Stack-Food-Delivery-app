import React from 'react'

const MenuItem = () => {
    return (
        <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white transition-all hover:shadow-md hover:shadow-black/25 '>
            <div className='text-center  '>
                <img src="/pizza.png" alt="pizza" className='max-h-52  block mx-auto ' />
            </div>
            <h4 className='font-bold my-3 text-xl'>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit fjdslfjsdlfjsdf l jsdlf sd fsd fjsdlf sdf</p>

            <button className='bg-primary mt-4 text-white rounded-full px-8 py-2'>Add to Cart $20</button>

        </div>
    )
}

export default MenuItem
