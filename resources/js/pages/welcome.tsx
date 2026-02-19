import { Head, Link, usePage } from '@inertiajs/react';

import SectionBestsellers from "@/components/section-bestsellers"
import Categories from "@/components/section-categories"
import SectionOffers from "@/components/section-offers"

import buyprotected from '@/images/buyprotected.svg'

import enviogratis from '@/images/envio-gratis.svg'
import heroImage from '@/images/hero-image.webp'
import lowprice from '@/images/lowprice.svg'
import registration from '@/images/registration.svg'
import topsale from '@/images/topsale.svg'
import vistorecientemente from '@/images/vistorecientemente.webp'

import HomeLayout from '@/layouts/home-layout';
import type { SharedData } from '@/types';
export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <HomeLayout>
                <div className="w-full relative">
                    
                    {/* section hero */}
                    <img className="block w-full h-[400px] object-cover" src={heroImage} alt="imagenes" />
                    <div className=" absolute bottom-0 left-0 w-full h-[30%] z-[3] bg-gradient-to-b from-transparent to-[#ebebeb]">

                        <div className="mt-5 max-w-7xl mx-auto flex justify-between">

                            <div className="bg-white w-[183px] h-[300px] rounded-md py-3 px-3 flex flex-col items-center justify-between">
                                <div>
                                    <p className="font-medium">Envio gratis</p>
                                    <a className="flex flex-col items-center" href="">
                                        <img className="mt-4" src={enviogratis} alt="envio gratis" />
                                        <p className="text-center text-sm mt-3 hover:text-blue-600">
                                            Beneficio por ser tu primera compra
                                        </p>

                                    </a>
                                </div>
                                <a className="text-xs bg-blue-100 text-blue-800 font-medium me-2 px-5 py-0.5 rounded" href="">
                                    Mostrar productos
                                </a>
                            </div>

                            <div className="bg-white w-[183px] h-[300px] rounded-md py-3 px-3 flex flex-col items-center">
                                <div>
                                    <p className="font-medium">Visto recientemente</p>
                                    <a className="flex flex-col items-center">
                                        <img className="mt-4 w-[100px] h-[100px] object-cover" 
                                            src={vistorecientemente} 
                                            alt="envio gratis" 
                                        />
                                        <p className="line-clamp-2 text-sm mt-3 hover:text-blue-600">
                                            Auriculares Inalámbricos Xiaomi Redmi Buds 6 Play Negro
                                        </p>

                                    </a>
                                </div>
                                <div className="w-full mt-3">
                                    <div className="flex items-center gap-1">
                                        <p className="font-normal text-lg">$290</p>
                                        <p className="text-xs text-[#40a751]">51% OFF</p>
                                    </div>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">Envio gratis{' '}</span> 
                                        por ser tu primera compra
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white w-[183px] h-[300px] rounded-md py-3 px-3 flex flex-col items-center justify-between">
                                <div>
                                    <p className="font-medium">Ingresa a tu cuenta</p>
                                    <a className="flex flex-col items-center" href="">
                                        <img className="mt-4 w-[100px] h-[100px] object-cover" 
                                            src={registration} alt="envio gratis" />
                                        <p className="text-center text-sm mt-3 hover:text-blue-600">
                                            Disfruta de ofertas y compra sin limites
                                        </p>

                                    </a>
                                </div>
                                <a className="text-xs bg-blue-100 text-blue-800 font-medium me-2 px-5 py-0.5 rounded" href="">
                                    Ingresa a tu cuenta
                                </a>
                            </div>

                            <div className="bg-white w-[183px] h-[300px] rounded-md py-3 px-3 flex flex-col items-center justify-between">
                                <div>
                                    <p className="font-medium">Menos de $500</p>
                                    <a className="flex flex-col items-center" href="">
                                        <img className="mt-4 w-[100px] h-[100px] object-cover" 
                                            src={lowprice} alt="envio gratis" />
                                        <p className="text-center text-sm mt-3 hover:text-blue-600">
                                            Descubre precios con precios bajos
                                        </p>

                                    </a>
                                </div>
                                <a className="text-xs bg-blue-100 text-blue-800 font-medium me-2 px-5 py-0.5 rounded" href="">
                                    Ingresa a tu cuenta
                                </a>
                            </div>

                            <div className="bg-white w-[183px] h-[300px] rounded-md py-3 px-3 flex flex-col items-center justify-between">
                                <div>
                                    <p className="font-medium">Mas vendidos</p>
                                    <a className="flex flex-col items-center" href="">
                                        <img className="mt-4 w-[100px] h-[100px] object-cover" 
                                            src={topsale} 
                                            alt="top sale" />
                                        <p className="text-center text-sm mt-3 hover:text-blue-600">
                                            Explora los productos que son tendencia
                                        </p>

                                    </a>
                                </div>
                                <a className="text-xs bg-blue-100 text-blue-800 font-medium me-2 px-5 py-0.5 rounded" href="">
                                    Ir a Mas vendidos
                                </a>
                            </div>
                            <div className="bg-white w-[183px] h-[300px] rounded-md py-3 px-3 flex flex-col items-center justify-between">
                                <div>
                                    <p className="font-medium">Compra protegida</p>
                                    <a className="flex flex-col items-center" href="">
                                        <img className="mt-4 w-[100px] h-[100px] object-cover" 
                                            src={buyprotected} 
                                            alt="top sale" />
                                        <p className="text-center text-sm mt-3 hover:text-blue-600">
                                            Puedes devolver tu compra gratis
                                        </p>

                                    </a>
                                </div>
                                <a className="text-xs bg-blue-100 text-blue-800 font-medium me-2 px-5 py-0.5 rounded" href="">
                                    Como funciona
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='max-w-7xl mx-auto mt-[250px]'>
                     {/* section offers */}
                    <SectionOffers />
                    
                    {/* section best sellers */}
                    <SectionBestsellers />

                    {/* section categories */}
                    <Categories />

                </div>


            </HomeLayout>
        </>
    );
}
