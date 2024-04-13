import React from 'react';
import TypeWritter from './ui/typewritter';
import { Button } from "@/components/ui/button";
import avatarImg from '../../public/images/IMG_3962-removebg-preview.png'
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from 'next/link';
import Image from 'next/image';

const MainSection = () => {
    

    return ( 
        <div className="flex flex-col md:justify-center items-center mt-[250px] md:mt-0 md:h-screen md:pb-[65px]">
            <Image src={avatarImg} alt="My avatar" className=" absolute bottom-0 md:left-[10px] xl:left-[100px] 2xl:left-[150px] w-[230px] h-[230px] md:w-[280px] md:h-[280px] 2xl:h-[380px] 2xl:w-[380px]"/>
            <div className="text-center">
                <p className="font-normal text-[15px] sm:text-[25px] 2xl:text-[40px]">Hey! Relax.. you just found the right</p>
                <TypeWritter />
            </div>
            
            <div className="absolute bottom-80 md:bottom-10 w-[280px]">
                <p className="text-gray-400 dark:text-gray-200 pb-4 text-center">Get in touch with me</p>
                <div className="flex justify-between">
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
     );
}
 
export default MainSection; 