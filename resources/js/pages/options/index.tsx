import { Head, router, usePage } from '@inertiajs/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import Accordion from '@/components/accordion'
import ErrorMessage from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button' 
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem, Option, OptionFormData } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]

type OptionsIndexProps = {
    options?: Option[]
    flash?: { success?: string }
}

const initialData: OptionFormData = {
    name: "",
    type: 1
}

export default function Index() {
    
    const { options, flash } = usePage<OptionsIndexProps>().props;
    const [open, setOpen] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [activeId, setActiveId] = useState<number>(0)

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({defaultValues: initialData});
    

    const handleNewOption = () => {
        setOpen(true) 
        setActiveId(0)
        reset()

    }

    const handleCloseModal = () => {
        setOpen(false)
        setActiveId(0)
        reset()
        
    }
    
    const handleEdit = (option: Option) => {
        console.log("editando");
        console.log(option);
        reset()
        setOpen(true)
        setIsEdit(true)
        setActiveId(option.id)
        setValue('name', option.name)
        setValue('type', option.type)

    }

    const handleDelete = (id: number) => {
        console.log("Eliminando");
        console.log(id);
        
        router.delete(`/options/${id}`, {
            onSuccess: () => {
                console.log("opcion eliminada...");
            }
        })

    }

    const handleFormSubmit = (data : OptionFormData) => {

        if (activeId) {
            console.log("Editando");
            console.log(data);
            router.put(`/options/${activeId}`, data, {
                onSuccess: () => {
                    console.log("opcion actualizada...");
                    handleCloseModal()
                }   
            })

        }else{
            console.log("Guardando...");
            console.log(data);
            router.post('/options', data, {
                onSuccess: () => {
                    handleCloseModal()
                }
            })
        }

        
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Options" />

            <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-semibold text-2xl'>Opciones y Valores</p>
                        <p className='text-gray-600'>
                            Gestiona las variantes de tus productos (ej. Color, Talla, Material)
                        </p>
                    </div>

                    <button type="button" 
                    className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={handleNewOption}>
                        <Plus size={16} strokeWidth={2.5} />
                        Nueva opcion
                    </button>

                </div>

                {options?.map((item, index) => (

                    <Accordion
                        key={index}
                        title={item.name}
                        type={item.type}
                        content='holaMundo'
                        features={item.features}
                        handleDelete={() => handleDelete(item.id)}
                        item={item}
                        handleEdit={() => handleEdit(item)}
                    />
                ))}

            </main>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {activeId ? "Editar Opcion" : "Nueva Opcion"} 
                        </DialogTitle>
                        <p className='text-sm text-gray-600'>
                            Define un tipo de variante para tus productos (ej. Color, Talla).
                        </p>

                    </DialogHeader>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                        <div>
                            <Label className='text-sm font-medium' htmlFor='name'>
                                Nombre de la opcion
                            </Label>
                            <Input 
                                id='name'
                                className='border border-gray-300 w-full 
                                focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                placeholder='Ej. Color, Talla, Material'
                                {...register('name', {
                                    required: "El nombre de la opcion es requerido"
                                })} 
                            />
                            {errors.name && (
                                <ErrorMessage>{errors.name.message}</ErrorMessage>
                            )}
                            
                        </div>
                        <div>
                            <Label className='text-sm font-medium' htmlFor='type'>
                                Tipo de la opcion
                            </Label>
                            <Input 
                                id='type'
                                type='number'
                                min={1}
                                className='border border-gray-300 w-full 
                                focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                placeholder='Ej. Color, Talla, Material'
                                {...register('type', {
                                    required: "El tipo de la opcion es requerido"
                                })} 
                            />
                            {errors.name && (
                                <ErrorMessage>{errors.type?.message}</ErrorMessage>
                            )}
                            
                        </div>

                        <div className='flex justify-end gap-2'>
                            <Button onClick={handleCloseModal} 
                            type='button' 
                            className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 font-medium text-sm px-5 py-2.5 me-2 mb-2'>
                                Cancelar
                            </Button>
                            <Button 
                            className="bg-blue-700 hover:bg-blue-800 text-white text-sm hover:cursor-pointer" 
                            type='submit' >
                                {activeId ? "Guardar Cambios" : "Crear"}
                            </Button>

                        </div> 

                    </form>


                </DialogContent>
            </Dialog>    

        </AppLayout>
    )

}






