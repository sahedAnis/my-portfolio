import React from 'react';
import { useRouter } from 'next/navigation';
import TypeWritter from './ui/typewritter';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CgMouse } from "react-icons/cg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaTrophy } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import Link from 'next/link';
import { MailIcon } from 'lucide-react';
import FadeInOnScroll from './fade-in-on-scroll';
import { useTranslations } from 'next-intl';



const MainSection = () => {

    const t = useTranslations('MainSection');
    const techs = useTranslations('Technologies');
    const achvts = useTranslations('Achievements');
    const contact = useTranslations('Contact');
    
    return ( 
        <>
            <div className="flex flex-col md:justify-center items-center mt-[64px] md:mt-0 h-[85vh] md:h-screen md:pb-[65px] ">

                <img src="https://firebasestorage.googleapis.com/v0/b/anis-sahed.appspot.com/o/IMG_3962-removebg-preview.png?alt=media&token=66f302a4-cad9-4844-ba3d-539c1bd0001d" alt="" className="animate-slide-down absolute bottom-0 md:left-[10px] xl:left-[100px] 2xl:left-[150px] w-[230px] h-[230px] md:w-[280px] md:h-[280px] 2xl:h-[380px] 2xl:w-[380px]" />
                <div className="text-center mt-[120px] md:mt-0 animate-slide-down-two">
                    <p className="font-normal text-[17px] sm:text-[25px] 2xl:text-[40px]">{t('textOne')}</p>
                    <TypeWritter sequence={[
                        "   ",
                        1000,
                        t('softwareEng'),
                        2200,
                        t('fullStackDev'),
                        2800,
                        t('ninja'),
                        3000,
                        t('ops'),
                        2800,
                        t('sf'),
                        2800,
                        t('cc'),
                        2300,
                        t('al'),
                        2300,
                        t('cr'),
                        2500,
                        t('u'),
                        2600,
                        t('ap'),
                        2600,
                        t('qsg'),
                        3000,
                        t('fa'),
                        2500
                    ]}/>
                </div>
                <div className="absolute bottom-60 md:bottom-10 animate-[slide-down-two_4s_ease-out_forwards]">
                    <CgMouse className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] animate-bounce"/>
                </div>
            </div>
            <FadeInOnScroll>
                <section className="w-full md:w-[80%] 2xl:w-[60%] md:mx-auto md:h-fit mt-[80px] md:mt-[120px] 2xl:mt-[200px] flex flex-col justify-end items-center scroll-smooth">
                    <div className="w-[90%] md:w-[95%] flex flex-col ">
                        <h1 className="font-bold text-[35px] 2xl:text-[70px] md:text-[50px] item-end self-start border-b">Technologies</h1>
                        <p className="text-[17px] md:text-[17px] mt-2 text-gray-400">{techs('phrase')}</p>
                        <div>
                            <Tabs defaultValue="all" className="w-[100%] mt-10 md:mt-14">
                                <TabsList className="w-[100%] h-[60px] rounded-[10px] px-2">
                                    <TabsTrigger value="all" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">{techs('all')}</TabsTrigger>
                                    <TabsTrigger value="software" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">{techs('software')}</TabsTrigger>
                                    <TabsTrigger value="ops" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">Ops</TabsTrigger>
                                    <TabsTrigger value="crm" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">CRM</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    <div className="w-full mt-4 z-10 animate-slide-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo" className="h-[50px] w-[50px]"/>
                                                <div className="ml-3">
                                                    <AlertTitle className="font-semibold">
                                                        Typescript
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('pl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center dark:bg-white rounded-[30px]">
                                                    <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" className="" />
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        NextJS
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('rf')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/2052px-Spring_Boot.svg.png" alt="Spring boot logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Spring Boot
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('jf')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png?20230428153009" alt="React logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        React
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('jl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo" className="h-[50px] w-[50px]" />
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Python
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('pl')}</AlertDescription>
                                                </div>  
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP logo" className="h-[40px] w-[60px]" />
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Php
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('pl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg" alt="Docker logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Docker
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('ct')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png" alt="Kube logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Kubernetes
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('cot')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" alt="GitHub Actions logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                    Github Actions
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('cit')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="SF logo" className="h-[40px] w-[60px]"/>
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Apex
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('sfl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="software">
                                    <div className="w-full mt-4 z-10 animate-slide-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo" className="h-[50px] w-[50px]"/>
                                                <div className="ml-3">
                                                    <AlertTitle className="font-semibold">
                                                        Typescript
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('pl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center dark:bg-white rounded-[30px]">
                                                    <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" className="" />
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        NextJS
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('rf')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/2052px-Spring_Boot.svg.png" alt="Spring boot logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Spring Boot
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('jf')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png?20230428153009" alt="React logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        React
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('jl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo" className="h-[50px] w-[50px]" />
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Python
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('pl')}</AlertDescription>
                                                </div>  
                                            </Alert>
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="PHP logo" className="h-[40px] w-[60px]" />
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Php
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('pl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="ops">
                                    <div className="w-full mt-4 z-10 animate-slide-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg" alt="Docker logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Docker
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('ct')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png" alt="Kube logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Kubernetes
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('cot')}</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" alt="GitHub Actions logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                    Github Actions
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('cit')}</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="crm">
                                    <div className="w-full mt-4 z-10 animate-slide-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="SF logo" className="h-[40px] w-[60px]"/>
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Apex
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">{techs('sfl')}</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </section>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <section className="w-full md:w-[80%] 2xl:w-[60%] md:mx-auto md:h-fit mt-[100px] md:mt-[120px] 2xl:mt-[200px] flex flex-col justify-end items-center">
                    <div className="w-[90%] md:w-[95%] flex flex-col ">
                        <h1 className="font-bold text-[35px] md:text-[50px] 2xl:text-[70px] item-end self-start border-b">{achvts('title')}</h1>
                        <p className="text-[17px] md:text-[17px] mt-2 text-gray-400">{achvts('phrase')}</p>
                        <div className=" mt-8 pl-4 flex flex-col justify-center">
                            <div className="flex items-center">
                                <div className="relative flex flex-col items-center">
                                    <div className="dark:bg-gray-700 bg-gray-200 rounded-[100%] h-[55px] w-[55px] flex justify-center items-center">
                                        <FaTrophy className="text-[25px] dark:text-gray-300 " />
                                    </div>
                                    <div className="absolute w-[2px] h-[32px] bottom-[-36px] dark:bg-gray-700 bg-gray-200"></div>
                                </div>
                                <p className="ml-6 md:text-[25px] text-[16px]">{achvts('cf')}</p>
                            </div>
                        </div>
                        <div className=" mt-10 pl-4 flex flex-col justify-center">
                            <div className="flex items-center">
                                <div className="relative flex flex-col items-center">
                                    <div className="dark:bg-gray-700 bg-gray-200 rounded-[100%] h-[55px] w-[55px] flex justify-center items-center">
                                        <FaUserDoctor className="text-[25px] dark:text-gray-300" />
                                    </div>
                                    <div className="absolute w-[2px] h-[32px] bottom-[-36px] dark:bg-gray-700 bg-gray-200"></div>
                                </div>
                                <p className="ml-6 md:text-[25px] text-[16px]">{achvts('ms')}</p>
                            </div>
                        </div>
                        <div className=" mt-10 pl-4 flex flex-col justify-center">
                            <div className="flex items-center">
                                <div className="relative flex flex-col items-center">
                                    <div className="dark:bg-gray-700 bg-gray-200 rounded-[100%] h-[55px] w-[55px] flex justify-center items-center">
                                        <FaUserGraduate className="text-[25px] dark:text-gray-300 " />
                                    </div>
                                    <div className="absolute w-[2px] h-[32px] bottom-[-36px] dark:bg-gray-700 bg-gray-200"></div>
                                </div>
                                <p className="ml-6 md:text-[25px] text-[16px]">{achvts('md')}</p>
                            </div>
                        </div>
                        <div className=" mt-10 pl-4 flex flex-col justify-center">
                            <div className="flex items-center">
                                <div className="relative flex flex-col items-center">
                                    <div className="dark:bg-gray-700 bg-gray-200 rounded-[100%] h-[55px] w-[55px] flex justify-center items-center">
                                        <FaLaptopCode className="text-[25px] dark:text-gray-300 " />
                                    </div>
                                </div>
                                <p className="ml-6 md:text-[25px] text-[16px]">{achvts('ws')}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <section className="w-full md:w-[80%] 2xl:w-[60%] md:mx-auto md:h-fit mt-[100px] md:mt-[120px] 2xl:mt-[200px] flex flex-col justify-end items-center">
                    <div className="w-[90%] md:w-[95%] flex flex-col ">
                        <h1 className="font-bold text-[35px] md:text-[50px] 2xl:text-[70px] item-end self-start border-b">Contact</h1>
                        <p className="text-[17px] md:text-[17px] mt-2 text-gray-400">{contact('phrase')}</p>
                        <div className="flex flex-col items-center justify-center h-[200px] sm:h-[300px] ">
                            <div className="w-full lg:w-[630px] animate-[slide-down-two_4s_ease-out_forwards]">
                                <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between">
                                    <Link href="mailto:sahedanis2018@gmail.com" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="font-normal lg:text-[20px] md:py-8 lg:rounded-[10px]">
                                                {contact('email')}
                                                <MailIcon className="text-black dark:text-white lg:h-[2.0rem] lg:w-[2.0rem] h-[1.4rem] w-[1.4rem] ml-1 lg:ml-2"/>
                                            </Button>
                                        </a>
                                    </Link>
                                    <div className={`h-full flex mt-2 lg:mt-0 w-[${contact('width')}] lg:w-[370px] justify-between`}>
                                        <Link href="https://www.linkedin.com/in/anis-sahed-07880418b/" passHref legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" className="font-normal lg:text-[20px] md:py-8 lg:rounded-[10px]">
                                                    {contact('linkedin')}
                                                    <LinkedInLogoIcon className="text-black dark:text-white lg:h-[2.0rem] lg:w-[2.0rem] h-[1.4rem] w-[1.4rem] ml-1 lg:ml-2"/>
                                                </Button>
                                            </a>
                                        </Link>
                                        <Link href="https://github.com/sahedAnis" passHref legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Button className="font-normal lg:text-[20px] md:py-8 lg:rounded-[10px]">
                                                    <GitHubLogoIcon className="text-white dark:text-black h-[1.2rem] w-[1.2rem] lg:h-[2.0rem] lg:w-[2.0rem] mr-2 lg:mr-2" />
                                                    {contact('github')}
                                                </Button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInOnScroll>
            <p className="text-[12px] md:text-[15px] pb-2 text-gray-400 text-center">Copyright © 2024 Anis SAHED</p>
        </>
        
     );
}
 
export default MainSection; 