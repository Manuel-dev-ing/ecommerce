import { Check } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { verifyExistElement } from '@/helpers'
import type { features } from '@/types'


type AccordionProps = {
    title: string
    features?: features[]
    atributes: features[]
    setAtributes: React.Dispatch<React.SetStateAction<features[]>>
}  

export default function AccordionCheck({ features, title, atributes, setAtributes }:AccordionProps) {
    const [active, setActive] = useState(false)//false
    const [isChecked, setIsChecked] = useState(false);
    // const [atributes, setAtributes] = useState<features[]>([])
    
    const [height, setHeight] = useState('0px')// 0px
    const [rotate, setRotate] = useState('transform duration-150 ease-in-out')//transform duration-700 ease-in-out 

    // console.log(atributes);

    const contentSpace = useRef(null)

    function toggleAccordion() {

        setActive((prevState) => !prevState)// false 

        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-150 ease-in-out' : 'transform duration-150 ease-in-out rotate-90')
        setIsChecked(!isChecked);
    
    }

    const handleInsert = (item: features) => {

        if (atributes.some(x => x.id === item.id)) {
            
            const result = atributes.filter(x => x.id !== item.id)
            console.log(result);
            setAtributes(result)

        }else{
            setAtributes(x => [...x, item])

        }

    }   

    return (
        <>
            <div className='flex flex-col bg-white border-2 rounded-sm'>
                
                <div className='flex pr-3'>
                    <label className="flex-1 py-6 px-7 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between "
                    
                    >
                        <div className='flex items-center gap-4'>
                            <input
                                type="checkbox"
                                className="peer hidden"
                                checked={isChecked}
                                onChange={toggleAccordion}
                            />

                            <div className="w-4 h-4 border border-gray-400 rounded bg-white flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500">
                                
                               <Check size={13} color={`${isChecked ? '#ffffff' : ''}`} 
                               strokeWidth={3.2} />

                            </div>
                            <p className="inline-block font-semibold">
                                {title}          
                            </p>
                            <p className='text-xs font-semibold'>
                                {features?.length}{' '}valores
                            </p>
                        </div>
                    </label>

                    
                </div>
                

                <div className='border-b-1 border-gray-200'>
                </div>   

                <div
                    ref={contentSpace}
                    style={{ maxHeight: `${height}` }}
                    className="overflow-hidden transition-max-height duration-700 ease-in-out"
                >
                    <div className='py-4 pl-5'>
                        <div className="flex gap-2 py-4 ">

                            {features?.map((item, index) => (
                                <div key={index} 
                                className={`flex justify-between items-center gap-1 border   ${verifyExistElement(item, atributes) ? 'border-blue-400 bg-blue-100 text-blue-800 text-xs font-semibold' :'border-gray-300 text-sm'} hover:border-indigo-400 rounded-sm px-3 py-1 cursor-pointer`} 
                                onClick={() => handleInsert(item)}
                                >
                                    {verifyExistElement(item, atributes) 
                                    ? <Check size={15} /> 
                                    : 
                                        <></>
                                    }
                                    {/* <Check size={15} /> */}
                                    <span>{item.description } </span> 

                                </div>
                                
                            ))}


                        </div>
                        
                    </div>
                </div>

            </div>
        
        </>
    )
}
