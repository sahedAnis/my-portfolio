'use client'

import { ModeToggle } from "@/components/mode-toggle";
import { useTranslations } from 'next-intl';
import LanguageSelector from "./language-selector";


const MainNav = () => {
    
    const t = useTranslations('Navbar');


    return ( 
        <div className="h-[65px] w-screen fixed top-0 border-b-[1px] backdrop-blur-lg border-zinc-200 dark:border-zinc-800 z-[80]">
            <div className="w-[95%] sm:w-[70%] h-full mx-auto flex items-center justify-between">
                <p>feat: <span className="font-bold">{t('title')}</span></p>
                <div className="flex  justify-between items-center" >
                    <LanguageSelector />
                    <ModeToggle />
                </div>
            </div>
        </div>
     );
}
 
export default MainNav;