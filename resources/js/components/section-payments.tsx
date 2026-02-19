import React from 'react'

import payment from '@/images/payment.svg'
import protect from '@/images/protected.svg'
import shipping from '@/images/shipping.svg'

export default function SectionPayments() {
  return (
    <section className="w-full bg-white p-5 mt-10">
        <div className="flex justify-between max-w-7xl p-2">
            <div className="flex flex-col items-center w-[400px] h-[221px] px-11 pt-9 pb-5">
                
                <img className="w-[66px] h-[46px]" src={payment} alt="payment" />
                <p className="text-xl mt-5">
                    Elige cómo pagar
                </p>
                <p className="text-center text-sm text-gray-600">
xs                   Puedes pagar con tarjeta, débito, efectivo o con Meses sin Tarjeta.
                </p>

            </div>
            <div className="flex flex-col items-center w-[400px] h-[221px] px-11 pt-9 pb-5">
                
                <img className="w-[66px] h-[46px]" src={shipping} alt="shipping" />
                <p className="text-xl mt-5 text-center">
                    Envío gratis por ser tu primera compra
                </p>
                <p className="text-center text-sm text-gray-600">
                    Aprovecha este beneficio en millones de productos.
                </p>

            </div>
            <div className="flex flex-col items-center w-[400px] h-[221px] px-11 pt-9 pb-5">
                
                <img className="w-[66px] h-[46px]" src={protect} alt="payment" />
                <p className="text-xl mt-5">
                    Seguridad, de principio a fin
                </p>
                <p className="text-center text-sm text-gray-600">
                    ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.
                </p>

            </div>
        </div>

    </section>
  )
}
