import MainNav from "@/components/main-nav";
import MainSection from "@/components/main-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <MainNav />
        <MainSection />
      </div>
      
    </>
    
  );
}
