import React from 'react';
import TypeWritter from './ui/typewritter';
import { Button } from "@/components/ui/button";
import avatarImg from '../../public/images/IMG_3962-removebg-preview.png'
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from 'next/link';
import { MailIcon } from 'lucide-react';


const MainSection = () => {
    

    return ( 
        <div className="flex flex-col md:justify-center items-center md:mt-0 h-[300px] md:h-screen md:pb-[65px]">
            <img src="https://firebasestorage.googleapis.com/v0/b/anis-sahed.appspot.com/o/IMG_3962-removebg-preview.png?alt=media&token=d95084b8-9945-4bb7-9ebf-1ce1772acb05" alt="" className="animate-slide-down absolute bottom-0 md:left-[10px] xl:left-[100px] 2xl:left-[150px] w-[230px] h-[230px] md:w-[280px] md:h-[280px] 2xl:h-[380px] 2xl:w-[380px]"/>
            <div className="text-center mt-[120px] md:mt-0 animate-slide-down-two">
                <p className="font-normal text-[15px] sm:text-[25px] 2xl:text-[40px]">Hey! Relax.. you just found the right</p>
                <TypeWritter />
            </div>
            
            <div className="absolute bottom-60 md:bottom-10 w-[460px] animate-[slide-down-two_4s_ease-out_forwards]">
                <p className="text-gray-400 dark:text-gray-200 pb-4 text-center">Get in touch with me</p>
                <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between">
                    <Link href="mailto:sahedanis2018@gmail.com" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                Send me an Email
                                <MailIcon className="text-black dark:text-white h-[1.4rem] w-[1.4rem] ml-1"/>
                            </Button>
                        </a>
                    </Link>
                    <div className="h-full flex mt-2 lg:mt-0 w-[270px] lg:w-[273px] justify-between">
                        <Link href="https://www.linkedin.com/in/anis-sahed-07880418b/" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <Button variant="outline">
                                    Find me on
                                    <LinkedInLogoIcon className="text-black dark:text-white h-[1.4rem] w-[1.4rem] ml-1"/>
                                </Button>
                            </a>
                        </Link>
                        <Link href="https://github.com/sahedAnis" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <Button>
                                    <GitHubLogoIcon className="text-white dark:text-black h-[1.2rem] w-[1.2rem] mr-2" />
                                    My GitHub
                                </Button>
                            </a>
                        </Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
     );
}
 
export default MainSection; 