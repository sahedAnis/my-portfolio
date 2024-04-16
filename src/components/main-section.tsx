import React from 'react';
import TypeWritter from './ui/typewritter';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CgMouse } from "react-icons/cg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from 'next/link';
import { MailIcon } from 'lucide-react';
import FadeInOnScroll from './fade-in-on-scroll';


const MainSection = () => {
    

    return ( 
        <>
            <div className="flex flex-col md:justify-center items-center md:mt-0 h-screen  md:pb-[65px]">

                <img src="https://firebasestorage.googleapis.com/v0/b/anis-sahed.appspot.com/o/IMG_3962-removebg-preview.png?alt=media&token=d95084b8-9945-4bb7-9ebf-1ce1772acb05" alt="" className="animate-slide-down absolute bottom-0 md:left-[10px] xl:left-[100px] 2xl:left-[150px] w-[230px] h-[230px] md:w-[280px] md:h-[280px] 2xl:h-[380px] 2xl:w-[380px]" />
                <div className="text-center mt-[120px] md:mt-0 animate-slide-down-two">
                    <p className="font-normal text-[15px] sm:text-[25px] 2xl:text-[40px]">Hey! Relax.. you just found the right</p>
                    <TypeWritter />
                </div>
                <div className="absolute bottom-80 md:bottom-10 animate-[slide-down-two_5s_ease-out_forwards]">
                    <CgMouse className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] animate-bounce"/>
                </div>
            </div>
            <FadeInOnScroll>
                <section className="w-full md:w-[80%] 2xl:w-[60%] md:mx-auto h-[890px] md:h-[930px] lg:md-[950px] flex flex-col justify-end items-center scroll-smooth">
                    <div className="w-[90%] md:w-[95%] flex flex-col">
                        <h1 className="font-bold text-[35px] 2xl:text-[70px] md:text-[50px] item-end self-start border-b">Technologies</h1>
                        <p className="text-[13px] md:text-[17px] mt-2 text-gray-400">List of my favorite technologies and tools I use everyday.</p>
                        <div>
                            <Tabs defaultValue="all" className="w-[100%] mt-10 md:mt-14">
                                <TabsList className="w-[100%] h-[60px] rounded-[10px] px-2">
                                    <TabsTrigger value="all" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">All</TabsTrigger>
                                    <TabsTrigger value="software" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">Software</TabsTrigger>
                                    <TabsTrigger value="ops" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">Ops</TabsTrigger>
                                    <TabsTrigger value="crm" className="w-[25%] h-[50px] text-[12px] md:text-[14px] rounded-[10px]">CRM</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    <div className="w-full h-[500px] mt-4 z-10 ">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo" className="h-[50px] w-[50px]"/>
                                                <div className="ml-3">
                                                    <AlertTitle className="font-semibold">
                                                        Typescript
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        NextJS
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">React framework</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/2052px-Spring_Boot.svg.png" alt="Spring boot logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Spring Boot
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Java Framework</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png?20230428153009" alt="React logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        React
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">JavaScript library</AlertDescription>
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
                                                    <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
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
                                                    <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg" alt="Docker logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Docker
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Containerization tool</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png" alt="Kube logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Kubernetes
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Container orchestration tool</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://www.svgrepo.com/show/306098/githubactions.svg" alt="GitHub Actions logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                    Github Actions
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Continuous integration tool</AlertDescription>
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
                                                    <AlertDescription className="text-gray-400 mt-1">Salesforce programming language</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="software">
                                    <div className="w-full h-[500px] mt-4 z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo" className="h-[50px] w-[50px]"/>
                                                <div className="ml-3">
                                                    <AlertTitle className="font-semibold">
                                                        Typescript
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        NextJS
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">React framework</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/2052px-Spring_Boot.svg.png" alt="Spring boot logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Spring Boot
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Java Framework</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/768px-React.svg.png?20230428153009" alt="React logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        React
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">JavaScript library</AlertDescription>
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
                                                    <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
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
                                                    <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="ops">
                                    <div className="w-full h-[500px] mt-4 z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg" alt="Docker logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Docker
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Containerization tool</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png" alt="Kube logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Kubernetes
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Container orchestration tool</AlertDescription>
                                                </div>
                                            </Alert>
                                            <Alert className="flex">
                                                <img src="https://www.svgrepo.com/show/306098/githubactions.svg" alt="GitHub Actions logo" className="h-[50px] w-[50px]" />
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                    Github Actions
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Continuous integration tool</AlertDescription>
                                                </div>
                                            </Alert>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="crm">
                                    <div className="w-full h-[500px] mt-4 z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <Alert className="flex">
                                                <div className="h-[50px] w-[50px] flex flex-col justify-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="SF logo" className="h-[40px] w-[60px]"/>
                                                </div>
                                                <div className="ml-3">
                                                    <AlertTitle>
                                                        Apex
                                                    </AlertTitle>
                                                    <AlertDescription className="text-gray-400 mt-1">Salesforce programming language</AlertDescription>
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
                <section className="w-full md:w-[80%] 2xl:w-[60%] md:mx-auto lg:md-[950px] mt-[600px] md:mt-[130px] md:h-fit flex flex-col justify-around items-center">
                    <div className="w-[90%] md:w-[95%] flex flex-col">
                        <h1 className="font-bold text-[35px] md:text-[50px] 2xl:text-[70px] item-end self-start border-b">Contact</h1>
                        <p className="text-[13px] md:text-[17px] mt-2 text-gray-400">Let's get in touch!</p>
                        <div className="flex flex-col items-center justify-center h-[200px] sm:h-[300px] ">
                            <div className="w-[460px] animate-[slide-down-two_4s_ease-out_forwards] ">
                                <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between">
                                    <Link href="mailto:sahedanis2018@gmail.com" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="font-normal">
                                                Send me an Email
                                                <MailIcon className="text-black dark:text-white h-[1.4rem] w-[1.4rem] ml-1"/>
                                            </Button>
                                        </a>
                                    </Link>
                                    <div className="h-full flex mt-2 lg:mt-0 w-[270px] lg:w-[273px] justify-between">
                                        <Link href="https://www.linkedin.com/in/anis-sahed-07880418b/" passHref legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" className="font-normal">
                                                    Find me on
                                                    <LinkedInLogoIcon className="text-black dark:text-white h-[1.4rem] w-[1.4rem] ml-1"/>
                                                </Button>
                                            </a>
                                        </Link>
                                        <Link href="https://github.com/sahedAnis" passHref legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Button className="font-normal">
                                                    <GitHubLogoIcon className="text-white dark:text-black h-[1.2rem] w-[1.2rem] mr-2" />
                                                    My GitHub
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
            <p className="text-[12px] pb-2 text-gray-400 text-center">Sahed Anis - 2024, All Rights Reserved</p>
        </>
        
     );
}
 
export default MainSection; 