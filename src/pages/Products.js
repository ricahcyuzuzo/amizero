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


    const sendOrder = async () => {
        setLoading(true)
        await axios.post('https://amizerowhatsappapi.onrender.com/send', { 
            phone: "+250781064092",
            body: `You have got an order from ${name}, with ${quantity} at a price of ${selectedProduct?.price} which is total of $${price}.\nThe contacts are: ${contacts}`
        })
        
        await axios.post('https://amizerowhatsappapi.onrender.com/send', { 
            phone: "+250782399504",
            body: `You have got an order from ${name}, with ${quantity} at a price of ${selectedProduct?.price} which is total of $${price}.\nThe contacts are: ${contacts}`
        });
            
        alert('Your order has been sent successfully, We will reply to as soon as possible. thank you.')
        setLoading(false);
    }

    const products = [
        {
            category: "Bags",
            items: [
                {
                    name: 'Women set bags',
                    image: require('./assets/bag1.jpeg'),
                    price: 49
                },
                {
                    name: 'Elephant bag for kids',
                    image: require('./assets/bag2.jpeg'),
                    price: 31
                },
                {
                    name: 'Shopping bag',
                    image: require('./assets/bag3.jpeg'),
                    price: 30
                },
                {
                    name: 'I Pad bag',
                    image: require('./assets/bag4.jpeg'),
                    price: 20
                },
                {
                    name: 'Shopping bag',
                    image: require('./assets/bag5.jpeg'),
                    price: 31
                },
            ]
        },
        {
            category: "Clothes",
            items: [
                {
                    name: 'Women Dress',
                    image: require('./assets/cloth1.jpeg'),
                    price: 28
                },
                {
                    name: 'Woman Dress',
                    image: require('./assets/cloth2.jpeg'),
                    price: 35
                },
                {
                    name: 'Women Jackeck',
                    image: require('./assets/cloth3.jpeg'),
                    price: 47
                },
                {
                    name: 'Kid Dress',
                    image: require('./assets/cloth4.jpeg'),
                    price: 20
                },
                {
                    name: 'Men Jacket',
                    image: require('./assets/cloth5.jpeg'),
                    price: 31
                },
            ]
        },
        {
            category: "Articrafts",
            items: [
                {
                    name: 'Backet',
                    image: require('./assets/art1.jpeg'),
                    price: 46
                },
                {
                    name: 'Elepfant stuffed animal',
                    image: require('./assets/art2.jpeg'),
                    price: 30
                },
                {
                    name: 'Plateau Baskets',
                    image: require('./assets/art3.jpeg'),
                    price: 61
                },
                {
                    name: 'Plateau & Trad Basket',
                    image: require('./assets/art4.jpeg'),
                    price: 63
                },
                {
                    name: 'Purse Basket',
                    image: require('./assets/art5.jpeg'),
                    price: 36
                },
                {
                    name: 'Colored Cup Basket',
                    image: require('./assets/art6.jpeg'),
                    price: 37
                },
                {
                    name: 'Hut Basket',
                    image: require('./assets/art8.jpeg'),
                    price: 39
                },
            ]
        }
    ]
  return (
    <div className='w-full h-fit bg-[#f9e9e0] pb-[80px]'>
        <div className='w-[90%] md:w-[70%] mx-auto'>
            <h1 className='text-center text-[30px] font-extrabold text-[#383838] pt-[30px]'>Our Products</h1>
            <div className='w-full mt-[100px]'>
                {
                    products.map((item, idx) => (
                        <div className='flex flex-col gap-5 mt-[70px]' key={idx}>
                            <h1 className='text-[24px] text-[#4D335E] font-medium text-center underline leading-9 mb-[40px]'>{item.category}</h1>
                            <div className='flex gap-6 flex-col md:flex-row flex-wrap'>
                                {
                                    item.items.map((item, idx) => {
                                        return (
                                            <div onClick={() => {
                                                setSelectedProduct(item);
                                                setModalVisible(true);
                                                setPrice(item.price);
                                            }} className='bg-[#dec9e9] rounded-2xl flex flex-col justify-center cursor-pointer items-center '>
                                                <img src={item.image} className='w-[200px] h-[300px] object-cover p-3' />
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