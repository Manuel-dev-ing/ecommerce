import { router } from '@inertiajs/react'
import { Pen, Plus, Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import chevronright from '@/images/chevron-right.svg'
import type { FeatureFormData, features, Option } from '@/types'
import ErrorMessage from './ErrorMessage'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'


type AccordionProps = {
    type: number
    title: string
    features?: features[]
    content: string
    handleDelete: (id: number) => void
    item: Option
    handleEdit: (option: Option) => void
}   

const initialData: FeatureFormData = {
    description: '',
    value: '',
    option_id: 0
}

export default function Accordion({type, title, features, handleDelete, item, handleEdit} : AccordionProps) {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [ActiveId, setActiveId] = useState<number>(0)
    const [open, setOpen] = useState<boolean>(false)
    const [option, setOption] = useState<Option>(item)
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isNumber, setIsNumber] = useState<number | string>("");
    const [active, setActive] = useState(false)//false
    const [height, setHeight] = useState('0px')// 0px
    const [rotate, setRotate] = useState('transform duration-150 ease-in-out')//transform duration-700 ease-in-out 

    const { handleSubmit, reset, register, formState: {errors}, setValue } = useForm({defaultValues: initialData})

    const contentSpace = useRef(null)

    function toggleAccordion() {

        setActive((prevState) => !prevState)// false 

        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-150 ease-in-out' : 'transform duration-150 ease-in-out rotate-90')
    
    }

    const onMouseEnter = (index:number) => {
        if (index === index) {
            setIsNumber(index)
            // setIsHovering(true)
            
        }
        
    }

    const onMouseLeave = () => {
        setIsNumber("")
    }

    const handleCloseModal = () => {
        setOpen(false)
        setActiveId(0)
        setIsEdit(false)
        reset()
        
    }

    const handleNewFeature = () => {
        setIsEdit(false)
        reset()
        setOpen(true)
    }

    const handleEditFeature = (item: features) => {

        console.log("Editando...");
        console.log(item);
        reset()
        setIsEdit(true)
        setActiveId(item.id)
        setOpen(true)
        setValue('description', item.description)
        setValue('value', item.value)
        setValue('option_id', item.option_id)
        
    }

    const handleDeleteFeature = (id: number) => {
        console.log("Eliminando...");
        console.log(id);

        router.delete(`/features/${id}`, {
            onSuccess: () => {
                console.log("Eliminado...");

            }
        })
        
    }

    const handleForm = (data: FeatureFormData) => {
        data.option_id = option.id
        
        if (isEdit) {
            console.log("editando...");
            console.log(data);
            router.put(`/features/${ActiveId}`, data, {
                onSuccess: () => {
                    console.log("editado");
                    
                    handleCloseModal()
                }
            })
            
        }else{
            console.log("guardando...");
            // router.post('/features', data, {
            //     onSuccess: () => {
            //         console.log("guardado...");
            //         handleCloseModal()
            //     }
            // })

        }

    }

    return (

        <>
            <div className='flex flex-col bg-white border-2 rounded-sm'>
                
                <div className='flex pr-3'>
                    <button className="flex-1 py-6 px-7 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between "
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
                            <p className='text-xs font-semibold'>
                                {features?.length}{' '}valores
                            </p>
                        </div>
                    </button>

                    <div className='flex items-center gap-1'>
                        
                        <a onClick={() => handleEdit(option)} 
                        className='p-1.5 rounded cursor-pointer hover:text-white hover:bg-indigo-600'>
                            <Pen size={16} />
                        </a>
                        <a onClick={() => handleDelete(option.id)} 
                        className='text-red-600 p-1.5 rounded cursor-pointer hover:text-white hover:bg-indigo-600'>
                            <Trash2 size={16} />
                        </a>
                    </div>
                </div>
                

                <div className='border-b-1 border-gray-200'>
                </div>   

                <div
                    ref={contentSpace}
                    style={{ maxHeight: `${height}` }}
                    className="overflow-hidden transition-max-height duration-700 ease-in-out"
                >
                    <div className='py-4 pl-7'>
                        <div className="flex gap-2 py-4 pl-7">

                            {features?.map((item, index) => (
                                <div key={index} className='flex justify-between items-center gap-2 border border-gray-300 hover:border-indigo-300 rounded-full px-3 py-1' 
                                onMouseEnter={() => onMouseEnter(index)} onMouseLeave={onMouseLeave}>

                                    <span className=''>{item.description}</span> 

                                    <div className='flex items-center gap-1'>
                                        {index === isNumber && 
                                            <>
                                                <a 
                                                onClick={() => handleEditFeature(item)} className='text-blue-500 rounded hover:text-black cursor-pointer'>
                                                    <Pen size={13} />
                                                </a>
                                                <a onClick={() => handleDeleteFeature(item.id)} className='text-blue-500 rounded hover:text-red-600 cursor-pointer'>
                                                    <Trash2 size={13} />
                                                </a>
                                
                                            </>
                                        }
                                    </div>
                                </div>
                                
                            ))}


                        </div>
                        <div className='pl-7'>
                            <button
                            onClick={() => handleNewFeature()} 
                            type="button" 
                            className="flex items-center gap-1.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:text-white hover:bg-blue-700 font-medium rounded text-xs px-3 py-2 cursor-pointer">
                                <Plus size={16} />
                                Agregar valor
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {isEdit ? "Editar valor" : "Nuevo valor"}
                        </DialogTitle>
                        <p className='text-sm text-gray-600'>
                            Agrega un nuevo valor a esta opción (ej. Rojo, S, Algodón).
                        </p>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
                        <div>
                            <Label className='text-sm font-medium' htmlFor='value'>
                                Valor
                            </Label>
                            <Input 
                                id='value'
                                className='border border-gray-300 w-full 
                                focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                placeholder='Ej. xl, m'
                                {...register('value', {
                                    required: "El valor es requerido"
                                })}
                            />

                            {errors.value && (
                                <ErrorMessage>{errors.value.message}</ErrorMessage>
                            )}
                        </div>
                        <div>
                            <Label className='text-sm font-medium' htmlFor='description'>
                                Descripcion
                            </Label>
                            <Input 
                                id='description'
                                className='border border-gray-300 w-full 
                                focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                placeholder='Ej. small, masculino, red, white'
                                {...register("description", {
                                    required: "La descripcion es requerida"
                                })}
                            />

                            {errors.description && (
                                <ErrorMessage>{errors.description.message}</ErrorMessage>
                            )}
                        </div>
                        
                        <div className='flex justify-end gap-2'>
                            <Button
                            onClick={handleCloseModal}
                            type='button' 
                            className='text-white bg-gray-800 hover:bg-gray-900
                            focus:ring-4 font-medium text-sm px-5 py-2.5 me-2 mb-2'>
                                Cancelar
                            </Button>
                            <Button 
                            className="bg-blue-700 hover:bg-blue-800 text-white 
                            text-sm hover:cursor-pointer" 
                            type='submit' >
                                {isEdit ? "Guardar cambios" : "Agregar"}
                            </Button>

                        </div> 
                    </form>

                </DialogContent>

            </Dialog>

        </>
    )
}
