import { Head } from '@inertiajs/react'
import Accordion from '@/components/accordion'
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

            <Head title="Options" />

            <main className='flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4'>
         
                <Accordion
                    title='Talla'
                    type={1}
                    content='holaMundo'
                />



            </main>

        </AppLayout>
    )

}






