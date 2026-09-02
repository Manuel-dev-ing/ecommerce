import { Head, router, usePage } from '@inertiajs/react'
import { ArrowLeft, ArrowRight, Package, Plus, Star, StarOff, Upload, X } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import Toast from '@/components/ui/toast'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem, Cover, Product } from '@/types'


type VariantsIndexProps = {
    products?: Product[]
    flash?: { success?: string }
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]


export default function Index() {
  const [value, setValue] = useState<number>(0)
  const [selected, setSelected] = useState<boolean>(false)
  const [vissible, setVissible] = useState<boolean>(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[] | undefined>([]);
  const [images, setImages] = useState<Cover[]>([])
  const [image, setImage] = useState<Cover | undefined>({} as Cover)
  const { products } = usePage<VariantsIndexProps>().props
  const [product, setProduct] = useState<Product>({} as Product )

  console.log("selecteds images...");
  console.log(selectedImages);
  
  

  const getId = () => {
    const id = Math.random().toString(16).slice(-4)

    return id;
  }

  const setCover = (item: string) => {
    
    const result = images.find(x => x.id === item)
    
    setImage(result)

  }


  const getImage = () => {

    let str_image = "";

    if (Object.keys(image).length > 0) {

      str_image = image!.image_path

    }else{

      str_image = images[0].image_path
    
    }


    return str_image;
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     
    const file = event.target.files?.[0];
    if (file) {
      if (images.length < 8) {
        
        setSelectedImages(x => [...x ?? [], file]);
  
        const reader = new FileReader();
        reader.onloadend = () => {
          const obj_image = {id: getId(), image_path: reader.result as string}
          setImages(x => [...x, obj_image])
          // setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      }else{
        setVissible(true)
      }
    }
  }
  
  const handleLeft = (id:string) => {

    console.log("handle left...");
   
    const images_copy = [...images]

    for (let index = 0; index < images.length; index++) {
      const element = images[index];

      if (element.id === id) {
        console.log("indice: ", index);
        console.log("elemento: ", element);
        
        console.log("elemento anterior: ", images[index-1]);

        let indice = index-1  

        if (indice < 0) {
          indice = 0
        }

        images_copy[indice] = element
        images_copy[index] = images[indice]

      }
      
      setImages(images_copy)
      
    }
    
  }

  const handleRight = (id:string) => {

    console.log("handle right...");
    
    console.log(id);
    console.log(images);
    
    const images_copy = [...images]

    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      
      if (element.id === id) {
        console.log("indice actual: ", index);
        console.log("elemento actual: ", element);
        
        console.log("elemento siguiente: ", images[index+1]);
        
        let indice = index+1  

        if (indice > images.length-1) {
          indice = images.length-1
        }

        images_copy[indice] = element
        images_copy[index] = images[indice]
      }

    }

    console.log(images_copy);
    setImages(images_copy)

  }

  const handleSelectProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value
    if (Number(id) !== 0) {
      
      const product = products?.find(x => x.id === Number(id))
      setValue(Number(id))
  
      setProduct(product)
      
    }else{
      setProduct({} as Product)
      setValue(0)
    }
   
  }

  const exmapleObject = () => {

    return {
      id: 1,
      name: "Hola Mundo"
    }
  }

  const handleFormSubmit = () => {

    
    console.log({product, selectedImages});
    const obj = {product, selectedImages}
    router.post('/covers', obj, {
      onSuccess: () => {
        console.log("portadas guardadas...");
        setProduct({} as Product)
        setSelectedImages([])
        setImages([])
        setSelected(false) 
        setValue(0)
      }
    })    

  }



  return (
    <AppLayout breadcrumbs={breadcrumbs}>

      <Head title={'covers'} />
      
      <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
        {vissible && (
            <Toast description='Limite alcanzado. Maximo 8 imagenes por producto' />
        )}
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-semibold text-2xl'>Portadas de productos</p>
            <p className='text-gray-600'>
              Asigna la imagen principal y la galeria que veran los compradores
            </p>

          </div>

          <button 
            type="button" 
            className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2"
            onClick={() => handleFormSubmit()}>
            <Plus size={16} strokeWidth={2.5} />
            Guardar 
          </button>

        </div>

        <div className='bg-white rounded p-4 border border-gray-200 shadow-sm'>
          <div className='flex items-center gap-2 mb-2.5'>
            <Package size={17} />
            <p className='font-medium'>Selecciona producto</p>
          </div>
          <p className='text-sm text-gray-600'>
            Busca por nombre o SKU y elige el producto a editar.
          </p>
          <div className='flex gap-7 mt-5 justify-between'>

            <div className='w-full'>
              <label className='font-medium' htmlFor="search">Buscar</label>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <Input
                  id='search'
                  className='bg-white p-5 ps-10 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-2'
                  placeholder='Buscar por nombre o SKU...'
                />
              </div>
            </div>

            <div className='w-full flex flex-col'>
              <label className='font-medium' htmlFor="product">Producto</label>
              <select id="product" className='bg-white rounded-md px-3 py-2.5 border border-gray-300 focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-2 focus:shadow-md text-sm'
              onChange={handleSelectProduct}>
                <option value={0} selected={value === 0 ? true : false}>
                  Elige un producto para gestionar variantes
                </option>
                {products?.map((item, index) => (
                  <option key={index} value={item.id} selected={value === item.id ? true : false}>
                      {item.name}
                  </option>
                ))}
              </select>

            </div>

          </div>

        </div>

        {Object.keys(product).length > 0 ? (

          <div className='flex gap-5 border border-red-600'>
            <div className='bg-white w-[45.5rem] border border-gray-300 shadow-sm rounded px-5 py-3'>
              <p className='font-medium'>
                Vista previa
              </p>
              <p className='text-gray-500'>
                Asi se vera la portada en la tienda
              </p>
              <div className='bg-gray-100 border border-gray-300 rounded h-96 flex items-center justify-center my-5'>

                {images.length >= 1 ? (

                  <img className='object-cover w-full h-full' src={getImage()} alt="imagen portada" />

                ) : (
                  <div>
                    <p className='text-gray-500 font-medium text-sm'>
                      Sin portada asignada
                    </p>
                  </div>
                )}      

                  
              </div>     
              <p className='font-medium'>
                Nombre del producto
              </p>          
              <div className='flex items-center'>
                <p className='text-gray-500 text-sm'>
                  TEC-001
                  <span className='px-1'>-</span>
                </p>
                <p className='text-gray-500 text-sm'>
                  Categoria
                </p>
              </div>
              <p className='font-medium text-sm'>
                <span>{images.length}</span>    
                <span>/</span>    
                <span>8</span>
                <span className='pl-2'>imagenes</span>    
              </p>

            </div>
            <div className='w-full bg-white border border-gray-300 shadow-sm rounded p-4'>
              <p className='font-medium'>Galeria</p>    
              <p className='text-gray-500'>
                Marca una imagen como portada, reordenalas o eliminalas.
              </p>
              <div className='flex flex-col my-4'>
                <label className='font-medium mb-1.5'>Imagen del producto</label>
                <label 
                  className='flex flex-col justify-center items-center cursor-pointer border border-2 border-dashed 
                  border-gray-300 bg-gray-100 block w-full h-72 hover:border-dashed hover:border-gray-400 hover:bg-gray-100'>
                    
                    <Upload size={45} color='#827f7f'/>
                    <span className='text-gray-600 font-medium mt-1'>
                      Haz click para subir una imagen
                    </span>
                    <span className='text-xs text-gray-600 mt-1'>
                      PNG, JPG o WEBP (max. 5MB)
                    </span>
                    
                  <input type="file" className='hidden' accept='image/*' onChange={handleImageChange} />
                </label>

              </div>         

              <div className='flex flex-col justify-start '>
                
                {/* inicio contenedor cards imagenes */}
                <div className='flex justify-start gap-4 flex-wrap'>

                  {images.map((item, index) => (

                    <div key={index} className={`max-w-44 h-full ${ getImage() === item.image_path ? 'border-2 border-blue-500 rounded shadow-sm shadow-blue-50' : 'border border-gray-400'}`}>

                      <div className='relative overflow-hidden'>

                        {/* inicio iconos superiores */}
                        <div className='px-2 w-full flex justify-between absolute top-2'>

                          {getImage() === item.image_path ?
                            <div className='px-3 group bg-blue-500 flex gap-1 justify-center items-center rounded-full'>
                              <Star size={14} color='#ffffff' className='' />
                              <span className='text-[11px] font-medium text-white cursor-pointer'>
                                Portada
                              </span>
                            </div>
                          
                          : (
                            <></>
                          )}


                          <div className='py-1 px-1 group hover:bg-red-500  flex justify-center items-center rounded'>
                            <X size={15} className='group-hover:text-white cursor-pointer' />
                          </div>
                        
                        </div>
                        {/* fin iconos superiores */}


                        <img className='object-cover max-w-[190px] h-[200px]' src={item.image_path} alt="" />
                      </div>  

                      {/* inicio iconos inferiores */}
                      <div className='flex justify-between p-2'>
                        <div className='flex gap-2'>
                          <button className='group p-1 rounded hover:bg-blue-500 cursor-pointer'
                          onClick={() => handleLeft(item.id)}>
                            <ArrowLeft size={16} className='group-hover:text-white cursor-pointer' />

                          </button>
                          <button className='group p-1 rounded hover:bg-blue-500 cursor-pointer'
                          onClick={() => handleRight(item.id)}>

                            <ArrowRight size={16} className='group-hover:text-white cursor-pointer' />

                          </button>

                        </div>
                        <div className=' cursor-pointer '>
                          
                          <button className='flex gap-2 items-center group py-1 px-2 rounded hover:bg-blue-500 group-hover:text-white cursor-pointer'
                          onClick={() => setCover(item.id)}>
                          
                            {getImage() === item.image_path ? (
                              <>
                                <StarOff size={14} className='text-gray-500' />
                                <span className='text-[12px] font-semibold text-gray-500'>

                                  Actual
                                </span>
                              </>
                            ): (
                              <>
                                <Star size={14} className='group-hover:text-white' />
                                <span className='text-[12px] font-semibold group-hover:text-white'>

                                  Portada
                                </span>
                              </>
                            )}

                          </button>
                        </div>

                      </div>
                      {/* fin iconos inferiores */}


                    </div>  

                  ))}    
                  


                
                  
                </div>
                {/* fin contenedor cards imagenes */}


              </div>
              

              {/* <p className='text-gray-500 font-medium '>
                Este producto no tiene imagenes
              </p> */}

            </div>

          </div>              
        ): 
          <></>
        }        

      </main>

    </AppLayout>
  )
}
