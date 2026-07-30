import { Rating, Star } from '@smastrom/react-rating'
import { CreditCard, MapPin, Minus, Plus, RotateCcw, ShieldCheck, Store, Truck } from 'lucide-react'
import React from 'react'
import HomeLayout from '@/layouts/home-layout'


const myStyles = {
  itemShapes: Star,
  activeFillColor: '#3483fa',
  inactiveFillColor: '#cfcfcf'
}
export default function Show() {

    return (
        <HomeLayout>
            
            <section className='max-w-7xl mx-auto bg-white border border-gray-300 rounded px-5 py-3'>
                
                <div className='flex gap-28 justify-between border border-red-500 p-2 mb-32'>

                    <div className='flex gap-5 border border-red-500 '>

                        {/* imagenes */}
                        <div className='flex gap-2'>

                            <div className='flex flex-col gap-1'>
                                <img className='w-[54px] h-[54px] border' src="" alt="" />
                                <img className='w-[54px] h-[54px] border' src="" alt="" />
                                <img className='w-[54px] h-[54px] border' src="" alt="" />
                                <img className='w-[54px] h-[54px] border' src="" alt="" />
                                <img className='w-[54px] h-[54px] border' src="" alt="" />
                            </div>   

                            <img className='w-[358px] h-[417px] border' src="" alt="" />

                        </div>
                        
                        {/* informacion producto */}
                        <div className='border border-red-500  w-full max-w-[395px]'>
                            <div className='flex items-end'>
                                <span 
                                    className='capitalize text-gray-500 text-xs'>
                                    nuevo
                                </span>
                                <span className='text-gray-500 text-sm px-2'>
                                    |
                                </span>
                                <p className='capitalize text-gray-500 text-xs p-0'>
                                    +1500 vendidos
                                </p>
                            </div>
                            <p className='font-semibold font-sans text-lg'>
                                Smartphone Galaxy Pro 5G 256GB 8GB RAM Camara 109MP Pantalla AMOLED 6.7"
                            </p>
                            <div className='flex mt-1'>
                                <span className='text-gray-500 font-normal text-sm pr-2'>
                                    4.8
                                </span>
                                <Rating 
                                    style={{ maxWidth: 90 }} 
                                    value={4}
                                    itemStyles={myStyles}
                                />                            
                                <span className='pl-2 text-gray-500 font-normal text-sm'>
                                    (460)
                                </span>
                            </div>

                            <p className='mt-4 line-through text-gray-500 font-normal text-md'>
                                $123,982
                            </p>
                            <div className='flex items-start gap-1'>
                                <p className='m-0 font-medium text-2xl'>
                                    $113487
                                </p>
                                <span className='font-normal px-1 text-sm p-0 text-white bg-[#40a751]'>
                                    40% OFF
                                </span>

                            </div>
                            <span className='text-xs text-[#40a751]'>
                                3 meses sin intereses de $119.80
                            </span>
                            <p className='font-light text-xs'>IVA incluido</p>
                            <p className='text-blue-500 text-xs mt-3'>Ver los medio de pago</p>
                        
                            <div className='mt-5'>
                                <p className='text-sm mb-1'>Color: 
                                    <span className='pl-2 text-sm font-medium'>Gris</span>
                                </p>
                                <div className='flex gap-2'>
                                    <div className='w-8 h-8 border border-black rounded-full bg-black'></div>
                                    <div className='w-8 h-8 border border-blue-600 rounded-full bg-blue-600'></div>
                                    <div className='w-8 h-8 border border-purple-600 rounded-full bg-purple-600'></div>

                                </div>
                            </div>

                            <div className='mt-5'>
                                
                                <p className='font-medium text-sm mb-2'>
                                    Lo que tienes que saber de este producto
                                </p>
                                
                                <ul className='list-disc pl-5 text-sm'>
                                    <li className='py-1'>Disenio de tela: Liso</li>
                                    <li className='py-1'>Tipo de mochila urbana</li>
                                    <li className='py-1'>Para laptops de hasta 15.6".</li>
                                    <li className='py-1'>Tiene 4 compartimientos y bolsillo para botellas.</li>
                                </ul>

                                <p className='text-sm text-blue-500 mt-3'>
                                    Ver caracteristicas
                                </p>
                            </div>
                        
                        </div>

                    </div>

                    {/* stock, agregar, comprar */}
                    <div className='max-w-[350px] rounded px-5 py-4 bg-white border border-gray-300 shadow'>

                        <div className='flex gap-2 items-center'>
                            <MapPin size={17} color='#8c8c8c' />
                            <span className='text-sm text-blue-600 font-medium'>
                                Enviar a Ciudad de Buenos Aires
                            </span>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <Truck size={18} color='#40a751'/>

                            <div className=''>
                                <p className='text-sm text-[#40a751] font-medium'>
                                    Envio gratis a todo el pais
                                </p>
                                <p className='text-sm'>Llega gratis 
                                    <span className='pl-1 text-sm font-semibold'>
                                        manania
                                    </span>
                                </p>
                                <span className='text-blue-600 text-sm font-medium'>
                                    Mas formas de entrega
                                </span>

                            </div>

                        </div>

                        <div className='flex gap-2 mt-3'>
                            <Store size={18} color='#40a751' />
                            <div>
                                <p className='text-sm'>
                                    Retira gratis desde el martes en mas de 3500 puntos
                                </p>
                            </div>
                        </div>

                        <p className='mt-3 font-semibold text-sm'>Stock disponible</p>
                        <p className='mt-3 text-sm text-gray-500'>
                            Almacenado y enviado por 
                            <span className='pl-1 font-semibold text-blue-600'>FULL</span>
                        </p>

                        <div className='flex gap-3 items-center mt-3'>
                            <p className='text-gray-500 text-sm'>Cantidad:</p>
                            <div className='flex items-end border border-gray-400 rounded-md '>
                                <div className='px-3 pb-1'>
                                    <Minus size={15} />
                                </div>
                                
                                <span className='text-sm font-medium px-1.5 pt-1 pb-0.5'>1</span>
                                <div className='px-3 pb-1'>
                                    <Plus size={15} />

                                </div>
                            </div>
                            <p className='text-gray-500 text-sm'>(47 disponibles)</p>
                        </div>

                        <div className='flex flex-col gap-3 mt-4'>

                            <button className='bg-[#4173df] text-white py-3 rounded font-medium hover:bg-blue-600'>
                                Comprar ahora
                            </button>
                            <button className='py-3 rounded font-medium bg-[#e5ecfb] text-[#3684fa] hover:bg-blue-100'>
                                Agregar al carrito
                            </button>

                        </div>
                        
                        <div className='flex gap-2 mt-3'>
                            <RotateCcw size={19} color='#737373' />
                            <div>
                                <p className='text-sm'>
                                    <span className='font-medium text-[#40a751]'>
                                        Devolucion gratis.{" "}
                                    </span>
                                    Tienes 30 dias desde que lo recibes
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2 mt-3'>
                            <ShieldCheck size={30} color='#737373' />
                            <div>
                                <p className='text-sm'>
                                    <span className='text-blue-500'>
                                        Compra Protegida.{" "}  
                                    </span>
                                    Recibe el producto que esperabas o te devolvemos tu dinero.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <CreditCard size={18} color='#737373' />
                            <div>
                                <p className='text-sm'>
                                    12 meses de garantia de fabrica.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                <section className='pb-9 border-b-2 border-gray-300 my-10 '>
                    <h3 className='text-xl font-medium my-5'>
                        Caracteristicas del producto
                    </h3>
                
                    <p className='text-base'>
                       Caracteristicas del producto...
                    </p>
                
                </section>

                <section className='pb-9 border-b-2 border-gray-300 my-10 '>
                    <h3 className='text-xl font-medium my-5'>
                        Imagenes del producto
                    </h3>
                
                    <p className='text-base'>
                       Imagenes del producto...
                    </p>
                
                </section>
                
                <section className='pb-9 border-b-2 border-gray-300 my-10 '>
                    <h3 className='text-xl capitalize font-medium my-5'>
                        Descripcion
                    </h3>
                
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam velit inventore eligendi sapiente alias labore aut veniam consectetur blanditiis dolorum sit molestias ad, laboriosam porro quisquam ullam nobis nam quod?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ea ut aliquam, enim expedita dolor. Sint laudantium distinctio qui molestiae accusantium consequatur deserunt aut. Inventore quidem rem vero in dolorem.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium dolore libero quas, perspiciatis saepe debitis quaerat quis cumque sunt cum magnam! Soluta ea ullam distinctio itaque. Ex, necessitatibus architecto!
                    </p>
                
                </section>


            </section>

        </HomeLayout>
    )
}


