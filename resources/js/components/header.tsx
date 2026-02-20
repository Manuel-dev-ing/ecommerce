import { Link } from '@inertiajs/react'
import { ChevronDown, MapPin, Search, ShoppingCart } from 'lucide-react'
import type { Dispatch } from 'react'
import envioslogotipo from '@/images/envioslogotipo.webp'
import logotipo from '@/images/logo.png'

import { login, register } from '@/routes'
import ListCategories from './list-categories'

type HeaderProps = {
    setIsHovering: Dispatch<boolean>
    isHovering: boolean
}

export default function Header({setIsHovering, isHovering}: HeaderProps) {


    const onMouseEnter = () => {
        setIsHovering(true)
    }
    const onMouseLeave = () => {
        setIsHovering(false)
    }

  return (
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
                    <ul className="text-xs font-normal flex items-center">
                     
                        <li>
                            <a onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} href="#" className="flex items-center block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent">
                                Categorias
                                <ChevronDown size={21} strokeWidth={0.75} />
                            </a>
                            {isHovering && 
                                <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
                                    <ListCategories />

                                </div>
                            }

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
                    <Link href={register()} className="text-xs hover:font-medium">Crea tu cuenta</Link>
                    <Link href={login()} className="text-xs hover:font-medium">Ingresa</Link>
                    <Link className="text-xs hover:font-medium">Mis compras</Link>
                    <ShoppingCart size={19} strokeWidth={1} />
                </div>
                
            </nav>

        </header>
  )
}
