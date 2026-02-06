import type { ReactNode } from "react"

type HomeLayoutProps = {
    children: ReactNode
}

export default function HomeLayout({children}:HomeLayoutProps) {
  return (
    <>
        <header className=" bg-yellow-300 h-24">
            <nav className="max-w-7xl mx-auto border-white border-1">

            </nav>

        </header>

        <main className="max-w-7xl mx-auto border-2 ">
            {children}
        </main>
    </>
  )
}
