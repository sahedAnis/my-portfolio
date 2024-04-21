"use client";

import { TypeAnimation } from "react-type-animation";
import { useRef } from 'react';

interface TypeWritterProps {
    sequence: any[];
}

export default function TypeWritter({ sequence }: TypeWritterProps) {
  
    const typeAnimationRef = useRef<any>(null);

  return (
    <>
      <TypeAnimation
        ref={typeAnimationRef}
        sequence={sequence}
        repeat={Infinity}
        className="font-bold text-[30px] sm:text-[70px] 2xl:text-[90px]"
      />
    </>
  );
}
