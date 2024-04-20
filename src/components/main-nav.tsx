import { ModeToggle } from "@/components/mode-toggle";
import ReactCountryFlag from "react-country-flag"
import { Switch } from "./ui/switch";
  


const MainNav = () => {
    return ( 
        <div className="h-[65px] w-screen fixed top-0 border-b-[1px] backdrop-blur-lg border-zinc-200 dark:border-zinc-800 z-[200]">
            <div className="w-[95%] sm:w-[70%] h-full mx-auto flex items-center justify-between">
                <p>feat: <span className="font-bold">Anis Sahed&apos;s portfolio</span></p>
                <div className="flex items-center w-[150px] md:w-[160px] justify-between">
                    <div className="flex items-center justify-between w-[100px] md:w-[110px] ">
                        <ReactCountryFlag
                            className="emojiFlag"
                            countryCode="US"
                            style={{
                                fontSize: '22px',
                                lineHeight: '1em',
                            }}
                            aria-label="United states"
                        />
                        <Switch className=""/>
                        <ReactCountryFlag
                            className="emojiFlag"
                            countryCode="FR"
                            style={{
                                fontSize: '22px',
                                lineHeight: '1em',
                            }}
                            aria-label="France"
                        />
                    </div>
                    
                    <ModeToggle />
                </div>
            </div>
        </div>
     );
}
 
export default MainNav;