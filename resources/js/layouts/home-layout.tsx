import { MapPin, Search, ShoppingCart } from "lucide-react"
import type { ReactNode } from "react"
import envioslogotipo from '@/images/envioslogotipo.webp'
import logotipo from '@/images/logo.png'

type HomeLayoutProps = {
    children: ReactNode
}

export default function HomeLayout({children}:HomeLayoutProps) {
  return (
    <>
        <header className=" bg-[#fee73a] h-24">
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
                <div className="text-center  col-span-2">
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
                <div className="text-center col-span-2 flex items-center gap-5">
                    <p className="text-xs">Crea tu cuenta</p>
                    <p className="text-xs">Ingresa</p>
                    <p className="text-xs">Mis compras</p>
                    <ShoppingCart size={19} strokeWidth={1} />
                </div>
                
            </nav>

        </header>

        <main className="max-w-7xl mx-auto border-2 ">
            {children}
        </main>
    </>
  )
}
