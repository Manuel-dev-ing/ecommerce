import { Head, router, usePage } from '@inertiajs/react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem, Family, FamilyFormData, PaginatedFamilies } from '@/types'


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]


type FamiliesIndexProps = {
    families?: PaginatedFamilies
    flash?: { success?: string }
}

const initialFormData: FamilyFormData = {
    name: ""
}

export default function Index() {
    const [open, setOpen] = useState<boolean>(false);
    const [activeId, setActiveId] = useState<number>(0)

    const { families, flash } = usePage<FamiliesIndexProps>().props;

    const { handleSubmit, register, reset, setValue, formState: {errors} } = useForm({defaultValues: initialFormData})
    

    const handleNewFamilie = () => {
        console.log("guardando nueva familia");
        reset()
        setActiveId(0)
        setOpen(true)
    }

    const handleCloseModal = () => {
        reset()
        setActiveId(0)
        setOpen(false)
    }

    const handleEdit = (item:Family) => {
        console.log("editando familia");
        console.log(item);
        reset()
        setActiveId(item.id)
        setOpen(true)
        setValue('name', item.name)
    }

    const handleDelete = (id:number) => {
        console.log("eliminando familia");
        console.log(id);

        router.delete(`/families/${id}`, {
            onSuccess: () => {
                console.log("Eliminado...");
                
            }
        })
    }

    const handleFormSubmit = (data: FamilyFormData) => {
        if (activeId) {
            console.log("editando...");
            console.log(data);
            router.put(`/families/${activeId}`, data, {
                onSuccess: () => {
                    handleCloseModal()
                }
            })
            
        
        }else{
            console.log("guardando...");
            console.log(data);
            router.post('/families', data, {
                onSuccess: () => {
                    handleCloseModal()
                }
            })

        }
        
        

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Families" />

            <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-semibold text-2xl'>Familias y Categorias</p>
                        <p className='text-gray-600'>
                            Agrupa tus categorías en familias para organizar mejor tu catálogo
                        </p>
                    </div>

                    <button type="button" 
                    className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={handleNewFamilie}>
                        <Plus size={16} strokeWidth={2.5} />
                        Nueva familia
                    </button>

                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {families?.data.map((item, index) => (

                                <tr key={index} className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                
                                    <td className="px-6 py-4 flex gap-2">
                                        <button 
                                        className="py-2 px-2.5 rounded-md hover:bg-[#d7dee9] hover:cursor-pointer"
                                        onClick={() => handleEdit(item)}
                                        >

                                            <Pencil color="#131921" size={17} />
                                        </button>
                                        <button 
                                            className="py-2 px-2.5 rounded-md hover:bg-[#d7dee9] hover:cursor-pointer"
                                            onClick={() => handleDelete(item.id)}
                                            >

                                            <Trash2 color="#dd3d45" size={17} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        
                        </tbody>
                    </table>
                    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing 
                            <span className="font-semibold text-gray-600 ml-1">{families?.from}-{families?.to}</span> of <span className="font-semibold text-gray-600 ">
                                {families?.total}
                            </span>
                        </span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <a href={families!.links[0].url} 
                                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${families!.links[0].url === null ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                                    {'Anterior'}
                                </a>
                            </li>
                            {families?.links.map((item, index) => (
                                <>
                                    {item.page === null || item.label === 'Next &raquo;' ? (
                                        <></>
                                    ) : (
                                        
                                        <li key={index}>
                                            <a href="#" 
                                            className={`flex items-center justify-center px-3 h-8 border border-gray-300 ${item.active === true ? 'text-blue-800 bg-blue-100 hover:bg-blue-200 hover:text-blue-700' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}>
                                                {item.page}
                                            </a>
                                        </li>
                                    )}
                                </>

                            ))}
                            <li>
                                <a href={families?.next_page_url} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                                    {'Siguiente'}
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </main>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {activeId ? "Editar Familia" : "Nueva Familia"}
                        </DialogTitle>         
                        <p className='text-sm text-gray-600'>
                            Define una familia para agrupar categorías (ej. Farmacia, Tecnología).
                        </p>
                    </DialogHeader>         
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div>
                            <Label className='text-sm font-medium' htmlFor='name'>
                                Nombre de la opcion
                            </Label>
                            <Input 
                                id='name'
                                className='border border-gray-300 w-full 
                                focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                placeholder='Ej. Familia, Tecnologia, Hogar'
                                {...register('name', {
                                    required: "El nombre de la familia es requerido"
                                })} 
                            />
                            {errors.name && (
                                <ErrorMessage>{errors.name.message}</ErrorMessage>
                            )}
                            
                        </div>        
                        <div className='flex justify-end gap-2 mt-6'>
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





