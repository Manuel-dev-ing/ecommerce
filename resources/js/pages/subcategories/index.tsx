import { Head, router, usePage } from '@inertiajs/react'
import { Label } from '@radix-ui/react-label'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem, Category, Family, PaginatedSubcategory, Subcategory, SubcategoryFormData } from '@/types'


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]

type SubCategoryIndexProps = {
    subCategory?: PaginatedSubcategory
    families?: Family[]
    categories?: Category[]
    flash?: { success?: string }
}

const initialFormData: SubcategoryFormData = {
    name: '',
    category_id: ''
}

export default function Index() {
    const { subCategory, families, categories } = usePage<SubCategoryIndexProps>().props
    const [open, setOpen] = useState<boolean>(false)
    const [activeId, setActiveId] = useState<number>(0)
    const [categorys, setCategorys] = useState<Category[] | undefined>(categories ?? [])
    const [subCategoriesList, setSubCategoriesList] = useState<Subcategory[]>(subCategory?.data ?? [])
    const [search, setSearch] = useState<string>('')

    const { reset, register, setValue, handleSubmit, formState: {errors} } = useForm({defaultValues: initialFormData})
    

    useEffect(() => {
        if (categories) {
            const result = categories?.filter(x => x.family_id === 1)
            setCategorys(result ?? [])
            return
        }   
    }, [categories])
    
    useEffect(() => {

        setSubCategoriesList(subCategory?.data ?? [])

    }, [subCategory])

    const filterSubCategories = subCategoriesList.filter(x => x.name.includes(search))

    const handleChanceSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setSearch(e.target.value)        
    } 

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let valor = e.target.value

        if (valor === '') {
            setSubCategoriesList(subCategory?.data ?? [])

        }else{
            const result = subCategoriesList.filter(x => x.category_id === Number(valor)) 
            if (result.length !== 0 ) {
                setSubCategoriesList(result)

            }else{
                setSubCategoriesList(subCategoriesList)

            }
        }
    }

    const handleSelectFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {

        let valor = e.target.value

        if (valor === '') {
            setSubCategoriesList(subCategory?.data ?? [])

        }else{
            const result = subCategoriesList.filter(x => x.category.family_id === Number(valor)) 
            if (result.length !== 0 ) {
                setSubCategoriesList(result)

            }else{
                setSubCategoriesList(subCategoriesList)

            }
        }

    }


    const handleCloseModal = () => {
        reset()
        setOpen(false)
    }

    const handleNewSubCategorie = () => {
        reset()
        setOpen(true)

    }

    const handleChandeFamilie = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value
        // console.log();
        const categorys = categories?.filter(item => item.family_id === Number(valor))
        setCategorys(categorys)
    }

    const handleEdit = (item:Subcategory) => {
        reset() 
        setOpen(true)
        setActiveId(item.id)
        setValue('name', item.name)
        setValue('category_id', item.category_id)
    }

    const handleDelete = (id:number) => {
        console.log(id);
        
        router.delete(`/subcategories/${id}`, {
            onSuccess: () => {
                handleCloseModal()
            }
        })

    }

    const handleFormSubmit = (data:SubcategoryFormData) => {

        if (activeId) {
            console.log("actualizando...");
            console.log(data);
            
            router.put(`/subcategories/${activeId}`, data, {
                onSuccess: () => {
                    handleCloseModal()
                }
            })

        }else{

            router.post('/subcategories', data, {
                onSuccess: () => {
                    handleCloseModal()
                }
            })

        }
    }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Subcategories" />

        <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-semibold text-2xl'>Subcategorias</p>
                    
                </div>

                <button type="button" 
                className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2"
                onClick={handleNewSubCategorie}>
                    <Plus size={16} strokeWidth={2.5} />
                    Nueva subcategoria
                </button>

            </div>

            <div>
                <div className="mx-auto w-full">   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className='flex gap-3'>
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <Input
                                onChange={handleChanceSearch} 
                                id='search'
                                className='bg-white p-5 ps-10 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-2'
                                placeholder='Buscar subcategoria'
                            />
                            
                        </div>
                        <div>
                          
                            <select 
                            onChange={handleSelectFamily}
                            className='bg-white rounded-md px-3 py-2.5 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md text-sm'>
                            <option value="">Selecciona una familia</option>
                                {families?.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                          
                            <select
                            onChange={handleSelectCategory} 
                            className='bg-white rounded-md px-3 py-2.5 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md text-sm'>
                                <option value="">Selecciona una categoria</option>
                                {categories?.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}

                            </select>
                        </div>


                    </div>
                </div>
            </div>    

            <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Family
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filterSubCategories.map((item, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
                            <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                {item.id}
                            </td>
                            <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                {item.category.name}
                            </td>
                            <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                {item.category.family.name}
                            </td>
                            <td>
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
                    <span className="font-semibold text-gray-600 ml-1">{subCategory?.from}-{subCategory?.to}</span> of <span className="font-semibold text-gray-600 ">
                        {subCategory?.total}
                    </span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href={subCategory!.links[0].url} 
                        className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${subCategory!.links[0].url === null ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            {'Anterior'}
                        </a>
                    </li>
                    {subCategory?.links.map((item, index) => (
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
                        <a href={subCategory?.next_page_url} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                            {'Siguiente'}
                        </a>
                    </li>
                    
                </ul>
            </nav>        

        </main>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {activeId ? "Editar subcategoria" : "Nueva subcategoria"}
                    </DialogTitle>         
                    <p className='text-sm text-gray-600'>
                        Crea una nueva subcategoría y asígnala a una categoría.
                    </p>
                </DialogHeader>  
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    
                    <div className='mb-2'>
                        <Label className='text-sm font-medium' htmlFor='name'>
                            Familia
                        </Label>
                        <select
                            onChange={handleChandeFamilie} 
                            className='bg-white rounded-md px-3 py-2 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md'>
                            {families?.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>

                            ))}    
                        
                        </select>
                    </div>

                    <div className='mb-2'>
                        <Label className='text-sm font-medium' htmlFor='name'>
                            Categoria
                        </Label>
                        <select 
                            className='bg-white rounded-md px-3 py-2 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md'
                                {...register('category_id', {
                                    required: "La categoria es requeridad"
                                })}
                            >
                            <option value="">Selecciona una categoria</option>
                            {categorys?.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        {errors.category_id && (
                            <ErrorMessage>{errors.category_id.message}</ErrorMessage>
                        )}
                    </div>

                    <div>
                        <Label className='text-sm font-medium' htmlFor='name'>
                            Nombre
                        </Label>
                        <Input 
                            id='name'
                            className='border border-gray-300 w-full 
                            focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                            placeholder='Ej. Analgesicos, Smartphones'
                            {...register('name', {
                                required: "El nombre de la subcategoria es requerido"
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
