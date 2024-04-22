'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { useState, useTransition, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";


export default function LanguageSelector() {

    const [currentLanguage, setCurrentLanguage] = useState('en');
    let [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: string) => {
        const nextLocale = e;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    };
    

    return (
        <>
            <div className="flex items-center justify-between w-[50px]">
                
                <Select defaultValue={localActive} onValueChange={onSelectChange} disabled={isPending}>
                    <SelectTrigger className="h-[38px] px-1 text-[22px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground bg-transparent border-0 rounded-md">
                        <SelectValue placeholder={localActive} />
                    </SelectTrigger>
                    <SelectContent className="z-[100]">
                        <SelectItem value="en" className="text-[23px] md:text-[25px]">🇬🇧</SelectItem>
                        <SelectItem value="fr" className="text-[23px] md:text-[25px]">🇫🇷</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}