import { ModeToggle } from "@/components/mode-toggle";



const MainNav = () => {
    return ( 
        <div className="h-[65px] w-screen md:fixed top-0 border-b-[1px] border-zinc-200 dark:border-zinc-800">
            <div className="w-[95%] sm:w-[70%] h-full mx-auto flex items-center justify-between">
                <p>feat: <span className="font-bold">Anis Sahed&apos;s portfolio</span></p>
                <div className="flex items-center">
                    <ModeToggle />
                </div>
            </div>
        </div>
     );
}
 
export default MainNav;