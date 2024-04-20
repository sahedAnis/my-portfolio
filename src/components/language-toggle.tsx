'use client'

import ReactCountryFlag from "react-country-flag"
import { Switch } from "./ui/switch";
import { useState, useTransition, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";


export default function LanguageToggle() {

    const [currentLanguage, setCurrentLanguage] = useState('en');
    let [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    };
    

    return (
        <>
            <div className="flex items-center justify-between w-[100px] md:w-[110px] ">
                
                <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending} className="h-[30px] w-[40px] px-1">
                    <option value="en">
                        🇺🇸
                    </option>
                    <option value="fr">
                        🇫🇷
                    </option>
                </select>
            </div>
        </>
    )
}