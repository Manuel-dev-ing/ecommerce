import React from 'react'

import accesorios from '@/images/accesorios.webp'
import audio from '@/images/audio.webp'
import carcategory from '@/images/car-category.webp'
import celularesTelefonia from '@/images/celularesTelefonia.webp'
import computacion from '@/images/computacion.webp'
import electrodomesticos from '@/images/electrodomesticos.webp'
import fitness from '@/images/fitness.webp'
import herramientas from '@/images/herramientas.webp'
import inmuebles from '@/images/inmuebles.webp'
import makeup from '@/images/makeup.webp'
import muebles from '@/images/muebles.webp'
import ropa from '@/images/ropa.webp'



export default function Categories() {
  return (
    <section className="bg-white w-full h-[423px] rounded p-5 mt-10">
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
  )
}
