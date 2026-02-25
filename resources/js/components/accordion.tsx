import { Pen, Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import chevronright from '@/images/chevron-right.svg'



type AccordionProps = {
    type: number
    title: string
    content: string
}   

export default function Accordion({type, title, content} : AccordionProps) {
        const [active, setActive] = useState(false)//false
        const [height, setHeight] = useState('0px')// 0px
        const [rotate, setRotate] = useState('transform duration-150 ease-in-out')//transform duration-700 ease-in-out 
    
        const contentSpace = useRef(null)
    
        function toggleAccordion() {
    
            setActive((prevState) => !prevState)// false 
            
            // el primer click es false
            // el segundo click es true
            console.log(active);// true 
    
            setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
            setRotate(active ? 'transform duration-150 ease-in-out' : 'transform duration-150 ease-in-out rotate-90')
        
        }

    return (
        <div className='flex flex-col bg-white border-2 rounded-sm'>
            
            <button className="py-6 px-7 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggleAccordion}
            >
                <div className='flex items-center gap-4'>
                    <img 
                        className={`${rotate} inline-block w-[20px] h-[20px]`} 
                        src={chevronright} 
                        alt="Chevron icon" 
                    />
                    <p className="inline-block font-semibold">
                        {title}          
                    </p>
                    <p className='text-xs font-semibold'>4 valores</p>

                </div>
                <div className='flex items-center gap-1'>
                    <button className='p-1.5 rounded cursor-pointer hover:text-white hover:bg-indigo-600'>
                        <Pen size={16} />
                    </button>
                    <button className='text-red-600 p-1.5 rounded cursor-pointer hover:text-white hover:bg-indigo-600'>
                        <Trash2 size={16} />
                    </button>
                </div>

            </button>

            <div className='border-b-1 border-gray-200'>
            </div>   

            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="overflow-hidden transition-max-height duration-700 ease-in-out  "
            >
                
                <div className="py-6 pl-7 pb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque culpa, est corporis at beatae officiis obcaecati provident molestiae porro quo. Itaque illum vero dolorem ex a consequatur nobis maxime.
                </div>
            </div>

        </div>
    )
}
