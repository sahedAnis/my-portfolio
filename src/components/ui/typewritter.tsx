"use client"
import { TypeAnimation } from "react-type-animation"

export default function TypeWritter() {
    return (
        <>
            <TypeAnimation
                sequence={[
                    "Software Engineer",
                    2200,
                    "Salesforce Certified Developer",
                    2800,
                    "Full-stack Developer",
                    2800,
                    "Software architecture ninja",
                    3000,
                    "DevOps advocate",
                    2800,
                    "Clean coder",
                    2300,
                    "APIs lover",
                    2300,
                    "Code reviewer",
                    2500,
                    "UX/UI enthusiat",
                    2600,
                    "Agile practitioner",
                    2600,
                    "Quality assurance guardian",
                    3000,
                    "Football aficionado",
                    2500
                ]}
                repeat={Infinity}
                className="font-bold text-[30px] sm:text-[70px] 2xl:text-[90px]"
            />
        </>
    )
}