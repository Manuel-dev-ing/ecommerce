import { MapPin, Search, ShoppingCart } from "lucide-react"
import type { ReactNode } from "react"
import buyprotected from '@/images/buyprotected.svg'

import enviogratis from '@/images/envio-gratis.svg'
import envioslogotipo from '@/images/envioslogotipo.webp'
import heroImage from '@/images/hero-image.webp'
import logotipo from '@/images/logo.png'
import lowprice from '@/images/lowprice.svg'
import registration from '@/images/registration.svg'
import topsale from '@/images/topsale.svg'
import vistorecientemente from '@/images/vistorecientemente.webp'

type HomeLayoutProps = {
    children: ReactNode
}

export default function HomeLayout({children}:HomeLayoutProps) {
  return (
    <>
        <header className="bg-[#fee73a] h-24">
            <nav className="max-w-7xl mx-auto p-2 grid grid-cols-6 gap-2">
                <div className="text-center col-span-1 flex justify-start">
                    <img className="w-[134px] h-[36px] " src={logotipo} alt="logotipo" />
                </div>
                <div className="text-center col-span-3">
                    
                    <form className="max-w-[590px] mx-auto">   
                        
                        <div className="relative">
                            <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
                                <Search size={19} color="#9ca3ab" />
                            </div>
                            <input type="search" id="search" 
                            className="shadow-sm block w-full p-2  text-sm text-gray-900 border border-white bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar productos, marcas y mas..." required />
                           
                        </div>
                    </form>

                </div>
                <div className="text-center flex justify-end col-span-2">
                    <img className="w-[325px] h-[38px] " src={envioslogotipo} alt="" />
                </div>
                <div className="text-center col-span-1 flex items-center">
                    <MapPin size={25} strokeWidth={1} />
                    <div className="flex flex-col items-start">
                        <p className="text-xs text-gray-500">Enviar a</p>
                        <p className="text-sm">CP 60626</p>
                    </div>
                </div>
                <div className="mx-auto col-span-3">
                    <ul className="text-xs font-normal flex">
                     
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Categorias
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Ofertas
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Cupones
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Supermercado
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Moda
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Mercado Play
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Vender
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">
                                Ayuda
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-center col-span-2 flex justify-end items-center gap-5">
                    <p className="text-xs">Crea tu cuenta</p>
                    <p className="text-xs">Ingresa</p>
                    <p className="text-xs">Mis compras</p>
                    <ShoppingCart size={19} strokeWidth={1} />
                </div>
                
            </nav>

        </header>
        <main className="">
            <div className="w-full relative">
                {/* section hero */}
                <img className="block w-full h-[400px] object-cover" src={heroImage} alt="" />
                <div className=" absolute bottom-0 left-0 w-full h-[30%] z-[3] bg-gradient-to-b from-transparent to-[#ebebeb]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between">

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
                        <div className="border border-red-600">
                            {children}
                        </div>        
                    </div>

                </div>

            </div>
            
                
                  
        </main>


    </>
  )
}
