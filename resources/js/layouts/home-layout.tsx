import { MapPin, Search, ShoppingCart } from "lucide-react"
import type { ReactNode } from "react"

import accesorios from '@/images/accesorios.webp'
import audio from '@/images/audio.webp'
import buyprotected from '@/images/buyprotected.svg'
import carcategory from '@/images/car-category.webp'
import celularesTelefonia from '@/images/celularesTelefonia.webp'
import computacion from '@/images/computacion.webp'
import electrodomesticos from '@/images/electrodomesticos.webp'
import enviogratis from '@/images/envio-gratis.svg'
import envioslogotipo from '@/images/envioslogotipo.webp'
import fitness from '@/images/fitness.webp'
import heroImage from '@/images/hero-image.webp'
import herramientas from '@/images/herramientas.webp'
import inmuebles from '@/images/inmuebles.webp'
import logotipo from '@/images/logo.png'
import lowprice from '@/images/lowprice.svg'
import makeup from '@/images/makeup.webp'
import motherboard from '@/images/motherboard.webp'
import muebles from '@/images/muebles.webp'
import oferta1 from '@/images/oferta1.webp'
import oferta2 from '@/images/oferta2.webp'
import registration from '@/images/registration.svg'
import ropa from '@/images/ropa.webp'
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

        <main>
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

            <div className="max-w-7xl mx-auto mt-[250px]">

                <section className="flex justify-between h-[130px] mb-10 mt-10">
                    <a className="w-[600px] bg-[#e6e4e5] rounded" href="">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center m-auto">
                                <p className="uppercase text-xs font-light">ofertas</p>
                                <p className="uppercase text-sm font-medium">hasta 50% de descuento</p>
                                <p className="text-xs">Ver mas</p>
                            </div>
                            <div>
                                <img className="w-[248px] h-[126px] object-cover" 
                                src={oferta1} alt="oferta" />
                            </div>

                        </div>

                    </a>
                    <a className="bg-[#e6e4e5] w-[600px]" href="">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center m-auto">
                                <p className="uppercase text-xs font-light">reacondicionados</p>
                                <p className="uppercase text-sm font-medium">hasta -50% del precio regular</p>
                                <p className="text-xs">Ver mas</p>
                            </div>
                            <div>
                                <img className="w-[248px] h-[126px] object-cover" 
                                src={oferta2} alt="" />
                            </div>

                        </div>

                    </a>
                </section>    
                
                {/* section best sellers */}
                <section className="bg-white w-full h-[480px] rounded p-5">
                    <div className="flex items-center gap-3">
                        <p className="font-medium text-xl">Mas vendidos</p>
                        <p className="text-sm text-blue-500 font-medium">Ir a Mas vendidos</p>
                    </div>
                    <div className="flex justify-between mt-5">
                        
                        <div className="w-[180px] h-[386px] shadow">
                            <div className="">
                                <img className="w-[173px] h-[173px] object-cover" 
                                src={motherboard} alt="motherboard" />
                            </div>
                            <div className="mt-3">
                                <p className="text-sm line-clamp-2">Tarjeta Madre Asus PRIME B550M-A AC Pcie 4.0 Dual M.2 4x4 Color Negro</p>
                                <div className="mt-1">
                                    <p 
                                    className="text-black font-medium text-xl flex items-center gap-1">
                                        $1,919
                                        
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-0 py-0.5 rounded-xs">
                                            20% OFF
                                        </span> 

                                    </p>
                                    <p className="text-black text-xs my-1.5">
                                        24 meses de $103.88
                                    </p>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">
                                            Envio gratis{' '}
                                        </span> 
                                        por ser tu primera compra
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="w-[180px] h-[386px] shadow">
                            <div className="">
                                <img className="w-[173px] h-[173px] object-cover" 
                                src={motherboard} alt="motherboard" />
                            </div>
                            <div className="mt-3">
                                <p className="text-sm line-clamp-2">Tarjeta Madre Asus PRIME B550M-A AC Pcie 4.0 Dual M.2 4x4 Color Negro</p>
                                <div className="mt-1">
                                    <p 
                                    className="text-black font-medium text-xl flex items-center gap-1">
                                        $1,919
                                        
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-0 py-0.5 rounded-xs">
                                            20% OFF
                                        </span> 

                                    </p>
                                    <p className="text-black text-xs my-1.5">
                                        24 meses de $103.88
                                    </p>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">
                                            Envio gratis{' '}
                                        </span> 
                                        por ser tu primera compra
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="w-[180px] h-[386px] shadow">
                            <div className="">
                                <img className="w-[173px] h-[173px] object-cover" 
                                src={motherboard} alt="motherboard" />
                            </div>
                            <div className="mt-3">
                                <p className="text-sm line-clamp-2">Tarjeta Madre Asus PRIME B550M-A AC Pcie 4.0 Dual M.2 4x4 Color Negro</p>
                                <div className="mt-1">
                                    <p 
                                    className="text-black font-medium text-xl flex items-center gap-1">
                                        $1,919
                                        
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-0 py-0.5 rounded-xs">
                                            20% OFF
                                        </span> 

                                    </p>
                                    <p className="text-black text-xs my-1.5">
                                        24 meses de $103.88
                                    </p>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">
                                            Envio gratis{' '}
                                        </span> 
                                        por ser tu primera compra
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="w-[180px] h-[386px] shadow">
                            <div className="">
                                <img className="w-[173px] h-[173px] object-cover" 
                                src={motherboard} alt="motherboard" />
                            </div>
                            <div className="mt-3">
                                <p className="text-sm line-clamp-2">Tarjeta Madre Asus PRIME B550M-A AC Pcie 4.0 Dual M.2 4x4 Color Negro</p>
                                <div className="mt-1">
                                    <p 
                                    className="text-black font-medium text-xl flex items-center gap-1">
                                        $1,919
                                        
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-0 py-0.5 rounded-xs">
                                            20% OFF
                                        </span> 

                                    </p>
                                    <p className="text-black text-xs my-1.5">
                                        24 meses de $103.88
                                    </p>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">
                                            Envio gratis{' '}
                                        </span> 
                                        por ser tu primera compra
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="w-[180px] h-[386px] shadow">
                            <div className="">
                                <img className="w-[173px] h-[173px] object-cover" 
                                src={motherboard} alt="motherboard" />
                            </div>
                            <div className="mt-3">
                                <p className="text-sm line-clamp-2">Tarjeta Madre Asus PRIME B550M-A AC Pcie 4.0 Dual M.2 4x4 Color Negro</p>
                                <div className="mt-1">
                                    <p 
                                    className="text-black font-medium text-xl flex items-center gap-1">
                                        $1,919
                                        
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-0 py-0.5 rounded-xs">
                                            20% OFF
                                        </span> 

                                    </p>
                                    <p className="text-black text-xs my-1.5">
                                        24 meses de $103.88
                                    </p>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">
                                            Envio gratis{' '}
                                        </span> 
                                        por ser tu primera compra
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="w-[180px] h-[386px] shadow">
                            <div className="">
                                <img className="w-[173px] h-[173px] object-cover" 
                                src={motherboard} alt="motherboard" />
                            </div>
                            <div className="mt-3">
                                <p className="text-sm line-clamp-2">Tarjeta Madre Asus PRIME B550M-A AC Pcie 4.0 Dual M.2 4x4 Color Negro</p>
                                <div className="mt-1">
                                    <p 
                                    className="text-black font-medium text-xl flex items-center gap-1">
                                        $1,919
                                        
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-0 py-0.5 rounded-xs">
                                            20% OFF
                                        </span> 

                                    </p>
                                    <p className="text-black text-xs my-1.5">
                                        24 meses de $103.88
                                    </p>
                                    <p className="text-black text-sm">
                                        <span className="text-[#40a751]">
                                            Envio gratis{' '}
                                        </span> 
                                        por ser tu primera compra
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* section categories */}
                <section className="bg-white w-full h-[423px] rounded p-5 mt-5">
                    <div className="flex items-center gap-3">
                        <p className="font-medium text-xl">Categorias</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-5">
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={carcategory} alt="car categoria" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Autos, Motos y Otros</p>
                        </div>

                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={celularesTelefonia} alt="celulares telefonia" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Celulares y Telefonia</p>
                        </div>

                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={electrodomesticos} alt="electrodomesticos" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Electrodomesticos</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={herramientas} alt="herramientas" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Herramientas</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={accesorios} alt="Accesorios para Vehiculos" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Accesorios para Vehiculos</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={ropa} alt="Ropa, Bolsas y Calzado" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Ropa, Bolsas y Calzado</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={fitness} alt="Deportes y Fitness" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Deportes y Fitness</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={makeup} alt="Belleza y Ciudado Personal" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Belleza y Ciudado Personal</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={muebles} alt="Hogar, Muebles y Jardin" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Hogar, Muebles y Jardin</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={computacion} alt="Computacion" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Computacion</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={inmuebles} alt="Inmuebles" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Inmuebles</p>
                        </div>
                        <div className="w-[270px] h-[100px] border flex items-center gap-3 p-2 rounded">
                            <img className="w-[75px] h-[70px] object-cover" 
                            src={audio} alt="Electronica, Audio y Video" />
                            <p className="font-medium hover:text-blue-600 cursor-pointer">Electronica, Audio y Video</p>
                        </div>
                        
                    </div>    

                </section>

                <div className="border border-red-600">
                    {children}
                </div>        
            </div>

        </main>
    
        <footer className="border border-4 bg-white p-5">

        </footer>

    </>
  )
}
