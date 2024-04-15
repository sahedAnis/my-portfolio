import React from 'react';
import TypeWritter from './ui/typewritter';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from 'next/link';
import { MailIcon } from 'lucide-react';


const MainSection = () => {
    

    return ( 
        <>
            <div className="flex flex-col md:justify-center items-center md:mt-0 h-[300px] md:h-screen md:pb-[65px]">

                <img src="https://firebasestorage.googleapis.com/v0/b/anis-sahed.appspot.com/o/IMG_3962-removebg-preview.png?alt=media&token=d95084b8-9945-4bb7-9ebf-1ce1772acb05" alt="" className="animate-slide-down absolute bottom-0 md:left-[10px] xl:left-[100px] 2xl:left-[150px] w-[230px] h-[230px] md:w-[280px] md:h-[280px] 2xl:h-[380px] 2xl:w-[380px]" />
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
            <section className="w-full md:w-[70%] md:mx-auto h-[1850px] md:h-[1100px] lg:md-[950px] flex flex-col justify-around items-center scroll-smooth">
                <div className="w-[90%] md:w-[95%] flex flex-col">
                    <h1 className="font-bold text-[35px] md:text-[50px] item-end self-start border-b">Tech stack</h1>
                    <p className="text-[13px] md:text-[17px] mt-2 text-gray-400">List of my favorite technologies and tools I use everyday.</p>
                    <div>
                        <Tabs defaultValue="all" className="w-[100%] mt-10 md:mt-14">
                            <TabsList className="w-[100%] h-[55px]">
                                <TabsTrigger value="all" className="w-[25%] h-[50px] text-[12px] md:text-[14px]">All</TabsTrigger>
                                <TabsTrigger value="software" className="w-[25%] h-[50px] text-[12px] md:text-[14px]">Software</TabsTrigger>
                                <TabsTrigger value="ops" className="w-[25%] h-[50px] text-[12px] md:text-[14px]">Ops</TabsTrigger>
                                <TabsTrigger value="crm" className="w-[25%] h-[50px] text-[12px] md:text-[14px]">CRM</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all">
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
                                        <Alert>
                                            <AlertTitle>
                                                NextJS
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">React framework</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Spring Boot
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Java Framework</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                React
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">JavaScript library</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Python
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Php
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Docker
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Containerization tool</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Kubernetes
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Container orchestration tool</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Github Actions
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Continuous integration tool</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Apex
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Salesforce programming language</AlertDescription>
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
                                        <Alert className="">
                                            <AlertTitle>
                                                NextJS
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">React framework</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Spring Boot
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Java Framework</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                React
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">JavaScript library</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Python
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Php
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Programming Language</AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="ops">
                                <div className="w-full h-[500px] mt-4 z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <Alert>
                                            <AlertTitle>
                                                Docker
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Containerization tool</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Kubernetes
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Container orchestration tool</AlertDescription>
                                        </Alert>
                                        <Alert>
                                            <AlertTitle>
                                                Github Actions
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Continuous integration tool</AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="crm">
                                <div className="w-full h-[500px] mt-4 z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <Alert>
                                            <AlertTitle>
                                                Apex
                                            </AlertTitle>
                                            <AlertDescription className="text-gray-400 mt-1">Salesforce programming language</AlertDescription>
                                        </Alert>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
        
     );
}
 
export default MainSection; 