import { Head, router, usePage } from '@inertiajs/react'
import { Image, Pencil, Plus, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import products_url from '@/routes/products'

import type { BreadcrumbItem, Category, Family, PaginatedProduct, Product } from '@/types'


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]

type ProductsIndexProps = {
  products?: PaginatedProduct
  families?: Family[]
  categories?: Category[]
  flash?: { success?: string }


}

export default function Index() {
  const { products, families, categories } = usePage<ProductsIndexProps>().props
  
  const [productsList, setProductsList] = useState<Product[]>(products?.data ?? [])
  const [search, setSearch] = useState<string>('')

  const filterProducts = productsList.filter(x => x.name.includes(search))

  // console.log(filterProducts);
  

  useEffect(() => {

    if (products) {
      setProductsList(products.data ?? [])

    }

  }, [products])


  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setSearch(valor)

  }

  const handleSelectFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let valor = e.target.value

    if (valor === '') {
      
      setProductsList(products?.data ?? [])

    }else{
      const result = productsList.filter(x => x.subcategory.category.family_id == Number(valor))
      
      if (result.length !== 0) {
        setProductsList(result)
      
      }else{
        setProductsList(productsList)

      }

    }

  }

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let valor = e.target.value
    
    if (valor === '') {
      setProductsList(products?.data ?? [])

    }else {

      const result = productsList.filter(x => x.subcategory.category_id == Number(valor))
      
      if (result.length !== 0) {
        setProductsList(result)
      
      }else {
        setProductsList(productsList)

      }

    }

  }
  
  const handleDelete = (id:number) => {
    router.delete(`/products/${id}`, {
      onSuccess: () => {
        console.log("Producto Eliminado");
        
      }
    })
    
  }

  return (
    <AppLayout breadcrumbs={breadcrumbs}>

      <Head title="Products" />

      <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
       
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-semibold text-2xl'>Productos</p>
            <p className='text-gray-600'>
              Gestiona el catálogo de productos de tu tienda
            </p>

          </div>

          <a 
            href={products_url.create.url()}
            type="button" 
            className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2">
            <Plus size={16} strokeWidth={2.5} />
            Nuevo producto
          </a>

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
                  
                  id='search'
                  className='bg-white p-5 ps-10 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-2'
                  placeholder='Buscar por nombre o SKU'
                  onChange={handleBuscar}
                />
                  
              </div>
              <div>
                
                <select 
                className='bg-white rounded-md px-3 py-2.5 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md text-sm'
                onChange={handleSelectFamily}>
                  <option value="">Todas las familias</option>
                  {families?.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                  ))}

                </select>
              </div>
              <div>
                
                <select
                className='bg-white rounded-md px-3 py-2.5 border border-gray-300 w-full focus:border-[#30507c] focus:shadow-[#d4dbe4] focus:border-1 focus:shadow-md text-sm'
                onChange={handleSelectCategory}
                >
                  <option value="">Todas las categorias</option>
                  {categories?.map((item, index) => (
                    <option key={index} value={item.id}>{item.name}</option>
                  ))}  

                </select>
              </div>


            </div>
          </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-800 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                  
              </th>
              <th scope="col" className="px-6 py-3">
                  Producto
              </th>
              <th scope="col" className="px-6 py-3">
                  SKU
              </th>
              <th scope="col" className="px-6 py-3">
                  Category
              </th>
              <th scope="col" className="px-6 py-3">
                  Price
              </th>
              <th scope="col" className="px-6 py-3">
                  Status
              </th>
              <th scope="col" className="px-6 py-3">
                  Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filterProducts.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50 border-b  border-gray-200">
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  <div className={`${item.image_path != null ? '' : 'bg-[#e3e7ee] py-2.5 px-2.5'}  rounded flex items-center justify-center`}>
                    {item.image_path != null ? (
                      <>
                        <img className='w-10 h-9' 
                        src={`/storage/${item.image_path}`} 
                        alt={item.name} />
                      </>
                    ) : (
                      <Image color='#828080' size={17} />
                      
                    ) }
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  <div>
                    <p className='font-semibold'>{item.name}</p>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600 font-medium whitespace-nowrap">
                  {item.sku}
                </td>
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  <div>
                    <p className='font-medium text-sm'>
                      {item.subcategory.category.family.name}
                    </p>
                    <p className='text-gray-600'>
                      {item.subcategory.category.name}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                  {item.price}
                </td>
                
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                  <span className={`${item.status === 1 ? 'bg-green-100 text-green-800 border-green-400' : 'bg-red-100 text-red-800 border-red-400'}  text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm border `}>
                    {item.status === 1 ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2 whitespace-nowrap">
                  <a
                  href={products_url.edit.url(item)} 
                  className="py-2 px-2.5 rounded-md hover:bg-[#d7dee9] hover:cursor-pointer"
                  >

                    <Pencil color="#131921" size={17} />
                  </a>
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


      </main>

    </AppLayout>
  )
}
