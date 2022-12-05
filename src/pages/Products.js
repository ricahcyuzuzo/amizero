import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import axios from 'axios';

const Products = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState();
    const [name, setName] = useState('');
    const [contacts, setContacts] = useState('');
    const [loading, setLoading] = useState(false);


    const sendOrder = () => {
        setLoading(true)
        axios.post('https://amizerowhatsappapi.onrender.com/send', { 
            phone: "+250781064092",
            body: `You have got an order from ${name}, with ${quantity} at a price of ${selectedProduct?.price} which is total of $${price}.\nThe contacts are: ${contacts}`
        }).then(() => {
            setLoading(false);
            alert('Your order has been sent successfully, We will reply to as soon as possible. thank you.')
        })
    }

    const products = [
        {
            category: "Bags",
            items: [
                {
                    name: 'Beach bag',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Beach-bag-300x300.png',
                    price: 10
                },
                {
                    name: 'Carry bag',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Carry-bag-300x300.png',
                    price: 10

                },
                {
                    name: ' Clutch Bag in blue',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Clutch-bag-in-blue-300x300.png',
                    price: 10

                },
                {
                    name: 'Clutch bag in orage',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Clutch-bag-in-orange-300x300.png',
                    price: 10
                },
                {
                    name: 'Elephant bag in red',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Ellephant-backpack-in-red-300x300.png',
                    price: 10
                },
                {
                    name: 'Embroidery Clutch Bag in blue',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Embroidery-clutch-bag-bird-300x300.png',
                    price: 10
                },
                {
                    name: 'Embroidery red bag',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Clutch-bag-in-orange-300x300.png',
                    price: 10
                },
                {
                    name: 'Elephant bag in red',
                    image: 'https://thefoundation4hope.com/wp-content/uploads/2020/02/Ellephant-backpack-in-red-300x300.png',
                    price: 10
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
                        <div className='flex flex-col gap-5 cursor-pointer' key={idx}>
                            <h1 className='text-[24px] text-[#4D335E] font-medium text-center underline leading-9 mb-[40px]'>{item.category}</h1>
                            <div className='flex gap-6 flex-col md:flex-row flex-wrap'>
                                {
                                    item.items.map((item, idx) => {
                                        return (
                                            <div onClick={() => {
                                                setSelectedProduct(item);
                                                setModalVisible(true);
                                                setPrice(item.price);
                                            }} className='bg-[#dec9e9] rounded-2xl flex flex-col justify-center items-center '>
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
        {
            modalVisible ?
            <div className='w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 overflow-scroll '>
                <div className='w-[90%] md:w-[600px] h-[800px] md:h-[1000px] rounded-xl bg-[#fff]  mx-auto mt-[20px] relative'>
                    
                    <div className='w-[90%] mx-auto'>
                        <h1 className='text-[24px] font-semibold text-[#383838] text-center pt-[20px]'>Place an order</h1>
                        <div className='flex flex-col md:flex-row mt-[10px] justify-between'>
                            <h1 className='text-[#383838] font-semibold mr-5 md:flex items-center hidden'>Names:</h1>
                            <input type='text' placeholder='Customer name' onChange={(e) => {
                                setName(e.target.value)
                            }} className='text-[18px] font-medium text-[#383838] w-full md:w-[80%] h-[40px] border-[#c4c4c4] rounded-lg flex items-center pl-5 border-[1px]' value={name} />
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-[10px] justify-between'>
                            <h1 className='text-[#383838] font-semibold mr-5 hidden md:block'>Contact:</h1>
                            <textarea onChange={(e) => {
                                setContacts(e.target.value);
                            }} className='text-[18px] font-medium text-[#383838] w-full md:w-[80%] h-[100px] border-[#c4c4c4] rounded-lg flex items-center pl-5 border-[1px]' type='text' placeholder='Type your phone number and your email for contact purpose' ></textarea>
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-[40px] justify-between'>
                            <h1 className='text-[#383838] font-semibold mr-5 hidden md:block'>Product:</h1>
                            <h1 className='text-[18px] font-medium text-[#383838] w-[100%] md:w-[80%] h-[40px] border-[#c4c4c4] rounded-lg flex items-center pl-5 border-[1px]'>{selectedProduct?.name}</h1>
                        </div>
                        <div className='flex flex-col md:flex-row mt-[10px] justify-between'>
                            <h1 className='text-[#383838] font-semibold mr-5 md:flex items-center hidden'>Quantity:</h1>
                            <input type='number' onChange={(e) => {
                                    setPrice(quantity * selectedProduct?.price);
                                    setQuantity(e.target.value >= 1 ? e.target.value : 1);
                            }} className='text-[18px] font-medium text-[#383838] w-full md:w-[80%] h-[40px] border-[#c4c4c4] rounded-lg flex items-center pl-5 border-[1px]' value={quantity} />
                        </div>
                        <div className='flex flex-col md:flex-row mt-[20px] justify-between'>
                            <h1 className='text-[#383838] font-semibold mr-5 hidden md:block'>Image:</h1>
                            <img src={selectedProduct?.image} className='w-[100%] md:w-[65%] h-[200px] md:h-[400px] object-contain rounded-lg' />
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-[10px] justify-between'>
                            <h1 className='text-[#383838] font-semibold mr-5 hidden md:block'>Price:</h1>
                            <h1 className='text-[18px] font-medium text-[#383838] w-full md:w-[80%] h-[40px] border-[#c4c4c4] rounded-lg flex items-center pl-5 border-[1px]'>{price}</h1>
                        </div>
                        <div className='flex flex-col mt-[20px] justify-between'>
                            <button className='w-[100%] h-[50px] rounded-lg bg-[green] mb-[10px] text-[#f9e9e0]' onClick={() => {
                                 setPrice(quantity * selectedProduct?.price);
                            }}>Calculate</button>
                            <button className='w-[100%] h-[50px] rounded-lg bg-[#4D335E] text-[#f9e9e0]' onClick={() => {
                                sendOrder()
                            }}>{loading ?'Loading...' : 'Order'}</button>
                        </div>
                    </div>
                    
                    <button onClick={() => {
                        setModalVisible(false)
                        setPrice(0);
                        setQuantity(1);
                        setSelectedProduct({});    
                    }} className='absolute top-5 right-5 w-[40px] h-[40px] hover:bg-[#f5f5f5] items-center justify-center flex rounded-lg'>
                        <Icon icon='material-symbols:close' color='#a12' fontSize={24} />
                    </button>
                </div>
            </div> : null
        }
    </div>
  )
}

export default Products