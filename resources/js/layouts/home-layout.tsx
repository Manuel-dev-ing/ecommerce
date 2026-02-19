import { useState, type ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

import SectionPayments from "@/components/section-payments";


type HomeLayoutProps = {
    children: ReactNode
}

export default function HomeLayout({children}:HomeLayoutProps) {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    

  return (
    <>
        <Header
            setIsHovering={setIsHovering}
            isHovering={isHovering}
        />
        
        <main>
            {isHovering && 
                <>
                    <div className="absolute p-5 h-screen w-full bg-black opacity-30 backdrop-blur-sm z-40">
                    </div>

                </>
            }

            {children}

        </main>

        {/* payments */}
        <SectionPayments />

        {/* footer */}
        <Footer />

    </>
  )
}
