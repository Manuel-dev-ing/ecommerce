import { Head, Link, usePage } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <HomeLayout>
                <h1 className="text-4xl font-bold text-red-600">
                    Hola Mundo
                </h1>
            </HomeLayout>
        </>
    );
}
