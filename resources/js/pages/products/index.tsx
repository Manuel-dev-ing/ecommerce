import { Head } from '@inertiajs/react'
import React from 'react'
import AppLayout from '@/layouts/app-layout'
import type { BreadcrumbItem } from '@/types'
const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Sistema de Gestion de Productos',
    href: '',
  },
]


export default function Index() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>

      <Head title="Products" />

      <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
        <h1>Productos</h1>
      </main>

    </AppLayout>
  )
}
