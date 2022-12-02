import React from 'react'

const Products = () => {
    const products = [
        {
            category: "Bags",
            items: [
                {
                    name: 'Beach bag',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Beach-bag-300x300.png',
                    price: "$10"
                },
                {
                    name: 'Carry bag',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Carry-bag-300x300.png',
                    price: "$10"

                },
                {
                    name: ' Clutch Bag in blue',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Clutch-bag-in-blue-300x300.png',
                    price: "$10"

                },
                {
                    name: 'Clutch bag in orage',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Clutch-bag-in-orange-300x300.png',
                    price: "$10"
                },
                {
                    name: 'Elephant bag in red',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Ellephant-backpack-in-red-300x300.png',
                    price: "$10"
                },
                {
                    name: 'Embroidery Clutch Bag in blue',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Embroidery-clutch-bag-bird-300x300.png',
                    price: "$10"
                },
                {
                    name: 'Embroidery red bag',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Clutch-bag-in-orange-300x300.png',
                    price: "$10"
                },
                {
                    name: 'Elephant bag in red',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Ellephant-backpack-in-red-300x300.png',
                    price: "$10"
                },
            ]
        }
    ]
  return (
    <div className='w-full h-fit bg-[#f9e9e0] pb-[80px]'>
        <div className='w-[90%] md:w-[80%] mx-auto'>
            <h1 className='text-center text-[30px] font-extrabold text-[#383838] pt-[30px]'>Our Products</h1>
            <div className='w-full mt-[100px]'>
                {
                    products.map((item, idx) => (
                        <div className='flex flex-col gap-5' key={idx}>
                            <h1 className='text-[24px] text-[#4D335E] font-medium text-center underline leading-9 mb-[40px]'>{item.category}</h1>
                            <div className='flex gap-6 flex-col md:flex-row flex-wrap'>
                                {
                                    item.items.map((item, idx) => {
                                        return (
                                            <div className='bg-[#dec9e9] rounded-2xl flex flex-col justify-center items-center '>
                                                <img src={item.image} />
                                                <h1 className='text-center text-[20px] text-[#383838] font-semibold mb-[30px]'>{item.name}</h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products