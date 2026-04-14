import { Head, router, usePage } from '@inertiajs/react'
import { Upload } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem, Category, Family, ProductFormData, Subcategory } from '@/types'


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]

type ProductsProps = {
  subCategory?: Subcategory[]
  families?: Family[]
  categories?: Category[]
  flash?: { success?: string }
}

const initialData:ProductFormData = {
  name: '',
  description: '',
  image_path: null,
  price: '',
  sku: '',
  status: true,
  subcategory_id: 0

}


export default function Create() {
  const [isChecked, setIsChecked] = useState(true);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { categories, families, subCategory } = usePage<ProductsProps>().props
  const [categorys, setCategorys] = useState<Category[] | undefined>([])
  const [subCategories, setSubCategories] = useState<Subcategory[] | undefined>([])

  const { register, reset, setValue, handleSubmit, formState: {errors} } = useForm({defaultValues: initialData})

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.files);
    
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Crear URL para previsualización
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSelectFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value
    const categorys = categories?.filter(item => item.family_id === Number(valor))
    setCategorys(categorys)

  }

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value
    const subcategoria = subCategory?.filter(x => x.category_id === Number(valor))
    setSubCategories(subcategoria)

  }

  const handleFormSubmit = (data: ProductFormData) => {
    data.image_path = selectedImage
    data.status = isChecked;
    
    console.log(data);
    
    router.post('/products', data, {
      forceFormData: true,
      onSuccess: () => {
        console.log("guardado");
        
      }

    })
    
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Create Products" />
        
        <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
          <div className='flex items-center justify-between'>
              <div>
                  <p className='font-semibold text-2xl'>Nuevo Productos</p>
                  <p className='text-gray-600'>
                      Completa la información para agregar un producto al catálogo.
                  </p>

              </div>

          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <div className='border flex flex-col'>
              <label className='font-medium mb-1.5'>Imagen del producto</label>
              <label 
                className='flex flex-col justify-center items-center cursor-pointer border border-2 border-dashed 
                border-gray-500 block w-full h-72 hover:border-dashed hover:border-gray-700 hover:bg-gray-50'>
                {previewUrl ? (
                  
                  <img 
                    className='border-gray-500 block w-44 h-60 object-cover object-center' 
                    src={previewUrl} 
                    alt="portada" 
                  />

                ): (
                  <>
                    <Upload size={45} color='#827f7f'/>
                    <span className='text-gray-600 font-medium mt-1'>
                      Haz click para subir una imagen
                    </span>
                    <span className='text-xs text-gray-600 mt-1'>
                      PNG, JPG o WEBP (max. 5MB)
                    </span>
                  
                  </>
                )}

                <input type="file" className='hidden' accept='image/*' onChange={handleImageChange} />
              </label>

            </div>
            <div className='mt-2 grid md:grid-cols-2 md:gap-6'>
              <div>
                <Label className='text-sm font-medium' htmlFor='name'>
                  Nombre del producto
                </Label>
                <Input 
                  id='name'
                  className='border bg-white border-gray-400 text-black w-full 
                  focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                  placeholder='Ej. Paracetamol 500mg'
                  {...register('name', {
                    required: "El nombre del producto es requerido"
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}           
              </div> 
              <div>
                <Label className='text-sm font-medium' htmlFor='sku'>
                  SKU
                </Label>
                <Input 
                  id='sku'
                  className='border bg-white border-gray-400 text-black w-full 
                  focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                  placeholder='Ej. MED-001'
                  {...register('sku', {
                    required: "El SKU es requerido"
                  })}
                /> 
                {errors.sku && (
                  <ErrorMessage>{errors.sku.message}</ErrorMessage>
                )}             
              </div>

            </div>
            <div>
              <Label className='text-sm font-medium'>Descripcion</Label>
              <textarea 
                className='px-3 py-1 rounded-md border bg-white border-gray-400 text-black w-full focus:border-[#1a6ee5] focus:border-2 focus:shadow-md' 
                placeholder='Descripcion del producto' rows={3} 
                {...register('description', {
                  required: "La descripcion es requerida"
                })}
                ></textarea>
                {errors.description && (
                  <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>
            <div className='mt-2 grid md:grid-cols-3 md:gap-6'>
              <div className='mb-2'>
                <Label className='text-sm font-medium' htmlFor='name'>
                  Familia
                </Label>
                <select
                  className='bg-white rounded-md px-3 py-2 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md' onChange={handleSelectFamily}
                  >
                  <option value="">Seleccionar</option>
                  {families?.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>

                  ))}    
                </select>
              </div>
              <div className='mb-2'>
                <Label className='text-sm font-medium' htmlFor='name'>
                  Categoria
                </Label>
                <select
                  className='bg-white rounded-md px-3 py-2 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md'
                  onChange={handleSelectCategory}>
                  <option value="">Seleccionar</option>  
                  {categorys?.map((item, index)=>(
                    <option key={index} value={item.id}>{item.name}</option>
                  ))}  
                </select>
              </div>
              <div className='mb-2'>
                <Label className='text-sm font-medium' htmlFor='name'>
                  SubCategoria
                </Label>
                <select
                  className='bg-white rounded-md px-3 py-2 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md'
                  {...register('subcategory_id', {
                    required: "La subcategoria es requerida"
                  })}
                  >
                  <option value="">Seleccionar</option>
                  {subCategories?.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                  ))}    
                </select>

                {errors.subcategory_id && (
                  <ErrorMessage>{errors.description?.message}</ErrorMessage>
                )}
              </div>

            </div>
            <div className='mt-2 grid md:grid-cols-2 md:gap-6'>
              <div>
                <Label className='text-sm font-medium' htmlFor='name'>
                  Precio
                </Label>
                <Input 
                  id='name'
                  type='number'
                  min={0}
                  step={0.01}
                  className='border bg-white border-gray-400 text-black w-full 
                  focus:border-[#1a6ee5] focus:border-2 focus:shadow-md'
                  placeholder='0.00'
                  {...register('price', {
                    required: "El precio es requerido"
                  })}
                />              
                {errors.price && (
                  <ErrorMessage>{errors.price.message}</ErrorMessage>
                )}
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-300 p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Producto activo</p>
                  <p className="text-sm text-gray-600">El producto será visible en la tienda</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <Input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isChecked} 
                    
                  />
                  <div 
                    className="relative w-11 h-6 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 ">

                  </div>
                
                </label>
              </div>
            </div>
            <div className='flex justify-end gap-2 mt-6'>
              <Button  
              type='button' 
              className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 font-medium text-sm px-5 py-2.5 me-2 mb-2'>
                  Cancelar
              </Button>
              <Button 
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm hover:cursor-pointer" 
              type='submit' >
                {"Crear producto"}
              </Button>

            </div>    
          </form>

        </main>

    </AppLayout>
  )
}







