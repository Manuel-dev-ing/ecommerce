import React from 'react'
import oferta1 from '@/images/oferta1.webp'
import oferta2 from '@/images/oferta2.webp'


export default function SectionOffers() {
  return (
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
  )
}
