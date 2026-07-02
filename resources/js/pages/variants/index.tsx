import { Head, usePage } from '@inertiajs/react'
import { Layers, Pencil, Plus, Shuffle, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AccordionCheck from '@/components/accordion-check'
import ErrorMessage from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem, features, Option, OptionObj, Product, VariantFormData } from '@/types'
import { data } from './data'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]


type VariantsIndexProps = {
    products?: Product[]
    options?: Option[]
    flash?: { success?: string }
}


const initialData: VariantFormData = {
    id: '',
    sku: '',
    options: [],
    precio: 0,
    stock: 0
}

export default function Index() {
    const [activeId, setActiveId] = useState<string>('')
    const [selectedOptions, setSelectedOptions] = useState<OptionObj[]>([])
    const [open, setOpen] = useState<boolean>(false)
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
    const [atributes, setAtributes] = useState<features[]>([])
    const [tempAtributes, setTempAtributes] = useState<features[]>([])
    const [variants, setVariants] = useState<VariantFormData[]>([])

    const { products, options } = usePage<VariantsIndexProps>().props
    const [product, setProduct] = useState<Product>({
    
    } as Product )

    const { register, handleSubmit, formState: { errors }, setValue, reset } = 
    useForm({defaultValues: initialData})

    const agrupado = Object.groupBy(atributes, (item) => item.option_id)
   
    console.log(variants);
    // console.log(atributes);
    

    useEffect(() => {
        if (variants.length > 0) {
            console.log("mostrando variantes");
            console.log(variants);
            console.log("guardar");
            
        }

        
    }, [variants])

    const handleSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value

        const product = products?.find(x => x.id === Number(id))
        setProduct(product)
        
    }


    const getOptionName = (id:number) => {
        const result = options?.find(x => x.id === id)

        return result?.name
    }

    const getNumberRandom = () => {
        return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCancelar = () => {
        setOpen(false)
    }

    const handleGuardar = () => {
      
        setAtributes(tempAtributes)
        setOpen(false)
    }

    const getOptions = (id: string) => {
        const arr : string[] = []
        const result = variants.find(x => x.id === id)

        console.log(result?.options);

        result?.options.forEach(x => {
            arr.push(x.description)
            // arr.push("/")
        })
        
        const option = arr.join(" / ")
        // console.log(arr.join("/"));
        return option
        
    }

    const handleEdit = (item: VariantFormData) => {
        console.log("editando...");
        console.log(item);
        setActiveId(item.id)
        setOpenModalEdit(true)
        setSelectedOptions([])
        setValue("id", item.id)
        setValue("options", item.options)
        setValue("precio", item.precio)
        setValue("sku", item.sku)
        setValue("stock", item.stock)

        setSelectedOptions(item.options)

    }
    
    const closeVariantModal = () => {
        setOpenModalEdit(false)
        setActiveId('')
    }

    const handleDelete = (id:string) => {
        console.log("eliminando...");
        console.log(id);

        setVariants(
            x => x.filter(v => v.id !== id)
        );

    }

    const getId = () => {
        const id = Math.random().toString(16).slice(-4)

        return id;
    }

    const getStock = () => {
        let total: number = 0;
        if (variants.length > 0) {

            variants.forEach(element => {
                total += element.stock
            });

        }else{
            total = variants.length
        }
        
        return total;
    }

    const getAttributes = (arr_result: string[], agrupado: Partial<Record<number, features[]>>) => {
        let contador = 0
        const ultimo = arr_result.length -1;
        let arr : OptionObj[] = []
        const arr_variants: OptionObj[][] = []
        const arr_variants_result: OptionObj[][] = [] 
        // const arr_temp = []

        for (let index = 1; index < arr_result.length; index++) {
            const option_id = arr_result[index];
            const arr_atributes = agrupado[`${Number(option_id)}`]

            if (ultimo === index) {
                if (contador === 0) {
                    arr_atributes?.forEach(element => {
                        arr.push(element)
                    });
                    arr_variants_result.push(arr)
                    
                    
                }                

                for (let l = 0; l < arr_variants.length; l++) {
                    console.log("let l = 0; l < arr_variants.length; l++)");
                    
                    for (let k = 0; k < arr_variants[l].length; k++) {
                        const element = arr_variants[l][k] // obj 

                        for (let i = 0; i < arr_atributes!.length; i++) {
                            const element_last = arr_atributes![i];
                            
                            arr.push({option_id: element.option_id, value: element.value, description: element.description})

                            arr.push({option_id: element_last.option_id, value: element_last.value, description: element_last.description})

                            arr_variants_result.push(arr)

                            arr = arr.filter(x => x.value !== element_last.value)
                            arr = arr.filter(x => x.value !== element.value)

                        }
                    }
                    
                }

            }else {
                contador = +1
                for (let j = 0; j < arr_atributes!.length; j++) {
                    const element = arr_atributes![j];
                    
                    arr.push({option_id: element.option_id, value: element.value, description: element.description})
                        
                    arr_variants.push(arr)
                    arr = []
                
                }
            }
             

        }

        return arr_variants_result;
    }   

    const handleGenerarAtributos = () => {

        console.log("Generando atributos...");
        console.log(agrupado);
      
        const arr_result = Object.keys(agrupado)
        // let arr_element: OptionObj[] = []
        // console.log(arr_result);
        

        const result = getAttributes(arr_result, agrupado)
        console.log(result);
        // for (let i = 0; i < result.length; i++) {
            
        //     console.log(result[i]);
            
        // }
        

        for (let index = 0; index < arr_result[0].length; index++) {

            const option_id = arr_result[index];
            const arr_atributes = agrupado[`${Number(option_id)}`]

            for (let i = 0; i < arr_atributes!.length; i++) {
                const element = arr_atributes![i];
                
                if (result.length === 1) {
                    console.log("dos arreglos...");
                    
                    const temp_arr : OptionObj[] = []
                    result[0].forEach(item => {
                        const copy_temp_arr = [...temp_arr] 

                        copy_temp_arr.push({option_id: element.option_id, value:element.value, 
                        description:element.description})
                        copy_temp_arr.push({option_id: item.option_id, value:item.value, 
                        description:item.description})
                        // crear una copia del array
                        const obj = {id: getId(), options: copy_temp_arr, sku: 'sku-'+getNumberRandom(), precio: 10.36, stock: 5}

                        setVariants(x => [...x, obj])   
                        
                        copy_temp_arr.filter(x => x.description != item.description)
                    
                    });
                    
                }else{

                    console.log("mas de dos arreglos");
                    
                    for (let j = 0; j < result.length; j++) {
                        const copy_arr = [...result[j]];
                        // console.log(copy_arr);
                        
                        copy_arr.push({option_id: element.option_id, value:element.value, 
                            description:element.description})
                        
                        // arr_element.push(element)
                        
                        const obj = {id: getId(), options: copy_arr, sku: 'sku-'+getNumberRandom(), precio: 10.36, stock: 5}
    
                        // console.log(obj);
                        setVariants(x => [...x, obj])                       
                        
                        // result[j] = result[j].filter(x => x.description !== element.description)
                        
                    }
                }

            }

        }

        

    }

    const handleFormSubmit = (data : VariantFormData) => {
        // editar variante

        setVariants(variants.map(x => {
            
            if (x.id === data.id) {
                
                return { id: x.id, options: x.options, sku: data.sku, precio: Number(data.precio), stock: Number(data.stock)}
            }

            return x
        }));

        closeVariantModal()
    }
    

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Variants' />
            <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-semibold text-2xl'>Variantes de Producto</p>
                        <p className='text-gray-600'>
                            Asigna atributos y genera variantes con SKU, precio y stock individuales
                        </p>

                    </div>
                </div>

                <div className='bg-white rounded p-4'>
                    <div>
                        <label htmlFor="product">Seleccionar producto</label>
                        <select id="product" className='bg-white rounded-md px-3 py-2.5 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-2 focus:shadow-md text-sm'
                        onChange={handleSelectProduct}>
                            <option value="">
                                Elige un producto para gestionar variantes
                            </option>
                            {products?.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>


                {Object.keys(product).length > 0 ? (
                    <>
                        <section className='flex gap-3'>
                            <div className='p-4 bg-white shadow-xs w-64 border rounded-md'>
                                <p className='text-sm text-gray-500'>Atributos</p>
                                <span className='text-2xl font-bold text-foreground'>
                                    {Object.keys(agrupado).length}
                                </span>
                            </div>
                            <div className='p-4 bg-white shadow-xs w-64 border rounded-md'>
                                <p className='text-sm text-gray-500'>Variantes</p>
                                <span className='text-2xl font-bold text-foreground'>
                                    {variants.length}
                                </span>
                            </div>
                            <div className='p-4 bg-white shadow-xs w-64 border rounded-md'>
                                <p className='text-sm text-gray-500'>Stock total</p>
                                <span className='text-2xl font-bold text-foreground'>
                                    {getStock()}
                                </span>
                            </div>

                        </section>{/* section de resumen indicadores */}

                        <section className='bg-white p-5 '>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='font-semibold text-md'>Atributos asignados</p>
                                    <span className='text-gray-500'>
                                        Define qué características varían en este producto (ej. Color, Talla)
                                    </span>
                                </div>

                                <div className='flex gap-2'>
                                    <button type="button" className="flex items-center gap-1 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer"
                                    onClick={() => handleOpenModal()}>
                                        <Plus size={18} />
                                        Gestionar atributos
                                    </button>
                                    <button disabled={Object.keys(agrupado).length > 0 ? false : true} type="button" className={`flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 cursor-pointer disabled:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
                                    onClick={() => handleGenerarAtributos()}>
                                        <Shuffle size={18} />
                                        Generar variantes
                                    </button>
                                </div>

                            </div>
                            <div className='mt-5 p-3 flex'>
                                {atributes.length > 0 ? (
                                    <>
                                        <div className="max-w-5xl mt-2 flex-1">
                                            <div className='space-y-2'>
                                                {Object.keys(agrupado).map((item, index)=> (
                                                    
                                                    <div key={index} className="flex items-center gap-5 rounded-lg border p-3">
                                                        <h3 className="text-sm font-bold">
                                                            {getOptionName(Number(item))}
                                                        </h3>
                                                        {agrupado[`${item}`]?.map((obj, index) => (
                                                            <p key={index} className="text-gray-700 font-medium text-sm border border-gray-300 rounded-full px-2 py-0.5">
                                                                {obj.description}
                                                            
                                                            </p>
                                                            
                                                        ))}
                                                    </div>
                                                    
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (

                                    <p className='text-gray-500'>
                                        No hay atributos asignados. Haz clic en "Gestionar atributos" para comenzar.
                                    </p>
                                )}
                            </div>

                        </section>{/* section de atributos asignados */}


                        <section className='bg-white p-5 '>
                            <div>

                                <p className='font-semibold text-md'>
                                    Variantes <span>({variants.length})</span>
                                </p>
                                <span className='text-gray-500'>
                                    Cada variante tiene su propio SKU, precio y stock
                                </span>
                            </div>


                            {variants.length > 0 ? (
                                <>
                                    <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Variante
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    SKU
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Precio
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Stock
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {variants.map((item, index) => (

                                                <tr key={index} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                                    <td className='px-6 py-4 text-gray-900 whitespace-nowrap flex gap-3 '>
                                                        {item.options.map((options, indx) => (
                                                            
                                                            <div key={indx} className='flex gap-1 items-center'>
                                                                <p className='text-gray-600 font-medium uppercase text-xs'>
                                                                    {getOptionName(options.option_id) } 
                                                                </p>
                                                                <span className='lowercase font-medium'>
                                                                    {options.description}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td className='px-6 py-4 text-gray-900 whitespace-nowrap'>
                                                        <p className='uppercase text-xs font-medium'>
                                                            {item.sku}
                                                        </p>
                                                    </td>
                                                    <td className='px-6 py-4 font-semibold text-sm text-gray-900 whitespace-nowrap'>
                                                        {item.precio}
                                                    </td>
                                                    <td className='px-6 py-4 font-semibold text-sm  text-gray-900 whitespace-nowrap'>
                                                        {item.stock}
                                                    </td>
                                                    <td className='px-6 py-4 flex gap-2'>
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
                                </>
                            ) : (
                                <div className='border border-gray-400 mt-5 p-3 flex justify-center items-center'>
                                    <p className='text-gray-500'>
                                    Asigna atributos primero para poder generar variantes.
                                    </p>
                                </div>

                            )}    
                        </section>{/* section de variantes */}
                    </>
                ): (
                    <section className='border bg-white py-16 px-6'>

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='p-3 rounded-full bg-gray-200'>
                                <Layers color='#6b6b6b'  />

                            </div>
                            
                            <div className='text-center'>
                                <p className='text-gray-700 font-semibold'>Selecciona un producto</p>
                                <p className='text-gray-600'>
                                    Elige un producto arriba pata gestionar sus atributos y variantes
                                </p>   

                            </div>
                        </div>

                    </section>

                )}


            </main>

            {/* modal editar atributo  */}
            <Dialog open={openModalEdit} onOpenChange={setOpenModalEdit}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar variante</DialogTitle>
                        <p className='text-gray-600'>
                           {getOptions(activeId)}
                        </p>
                    </DialogHeader>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div>
                            <Label className='uppercase' htmlFor="sku">sku</Label>
                            <Input
                                id='sku'
                                className='border border-gray-300 w-full 
                                focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                {...register('sku', {
                                    required: "El sku es requerido"
                                })}
                            />

                            {errors.sku && (
                                <ErrorMessage>{errors.sku.message}</ErrorMessage>
                            )}
                        </div>
                        <div className='mt-2 grid md:grid-cols-2 md:gap-6'>
                            <div>
                                <Label className='uppercase' htmlFor="precio">precio</Label>
                                <Input
                                    id='precio'
                                    type='number'
                                    min={0}
                                    step={0.01}
                                    className='border border-gray-300 w-full 
                                    focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                    {...register('precio', {
                                        required: "El precio es requerido"
                                    })}
                                />
                                {errors.precio && (
                                    <ErrorMessage>{errors.precio?.message}</ErrorMessage>

                                )}
                            </div>
                            <div>
                                <Label className='uppercase' htmlFor="stock">stock</Label>
                                <Input
                                    id='stock'
                                    type='number'
                                    className='border border-gray-300 w-full 
                                    focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                                    {...register("stock", {
                                        required: "El stock es requerido"
                                    })}
                                />
                                {errors.stock && (
                                    <ErrorMessage>{errors.stock.message}</ErrorMessage>
                                )}

                            </div>

                        </div>

                        <div className='mt-5 flex justify-end gap-2'>
                            <Button 
                            type='button' 
                            className='text-white bg-gray-800 hover:bg-gray-900 
                            focus:ring-4 font-medium text-sm px-5 py-2.5 me-2 mb-2'
                            onClick={() => closeVariantModal()}>
                                Cancelar
                            </Button>
                            <Button 
                            className="bg-blue-700 hover:bg-blue-800 text-white text-sm hover:cursor-pointer" 
                            type='submit'>
                                {"Guardar"}
                            </Button>

                        </div> 
                    </form>
                    

                </DialogContent>        

                {/* fin modal editar atributo  */}
            </Dialog>    

            {/* modal atributos */}
            <Dialog open={open} onOpenChange={setOpen}>
                
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Gestionar atributos
                        </DialogTitle>
                        <p className='text-sm text-gray-600'>
                            Selecciona las opciones y valores que aplican a "Proteína Whey 2kg"
                        </p>
                    </DialogHeader>

                    {options?.map((item, index) => (

                        <AccordionCheck
                            key={index}
                            title={item.name}
                            features={item.features}
                            atributes={tempAtributes}
                            setAtributes={setTempAtributes}

                        />
                    ))}

                    <div className='flex justify-end gap-2'>
                        <Button 
                        type='button' 
                        className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 font-medium text-sm px-5 py-2.5 me-2 mb-2'
                        onClick={() => handleCancelar()}>
                            Cancelar
                        </Button>
                        <Button 
                        className="bg-blue-700 hover:bg-blue-800 text-white text-sm hover:cursor-pointer" 
                        type='submit'
                        onClick={() => handleGuardar()}>
                            {"Guardar"}
                        </Button>

                    </div> 

                </DialogContent>

            </Dialog>    

        </AppLayout>
    )
}
